const Header = () => {
  return (
    <header className="border-b border-[#F9F9F9] bg-white shadow-sm w-full">
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">LiveStudy</h1>

        <div className="flex items-center space-x-4">
          <div className="text-sm text-right">
            <div>
              환영합니다. <strong>홍길동님 !</strong>
            </div>
            <div className="text-xs">
              오늘 집중 시간 : <strong>02:03:56</strong>
            </div>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md text-sm z-10">
              <ul className="divide-y divide-gray-200">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">마이페이지</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">통계</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">고객센터</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">로그아웃</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
