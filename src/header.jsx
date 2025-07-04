import home from './assets/home.png'
import downArrow from './assets/down-arrow.png'
import { useEffect, useState } from "react";

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`h-18 sticky top-0 z-50 px-4 md:px-8 lg:px-16 transition-all ${scrolled ? "bg-pink-200 shadow-md" : "bg-yellow-100"
                    }`}            >
         
                <div className="grid grid-cols-[15%_70%_15%] h-16 items-center">
                    <div className="flex" >
                        <a className="block text-teal-600" href="#profile">
                            <img
                                alt=""
                                src={home}
                                className="h-8"
                            />
                        </a>
                    </div>

                    <div>
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex justify-center gap-20 text-lg sm:text-base md:text-xl lg:text-xl font-bold">
                                <li>
                                    <a className="text-black transition hover:text-pink-500/75" href="#about"> About </a>
                                </li>

                                <li>
                                    <a className="text-black transition hover:text-pink-500/75" href="#career"> Career </a>
                                </li>

                                <li>
                                    <a className="text-black transition hover:text-pink-500/75" href="#portfolio"> Portfolio & Skill</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex justify-end">
                        <a className="block text-teal-600" href="#footer">
                            <img
                                alt=""
                                src={downArrow}
                                className="h-7"
                            />
                        </a>
                    </div>
                </div>
          
            </header>
        </>
    )
}

export default Header