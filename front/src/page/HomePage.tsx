import Header from '../components/common/Header';

const HomePage = () => {
  const handleEnterStudyRoom = () => {};

  return (
    <div className="bg-gray-50 flex flex-col nodrag min-h-screen overflow-hidden">
      <Header />
      <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <button
          onClick={handleEnterStudyRoom}
          className="large-button text-xl sm:text-2xl md:text-3xl font-extrabold shadow-xl 
                     bg-primary-500 text-white hover:bg-primary-400 transition-all duration-300 
                     pointer-events-auto"
        >
          스터디룸 입장하기
        </button>
      </div>
      <main className="relative w-full max-w-[1280px] m-auto overflow-hidden">
        <div className="w-full h-full backdrop-blur-md bg-white/40 rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full p-4">
            {Array.from({ length: 20 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded shadow-sm overflow-hidden flex items-center justify-center"
              >
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
