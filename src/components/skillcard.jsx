const Skillcard=({img,name})=>{
return(
    <>
    <div className="flex flex-col items-center bg-white p-4 rounded-2xl  background-blur-sm shadow hover:scale-105 transition-transform w-36 h-36 ">
    
        <img src={img} alt={name} className="w-20 h-20 object-contain"/>
        <p className="text-black mt-3 text-lg font-semibold">{name}</p>

    </div>
    </>

)   
}

export default Skillcard;