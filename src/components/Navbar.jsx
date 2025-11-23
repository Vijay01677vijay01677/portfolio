import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"



const Navbar = () => {
    return (
        <>
        <div className="relative">
      
      {/* Background only for the navbar */}
      <div className="absolute inset-0 -z-10 h-full w-full 
        bg-[linear-gradient(90deg,#000,#1a1a40)] 
        opacity-90">
      </div>
            <nav className=" flex items-center justify-between py-0.5  rounded-2xl ">
                <div className="flex flex-shrink-0 items-center h-10 w-10 rounded-2xl" >
                    <img className="w-20 lg:w-28 h-auto mx-4 rounded-lg shadow transition-transform duration-300 hover:scale-105"
                     src={logo} alt="logo" />

                </div>
                <div className="flex items-center justify-center gap-3 m-6  text-2xl bg-amber-50 ">
                    <a href="" target="_blank" className="cursor-pointer">
                        <FaLinkedin />

                    </a>
                    <a href="https://github.com/Vijay01677vijay01677" target="_blank" className="cursor-pointer">
                        <FaGithub />

                    </a>
                    <a href="https://www.instagram.com/balla_vijay_0/" target="_blank" className="cursor-pointer">
                        <FaInstagram />
                    </a>
                </div>

            </nav>
            </div>
        </>
    )
}

export default Navbar;