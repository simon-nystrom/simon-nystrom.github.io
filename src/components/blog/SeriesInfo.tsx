const seriesInfoMap: { [key: string]: string } = {
  "command line tool monthly":
    "Command line tool monthly is a series where I write monthly about a useful command line tool that I like.",
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
