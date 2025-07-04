import './style.css'
import React from 'react';
import profile from './assets/resume.jpg'
import myImg from './assets/myImg.png'
import ballon from './assets/balloon.png'
import { Card } from "flowbite-react";
import { TypeAnimation } from 'react-type-animation';

function MyInfo() {

    return (
        <>

            <section id="profile" className="relative grid grid-cols-2 px-16">
                <div className="flex relative pl-10">
                    <img
                        src={ballon}
                        className="min-w-[75vw] min-h-[130vh] mx-auto w-2/3 md:w-1/2 lg:w-1/2"
                    />

                    <div className="absolute top-[37%] text-center font-Pretendard text-3xl sm:text-4xl md:text-5xl font-bold min-w-[75vw] min-h-[100vh]px-4 text-orange-500">
                        <p className="leading-snug">
                            <TypeAnimation
                                sequence={[
                                    '안녕하세요!',
                                    1000,
                                ]}
                                speed={50}
                                wrapper="div"
                                cursor={false}
                                repeat={0}
                            />
                        </p>
                        <p className="leading-snug">
                            <TypeAnimation
                                sequence={[
                                    1000,
                                    '성장 가능성이 있는',
                                    1000,
                                ]}
                                speed={50}
                                wrapper="div"
                                cursor={false}
                                repeat={0}
                            />
                        </p>
                        <p className="leading-snug">
                            <TypeAnimation
                                sequence={[
                                    2000,
                                    'Full-Stack Developer',
                                    1000,
                                ]}
                                speed={50}
                                wrapper="div"
                                cursor={false}
                                repeat={0}
                            />
                        </p>
                        <p className="leading-snug">
                            <TypeAnimation
                                sequence={[
                                    3000,
                                    '송정현 입니다.',
                                    1000,
                                ]}
                                speed={50}
                                wrapper="div"
                                cursor={true}
                                repeat={0}
                            />
                        </p>
                    </div>
                </div>

                <div className="flex ml-10">
                    <img
                        src={myImg}
                        className="absolute min-w-[40vw] min-h-full mx-auto w-2/3 md:w-1/2 lg:w-1/2 object-contain"
                    />
                </div>
            </section>

            {/* <a href="#" className="group relative block bg-black">
                <img
                    alt=""
                    src={profile}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Full-Stack Developer</p>

                    <p className="text-xl font-bold text-white sm:text-2xl">송 정 현</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                배고프다
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <div className="flex justify-center h-screen bg-blue-100">
                <Card href="#" className=" max-w-3xl l">

                    <div className="bg-pink-100 rounded-2xl shadow-md p-6 max-w-md mx-auto">
                        <h2 className="text-xl font-bold text-red-500 mb-2">송정현</h2>
                        <p className="text-gray-700">1996년 8월 18일 출생</p>
                        <p className="text-gray-500">Frontend Developer</p>
                    </div>
                </Card>
            </div> */}
        </>
    )
}

export default MyInfo