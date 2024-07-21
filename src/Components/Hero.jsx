import { motion } from "framer-motion";
import profilepic from "../assets/ProfilePic.jpg";
import { HERO_CONTENT } from "../constants";
const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    }
}
)
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)}
                    initial="hidden"
                    animate="visible"
                     className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ml-6">Sai Sidharthan H</motion.h1>
                    <motion.span variants={container(0.5)}
                    initial="hidden"
                    animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl ml-auto mr-auto tracking-tight text-transparent ">
                        Full Stack Web Developer
                    </motion.span>
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible" className="max-w-xl pt-6 text-lg text-neutral-400 ml-auto mr-auto mt-3">{HERO_CONTENT}</motion.p>
                        <motion.a variants={container(2)} initial="hidden" animate="visible" whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='border-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent rounded-full px-8 py-4 my-5 mr-auto ml-auto' href='https://drive.google.com/file/d/1agMSc4trPt9Fl7WzdboKKF_HRfk7njsQ/view?usp=sharing'>Resume</motion.a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x:100,opacity:0}}
                    transition={{duration:1,delay:1.5}}
                    animate={{ x: [0, 100, 0],opacity:1 }}
                     src={profilepic} alt="profilepic" className="h-[500px] w-[450px] rounded-lg mt-5 brightness-75" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero