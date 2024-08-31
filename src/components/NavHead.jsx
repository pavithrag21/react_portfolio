import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const navbar = () => {
  return <>
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center text-2xl border border-purple-600 rounded-md hover:border-cyan-900 text-white font-sans font-bold px-3" >
            <button>portfolio</button>
            </div> 
            <div className="flex items-center gap-4 justify-center m-6 text-2xl text-white" >
              <a href="https://www.linkedin.com/in/pavithra-g-788631236" target="_blank"><FaLinkedin/></a>
              <a href="https://github.com/pavithrag21" target="_blank"><FaGithub/></a>
              <a href="https://www.instagram.com/iam_pavi_21/" target="_blank"><FaInstagram/></a>
            </div>
            </nav>
  </>
}

export default navbar;