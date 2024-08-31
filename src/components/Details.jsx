// import { IoMdContacts } from "react-icons/io";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Swal from "sweetalert2";

const Details = () => {
    // const [result, setResult] = React.useState("");
    

    const onSubmit = async (event) => {
        // console.log(process.env.REACT_APP_API_KEY);
        event.preventDefault();

        const formData = new FormData(event.target);
    
        formData.append("access_key","defb79fa-97d7-4226-80bf-43b404ad7714");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Thankyou!!",
                text: "Message sent successful",
                icon: "success"
              });
        }
      };
    return (

    <div >
        <div className='container bg-slate-950 bg-opacity-45'>
            <div className='flex flex-col lg:flex-row '>
                <div className='w-full lg:w-1/2 p-4 '>
                <div className="border border-blue-200 border-4 rounded-lg ">
                    {/* <h4 className='text-blue-100'>Get in Touch</h4> */}
                    <h2 className='tracking-wider text-start p-4 font-bold text-2xl sm:text-3xl lg:text-4xl dark:text-white'>Wanna Hire Me! </h2>
                    <p className="flex flex-row justify-items-center text-wrap text-sm md:text-base text-blue-200 px-4 pt-2 hidden max-md:block">Eager to contribute, I’ll provide innovative web solutions and drive your association’s growth with agile methodologies for efficient results.</p>
                    <p className="flex flex-row justify-items-center text-wrap text-sm md:text-base text-blue-200 px-4 pt-2 hidden md:block">Eager to work with you, I’m driven by a passion for web development, bringing innovative, tailor-made solutions to life. If you hire me, I will contribute to the project for the development of your association, ensuring every project is efficient, adaptable, and perfectly aligned with your vision through agile methodologies.</p>
                    <div className="flex justify-center "><a href="https://drive.google.com/file/d/1wFKZjZCC75dIWxFPqQ7hIJ3z6qDLQz-C/view?usp=sharing" target="_blank"><button className="rounded-2xl p-4 flex flex-row mt-4 text-black bg-gradient-to-r from-blue-800 to-blue-300"><IoMdDownload className="mt-1 mx-1"/><b>Resume</b></button></a></div>

                    
                <div className="flex flex-row justify-center gap-2 m-6" >
                    <a href="https://www.linkedin.com/in/pavithra-g-788631236" target="_blank">
                    <FaLinkedin className="text-3xl"/></a>
                    <a href="https://github.com/pavithrag21" target="_blank">
                    <FaGithub  className="text-3xl"/></a>
                   <a href="https://www.hackerrank.com/profile/pavithrakrishna8"> <FaHackerrank className="text-3xl"/></a>
                    <a href="https://leetcode.com/u/pavithragokul/"><TbBrandLeetcode className="text-3xl"/></a>
                    <a href="https://www.geeksforgeeks.org/user/pavithrakrishnan650/"><SiGeeksforgeeks className="text-3xl"/></a>
                </div>
                </div>
                    </div>
                <form className='w-full lg:w-1/2 p-4' onSubmit={onSubmit}>
                <h2 className='tracking-wider p-4 font-bold text-2xl sm:text-3xl lg:text-4xl dark:text-white text-center'>Contact me </h2>
                <div>
                <input className="bg-transparent border-b-2 w-full outline-none  focus:border-blue-500 my-6 font-bold" type="text" name="name"placeholder="Your Name"></input>
                <input className="bg-transparent border-b-2 w-full outline-none focus:border-blue-500 my-6 font-bold" type="email" name="email"placeholder="Your Email"></input>
                <textarea name="message"className="bg-transparent border-b-2 w-full outline-none focus:border-blue-500 my-6 font-bold" type="email" placeholder="Message"></textarea>
                <div className="flex justify-center">
                    <button className="bg-slate-800 p-3 rounded-lg bg-gradient-to-r from-blue-800 to-blue-300 text-black font-bold">Submit</button>
                </div>
                </div>
                </form>
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Details;