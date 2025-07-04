import './style.css'
import resume from './assets/resume.jpg'


function About() {

    return (
        <>
            <section id="about" className="w-full px-4 md:px-8 lg:px-16">
                <div className="bg-white group relative min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_65%] lg:min-h-[110vh] border-2 border-black">

                    {/* 왼쪽 이미지 영역 */}
                    <div className="flex justify-center items-center p-4">
                        <img
                            src={resume}
                            alt="resume"
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                    </div>

                    {/* 오른쪽 텍스트 및 테이블 영역 */}
                    <div className="relative flex flex-col justify-center p-4 lg:p-8">

                        {/* 기본 About 텍스트 */}
                        <div className="transition-opacity duration-300 group-hover:opacity-0">
                            <h1 className="text-6xl md:text-7xl font-bold text-center mb-4">About me</h1>
                            <p className="text-lg md:text-xl text-center text-gray-800">
                                안녕하세요. 저에 대해 소개합니다.
                            </p>
                        </div>

                        {/* hover 시 나타나는 테이블 */}
                        <div className="absolute h-[90vh] left-0 w-full px-4 lg:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-full mx-auto space-y-6">
                                {/* 첫 번째 테이블 */}
                                <table className="table-fixed w-full border-collapse border border-black text-base md:text-lg lg:text-xl bg-white">
                                    <colgroup>
                                        <col style={{ width: '20%' }} />
                                        <col style={{ width: '25%' }} />
                                        <col style={{ width: '20%' }} />
                                        <col style={{ width: '35%' }} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th className="border p-2 border-black bg-blue-100 text-center font-bold">이름</th>
                                            <td className="border p-2 border-black">송정현</td>
                                            <th className="border p-2 border-black bg-blue-100 text-center font-bold">생년월일</th>
                                            <td className="border p-2 border-black">1996년 08월 18일</td>
                                        </tr>
                                        <tr>
                                            <th className="border p-2 border-black bg-blue-100 text-center font-bold">연락처</th>
                                            <td className="border p-2 border-black">010-3689-5469</td>
                                            <th className="border p-2 border-black bg-blue-100 text-center font-bold">이메일</th>
                                            <td className="border p-2 border-black">judy001002@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-black bg-blue-100 p-2 text-center font-bold h-24">주소지</th>
                                            <td colSpan="3" className="border border-black p-2 h-24">경기도 고양시 덕양구 행신동</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* 두 번째 테이블 */}
                                <table className="table-fixed w-full border-collapse border border-black text-base md:text-lg lg:text-xl bg-white">
                                    <colgroup>
                                        <col style={{ width: '20%' }} />
                                        <col style={{ width: '45%' }} />
                                        <col style={{ width: '15%' }} />
                                        <col style={{ width: '20%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="border p-2 border-black bg-blue-100 text-center">기간</th>
                                            <th className="border p-2 border-black bg-blue-100 text-center">학력 사항</th>
                                            <th className="border p-2 border-black bg-blue-100 text-center">학점</th>
                                            <th className="border p-2 border-black bg-blue-100 text-center">졸업 여부</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-lg text-center">
                                            <td className="border p-2 border-black">16.02 ~ 18.02</td>
                                            <td className="border p-2 border-black">동양미래대학교 정보전자공학과</td>
                                            <td className="border p-2 border-black">3.33 / 4.5</td>
                                            <td className="border p-2 border-black">졸업</td>
                                        </tr>
                                        <tr className="text-lg text-center">
                                            <td className="border p-2 border-black">20.06 ~ 23.02</td>
                                            <td className="border p-2 border-black">한국방송통신대학교 컴퓨터과학과</td>
                                            <td className="border p-2 border-black">3.9 / 4.5</td>
                                            <td className="border p-2 border-black">편입 및 졸업</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* 세 번째 테이블 */}
                                <table className="table-fixed w-full border-collapse border border-black text-xl bg-white">
                                    <colgroup>
                                        <col style={{ width: '45%' }} />
                                        <col style={{ width: '35%' }} />
                                        <col style={{ width: '20%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="border p-2 border-black bg-blue-100 text-center">자격증</th>
                                            <th className="border p-2 border-black bg-blue-100 text-center">발행처</th>
                                            <th className="border p-2 border-black bg-blue-100 text-center">합격년월</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-lg text-center">
                                            <td className="border p-2 border-black">정보처리산업기사</td>
                                            <td className="border p-2 border-black">한국산업인력공단</td>
                                            <td className="border p-2 border-black">2020년 6월</td>
                                        </tr>
                                        <tr className="text-lg text-center">
                                           <td className="border p-2 border-black">파이썬마스터 2급</td>
                                            <td className="border p-2 border-black">한국정보통신진흥협회</td>
                                            <td className="border p-2 border-black">2020년 10월</td>
                                        </tr>
                                        <tr className="text-lg text-center">                                            
                                             <td className="border p-2 border-black">SQL개발자(SQLD)</td>
                                            <td className="border p-2 border-black">한국데이터베이스진흥센터</td>
                                            <td className="border p-2 border-black">2023년 4월</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About