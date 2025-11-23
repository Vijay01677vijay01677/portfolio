import profile from "../assets/profile.png"
const Hero = () => {
    return (
        <>
        <div className="
      relative min-h-screen flex items-center justify-center
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
    ">
            <div className=" flex flex-col md:flex-row  items-center  gap-10 md:gap-3 m-32 px-5 ">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex flex-col items-center lg:items-start gap-5 text-amber-50">
                        <h1 className=" text-4xl font-bold tracking-wide">BALLA VIJAY KUMAR</h1>
                        <p className="text-2xl font-semibold">FULL STACK DEVELOPER</p>
                        <p className="leading-relaxed text-lg text-justify text-gray-50">I am a dedicated web developer with a deep passion for crafting 
                            modern, efficient, and visually engaging digital experiences. I have developed a strong foundation in HTML, CSS, JavaScript, 
                            and React, and I am steadily expanding my expertise toward full stack development. I enjoy 
                            transforming concepts into clean, responsive interfaces and writing code that is both scalable and maintainable. Continuous learning is at the core of my journey, and I am committed to mastering advanced technologies to build impactful and high-quality web applications.
                        </p>


                    </div>
                </div>
                    
                    {/* img div */}

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 rounded-full">
                        <img src={profile} alt="profile" className=" w-64 shadow lg:w-96 h-auto rounded-full     " />

                    </div>

               

            </div>
        </div>

            

        </>
    )
}

export default Hero;