import { useEffect, useState } from "react";

type TypewriterProps = {
  texts: string[];
  period?: number;
};

const Typewriter: React.FC<TypewriterProps> = ({ texts, period = 2000 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
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
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else {
        setDelta(isDeleting ? delta / 2 : 200 - Math.random() * 100);
      }
    };

    const ticker = setTimeout(() => {
      handleTick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, loopNum, texts, period]);

  return (
    <span className="typewrite">
      <span className="wrap">{text}</span>
    </span>
  );
};

export default Typewriter;