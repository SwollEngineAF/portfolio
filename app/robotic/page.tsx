import React from 'react';

export const metadata = {
  title: 'Robotic',
};

export default function RoboticPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold">Robotic</h1>
      <p className="text-center max-w-xl">
        This page showcases my robotics work in SPB. Explore the code repository and project board below.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/SwollEngineAF/lipan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          GitHub Repo
        </a>
        <a
          href="https://github.com/users/SwollEngineAF/projects/1/views/1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Project Board
        </a>
      </div>
    </main>
  );
}
