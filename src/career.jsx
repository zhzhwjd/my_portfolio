import './style.css'
import Infiniq from './assets/infiniq.png'
import GiantSolution from './assets/giantsolution.jpg'
import icmn from './assets/icmn.jpg'
import hexaveil from './assets/hexaveil.jpg'

function Career() {

    return (
        <>
            <section id="career" className="mt-24 px-16">
                {/* <div className="h-[70px] mb-100">
                    <h1 className="text-2xl font-bold">경 력 사 항</h1>
                </div> */}

                <div class="grid grid-cols-1 gap-4 text-center mb-8">
                    <div class="h-28 rounded-lg border-4 border-black bg-blue-300  flex items-center justify-center">
                        <h1 className="mx-auto text-5xl font-bold">경 력 사 항</h1>
                    </div>
                </div>

                <div className="grid gird-cols-1 bg-white rounded-lg border-2 border-black">
                    <div className="flex-row">
                        <div className="grid grid-cols-[35%_65%]">
                            <div className="flex justify-center items-center pl-16">
                                <img
                                    src={Infiniq}
                                    className="w-[60vw] h-auto object-contain"
                                />
                            </div>
                            <div className="flow-root p-16">
                                <dl className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">회사명</dt>
                                        <dd className="text-gray-700 ">(주)인피닉</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">경력</dt>
                                        <dd className="text-gray-700 sm:col-span-2">2019.07 ~ 2020.01 (7개월)</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">직무</dt>
                                        <dd className="text-gray-700 sm:col-span-2">QA 테스터</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">맡은업무</dt>

                                        <dd className="text-gray-700 sm:col-span-2">
                                            자동차 부문을 맡았으며, 신제품 출시 전에 자동차의 클러스터(cluster)의 결함을 찾는 업무를 하였습니다.<br /><br /><br />
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="grid grid-cols-[35%_65%]">
                            <div className="flex justify-center items-center pl-16">
                                <img
                                    src={GiantSolution}
                                    className="w-[60vw] h-auto object-contain"
                                />
                            </div>
                            <div className="flow-root p-16">
                                <dl className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">회사명</dt>
                                        <dd className="text-gray-700 ">자이언트솔루션</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">경력</dt>
                                        <dd className="text-gray-700 sm:col-span-2">2022.03 ~ 2022.12 (9개월)</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">직무</dt>
                                        <dd className="text-gray-700 sm:col-span-2">웹개발</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">맡은업무</dt>

                                        <dd className="text-gray-700 sm:col-span-2">
                                            주로 파견을 나가서 근무했으며, JAVA, Spring Boot을 이용한 웹개발 업무를 하였습니다.<br /><br /><br />
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="grid grid-cols-[35%_65%]">
                            <div className="flex justify-center items-center pl-16">
                                <img
                                    src={icmn}
                                    className="max-w-full h-auto object-contain"
                                />
                            </div>
                            <div className="flow-root p-16">
                                <dl className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">회사명</dt>
                                        <dd className="text-gray-700 ">아이씨엠엔(주)</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">경력</dt>
                                        <dd className="text-gray-700 sm:col-span-2">2023.02 ~ 2023.07 (6개월)</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">직무</dt>
                                        <dd className="text-gray-700 sm:col-span-2">웹개발</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">맡은업무</dt>

                                        <dd className="text-gray-700 sm:col-span-2">
                                            JAVA를 이용하여 공공기관 홈페이지의 유지보수를 맡았으며, docker를 통해 배포를 하는 등의 업무를 맡았습니다.<br /><br /><br />
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="grid grid-cols-[35%_65%]">
                            <div className="flex justify-center items-center pl-16">
                                <img
                                    src={hexaveil}
                                    className="max-w-full h-auto object-contain"
                                />
                            </div>
                            <div className="flow-root p-16">
                                <dl className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">회사명</dt>
                                        <dd className="text-gray-700 ">헥사베일</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">경력</dt>
                                        <dd className="text-gray-700 sm:col-span-2">2024.09 ~ 2025.02 (6개월)</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">직무</dt>
                                        <dd className="text-gray-700 sm:col-span-2">연구원</dd>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className="font-bold text-gray-900">맡은업무</dt>

                                        <dd className="text-gray-700 sm:col-span-2">
                                            React, Next.js를 활용한 웹개발업무를 주로 맡았으며, <br />
                                            kotlin을 이용하여 flutter및 Xcode로 앱개발업무도 보조하였습니다.<br /><br /><br />
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="pl-16 pt-8 pb-8">
                            <h1 className="mx-auto text-4xl font-medium">ㆍ총 경력 : 2년 5개월</h1>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Career