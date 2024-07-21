import logo from "../assets/logo.png";
import {FaLinkedin,} from "react-icons/fa";
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { TbBrandLeetcode } from "react-icons/tb";
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="mx-2 h-20 w-50" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.linkedin.com/in/saisidharthan/'><FaLinkedin/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://github.com/Saisidharthan'><FaGithub/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.instagram.com/_sai_sidharth_17/'><FaInstagram/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://leetcode.com/u/HSaisidharth/'><TbBrandLeetcode /></motion.a>
        </div>
    </nav>
  )
}

export default Navbar