import { useState } from "react";
import axios from 'axios'
const Contact=()=>{
    
    const [result, setResult] = useState("");

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    formData.append("access_key", "bb66ad01-6121-4a97-bf74-f575d70357f8");
   

    const res=await axios.post("https://api.web3forms.com/submit",formData);
    
    setResult(res.data.success ? "Success!" : "Error");
  };
   return (
     <div className="
      relative py-20
      bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
      [background-size:16px_16px]
    ">
     
      <h1 className="text-4xl font-bold text-center tracking-wider mb-10">CONTACT</h1>
    

   
    <form onSubmit={onSubmit} >
      <div className="flex flex-row justify-center items-center gap-6 mb-10">
      
      <input type="text" name="name" required  placeholder="name" className="border-b-2 border-blue-500 outline-none  focus:outline-none  focus:border-blue-700 bg-transparent"/>
      <input type="email" name="email" required  placeholder="email" className="border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 bg-transparent"/>
      </div>
      <div className="flex flex-col items-center gap-6 ">
      <textarea name="message" required  placeholder="text" className="border-b-2 border-blue-500 focus:outline-none  px-4 py-3 focus:border-blue-700 bg-transparent h-10 w-80"></textarea>
      <button type="submit" className=" border border-2  text-blue-500 rounded-lg px-4 py-1 hover:bg-blue-500 hover:text-gray-100   border-blue-500  focus:outline-none focus:border-blue-700 bg-transparent">Submit</button>
      <p className="border">{result}</p>
      </div>

      

    </form>

    </div>
  


  );
}
export default Contact;

