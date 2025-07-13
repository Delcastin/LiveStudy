function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* 로고 */}
        <h1 className="large-title mb-12 text-primary-500">
          LiveStudy
        </h1>

        {/* 로그인 버튼들 */}
        <div className="w-full flex flex-col gap-3">
          <button className="w-full py-3 bg-[#eee] rounded-[4px] hover:bg-primary-400 hover:text-white">Email 로그인</button>
          <button className="w-full py-3 bg-[#eee] rounded-[4px] hover:bg-primary-400 hover:text-white">Google 로그인</button>
          <button className="w-full py-3 bg-[#eee] rounded-[4px] hover:bg-primary-400 hover:text-white">Kakao 로그인</button>
          <button className="w-full py-3 bg-[#eee] rounded-[4px] hover:bg-primary-400 hover:text-white">Naver 로그인</button>
        </div>

        {/* ID/PW 찾기 & 회원가입 */}
        <div className="w-full flex justify-between text-sm text-gray-500 mt-4">
          <button>ID/Password 찾기</button>
          <button>회원가입</button>
        </div>
      </div>
    </section>
  )
}

export default LoginPage;
