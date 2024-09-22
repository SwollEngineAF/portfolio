import { useEffect, useState } from "react";

type TypewriterProps = {
  texts: string[];
  period?: number;
  setLoopNum?: (num: number) => void; // A callback to notify the parent component when the loop changes
  className?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({ texts, period = 2000, setLoopNum, className }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setInternalLoopNum] = useState(0); // Internal loop control
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const handleTick = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setDelta(period);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setInternalLoopNum(loopNum + 1);
        setDelta(500);
        setLoopNum?.(loopNum + 1); // Notify parent component when the loop number changes
      } else {
        setDelta(isDeleting ? delta / 2 : 200 - Math.random() * 100);
      }
    };

    const ticker = setTimeout(() => {
      handleTick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, loopNum, texts, period, setLoopNum]);

  return (
    <span className={`typewrite ${className}`}>
      <span className="wrap">{text}</span>
    </span>
  );
};

export default Typewriter;