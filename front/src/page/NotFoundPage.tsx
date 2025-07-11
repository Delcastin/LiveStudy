import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-8xl md:text-9xl font-bold">404</h1>
      <p className="text-xl md:text-2xl font-light mb-4">페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="medium-button bg-primary-500 text-white hover:bg-primary-400">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
