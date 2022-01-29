const seriesInfoMap: { [key: string]: string } = {
  "command line tool monthly":
    "Command line tool monthly is a series where I write monthly about a useful command line tool that I like.",
  "UI Kit with React, TypeScript, Storybook and Tailwind":
    "UI Kit with React, TypeScript, Storybook and Tailwind is a series where I aim to improve my skills in React, TypeScript, Storybook and Tailwindcss by building my own UI kit from scratch.",
};

const SeriesInfo = ({ series }: { series: string }) => {
  if (!series) return null;
  return (
    <div className="border-orange-400 border-l-4 pl-2 text-sm py-2 mb-6 max-w-screen-md mx-auto">
      {seriesInfoMap[series]}
    </div>
  );
};

export default SeriesInfo;
