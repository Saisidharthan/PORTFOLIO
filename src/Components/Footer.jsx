import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { TbBrandLeetcode } from "react-icons/tb"
const Footer = () => {
  return (
    <div className="border-b border-neutral-100 pb-20">
        <motion.h1  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-10 text-center text-4xl"> Get In Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}}className="my-4 ">{CONTACT.address}</motion.p>
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.linkedin.com/in/saisidharthan/'><FaLinkedin/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://github.com/Saisidharthan'><FaGithub/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.instagram.com/_sai_sidharth_17/'><FaInstagram/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://leetcode.com/u/HSaisidharth/'><TbBrandLeetcode /></motion.a>
        </div>
    </div>
  )
}

export default Footer