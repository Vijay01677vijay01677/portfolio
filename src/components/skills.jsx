import javaImg from "../assets/java.png";
import sql from "../assets/sql.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import javascript from "../assets/js.png"
import node from "../assets/nodejs.png"
import express from "../assets/expressjs.png"
import react from "../assets/react.png"
import  tailwindcss from "../assets/tailwindcss.png"
import monogodb from "../assets/mongodb.png"
import Skillcard from "./skillcard";



const Skills=()=>{
    const skills=[
    {img:javaImg ,name:"JAVA"},
    {img:sql,name:"SQL"},
    {img:html,name:"HTML"},
    {img:css,name:"CSS"},
    {img:javascript,name:"JAVASCRIPT"},
    {img:react,name:"REACT"},
    {img:tailwindcss ,name:"TAILWIND"},
    {img:node ,name:"NODE"},
    {img:express,name:"EXPRESS"},
    {img:monogodb,name:"MONGO DB"}
]
    return (
        <>

        <div className="
      relative py-20
      bg-neutral-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
    ">
        <div className="m-20 ">
            <h1 className="text-4xl text-center text-amber-50 font-bold tracking-wide mb-10">Skills</h1>
            {/* flex contaier for cards */}
            <div 
            // className="flex flex-wrap justify-center gap-6"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 m-20"
            >
               {skills.map((skill,index)=>(
                <Skillcard key={index} img={skill.img} name={skill.name}/>
               ))}

            </div>
        </div>
    </div>
       
        </>
    )
}

export default Skills;