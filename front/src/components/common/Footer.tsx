import { Link } from "react-router-dom";

const Header = () => {
  return (
    <footer className="border-b border-[#eee] bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          {/* 좌측: 로고 */}
          <div className="mb-4 sm:mb-0 font-semibold text-primary-500 text-lg">
            LiveStudy
          </div>

          {/* 우측: 링크 */}
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-primary-400 transition">서비스 소개</Link>
            <Link to="/terms" className="hover:text-primary-400 transition">이용약관</Link>
            <Link to="/privacy" className="hover:text-primary-400 transition">개인정보처리방침</Link>
          </div>
      </div>

        {/* 하단 카피라이트 */}
        <div className="text-center text-xs text-gray-400 mt-4">
          &copy; 2025 LiveStudy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Header;
