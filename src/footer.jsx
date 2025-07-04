import './style.css'

function Footer() {

    return (
        <>
            <footer id="footer" className="px-16 bg-pink-200 text-white py-8 mt-24">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

                    {/* 왼쪽 - 이름 + 설명 */}
                    <div className="text-center px-12 lg:text-left">
                        <h2 className="text-6xl text-black font-semibold">JeongHyeon Song</h2>
                        <p className="text-2xl text-gray-600 mt-3">Full-Stack Developer Portfolio</p>
                    </div>

                    {/* 가운데 - SNS 아이콘
                    <div className="flex space-x-6 text-gray-300 text-xl">
                        <a href="mailto:judy001002@gmail.com" className="hover:text-white">📧</a>
                        <a href="https://github.com/yourgithub" target="_blank" className="hover:text-white">🐱</a>
                        <a href="https://yourblog.com" target="_blank" className="hover:text-white">📝</a>
                    </div> */}

                    {/* 오른쪽 - 저작권 표기 */}
                    <div className="self-end text-sm text-gray-500 text-center lg:text-right">
                        ⓒ 2025 JeongHyeon Song. All rights reserved.
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer