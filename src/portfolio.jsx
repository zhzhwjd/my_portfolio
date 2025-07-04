import './style.css'
import portfolio1 from './assets/봄봄_스프링프로젝트_송정현.pdf'
import portfolio2 from './assets/어썸호텔-프로젝트_최종_송정현.pdf'
import java from './assets/lang/java.png'
import python from './assets/lang/python.png'
import kotlin from './assets/lang/kotlin.png'
import front3 from './assets/front/html3.png'
import flutter from './assets/front/flutter.png'
import next from './assets/front/next-js.png'
import react from './assets/front/react.png'
import tailwind from './assets/front/tailwind.png'
import mariadb from './assets/back/mariadb.png'
import mybatis from './assets/back/MyBatis_logo.png'
import mysql from './assets/back/mysql.png'
import oracledb from './assets/back/oracledb.png'
import springboot from './assets/back/springboot.png'
import docker from './assets/dev/docker.png'
import git from './assets/dev/git.png'
import teamcity from './assets/dev/tc.png'
import figma from './assets/tools/figma.png'
import intelij from './assets/tools/intelij.png'
import postman from './assets/tools/postman.png'
import vscode from './assets/tools/vscode.png'
import xcode from './assets/tools/xcode.png'





function PortfolioAndSkill() {

    return (
        <>
            <section id="portfolio">
                <div className="p-16">
                    <h1 className="mx-auto text-5xl font-bold mb-10">Porfolio</h1>

                    <div className="flex flex-row mb-10">
                        <div className="flex items-center justify-center mr-16">
                            <h1 className="text-xl font-bold">ㆍ봄봄_스프링프로젝트_송정현</h1>
                        </div>
                        <div>
                            <a className="group relative inline-block focus:ring-3 focus:overflow-hidden" href={portfolio1} download>
                                <span
                                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                                ></span>

                                <span
                                    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
                                >
                                    Download
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="flex items-center justify-center mr-10">
                            <h1 className="text-xl font-bold">ㆍ어썸호텔-프로젝트_최종_송정현</h1>
                        </div>
                        <div>
                            <a className="group relative inline-block focus:ring-3 focus:object-contain" href={portfolio2} download>
                                <span
                                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                                ></span>

                                <span
                                    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
                                >
                                    Download
                                </span>
                            </a>
                        </div>
                    </div>

                    <h1 className="mx-auto text-5xl font-bold mt-10 mb-8">Skill</h1>
                    <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2 lg:gap-8">
                        <div className="h-auto rounded-xl bg-red-600 border-2 border-black">
                            <h1 className="p-4 text-2xl font-bold text-yellow-100">Language</h1>
                            <div className="flex flex-row pl-4 gap-6">
                                <div className="flex rounded-xl bg-white">
                                    <img
                                        src={java}
                                        className="w-24 h-24"
                                    />
                                </div>
                                <div className="flex rounded-xl bg-white pl-2 pr-2">
                                    <img
                                        src={python}
                                        className="w-25 h-24"
                                    />
                                </div>
                                <div className="flex rounded-xl bg-white pl-2 pr-2">
                                    <img
                                        src={kotlin}
                                        className="w-35 h-24"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="h-auto rounded-xl bg-orange-500 border-2 border-black">
                            <h1 className="p-4 text-2xl font-bold text-yellow-100">Fronted</h1>
                            <div className="flex flex-col gap-4 pl-4 pr-4 pb-4">
                                <div className="flex flex-row gap-4">
                                    <div className="flex rounded-xl bg-white p-2">
                                        <img
                                            src={front3}
                                            className="w-60 h-22"
                                        />
                                    </div>
                                    <div className="flex rounded-xl bg-white p-2">
                                        <img
                                            src={react}
                                            className="w-24 h-22"
                                        />
                                    </div>
                                    <div className="flex rounded-xl bg-white p-2 pt-3">
                                        <img
                                            src={flutter}
                                            className="w-30 h-20"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex rounded-xl bg-white p-2">
                                        <img
                                            src={tailwind}
                                            className="w-70 h-20"
                                        />
                                    </div>
                                    <div className="flex rounded-xl bg-white p-2">
                                        <img
                                            src={next}
                                            className="w-70 h-24"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2 lg:gap-8">
                        <div className="h-auto rounded-xl bg-yellow-100 border-2 border-black">
                            <h1 className="p-4 text-2xl font-bold text-gray-700">Backend</h1>

                            <div className="flex flex-col gap-4 pl-4 pr-4 pb-4">
                                <div className="flex flex-row gap-4 ">
                                    <div className="flex rounded-xl bg-white pl-2 pr-2">
                                        <img
                                            src={springboot}
                                            className="w-60 h-22"
                                        />
                                    </div>
                                    <div className="flex rounded-xl bg-white p-2">
                                        <img
                                            src={oracledb}
                                            className="w-28 h-28"
                                        />
                                    </div>
                                    <div className="flex rounded-xl bg-white p-2 pt-4">
                                        <img
                                            src={mariadb}
                                            className="w-30 h-24"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex rounded-xl bg-white p-3">
                                        <img
                                            src={mysql}
                                            className="w-30 h-20"
                                        />
                                    </div>
                                    <div className="flex rounded-xl bg-white p-2">
                                        <img
                                            src={mybatis}
                                            className="w-50 h-20"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto rounded-xl bg-green-500 border-2 border-black">
                            <h1 className="p-4 text-2xl font-bold text-yellow-100">DevOps</h1>
                            <div className="flex flex-row gap-4 pl-4 pr-4">
                                <div className="flex rounded-xl bg-white pl-2 pr-2">
                                    <img
                                        src={docker}
                                        className="w-24 h-24"
                                    />
                                </div>
                                <div className="flex rounded-xl bg-white p-2">
                                    <img
                                        src={teamcity}
                                        className="w-24 h-24"
                                    />
                                </div>
                                <div className="flex rounded-xl bg-white p-2 pt-4">
                                    <img
                                        src={git}
                                        className="w-30 h-24"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-1 lg:gap-8">
                        <div className="h-auto rounded-xl bg-blue-500 border-2 border-black">
                            <h1 className="p-4 text-2xl font-bold text-white">Tools & IDE</h1>

                            <div className="flex flex-row gap-4 pl-4 pr-4 pb-4">
                                <div className="flex rounded-xl bg-white p-2">
                                    <img
                                        src={figma}
                                        className="w-60 h-22"
                                    />
                                </div>
                                <div className="flex rounded-xl bg-white p-2">
                                    <img
                                        src={intelij}
                                        className="w-28 h-28"
                                    />
                                </div>
                                <div className="flex rounded-xl bg-white p-2 pt-3">
                                    <img
                                        src={vscode}
                                        className="w-30 h-28"
                                    />
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex rounded-xl bg-white p-2 pt-3">
                                        <img
                                            src={xcode}
                                            className="w-28 h-28"
                                        />
                                    </div>
                                    <div className="flex rounded-xl bg-white p-2 pr-5 pt-4">
                                        <img
                                            src={postman}
                                            className="w-28 h-28"

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default PortfolioAndSkill