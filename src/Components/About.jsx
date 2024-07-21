import aboutImage from "../assets/about.jpg"
import hackphoto from "../assets/hack.png"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1 , scale:1,x:0}} initial={{opacity:0, scale:0.7,x:-12}} transition={{duration:1.25}}  animate={{x: [0, 100, 0]}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt=""  className="rounded-2xl h-[550px] w-[400px]"/>
                </div>
            </motion.div>
            <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-120}}
                        transition={{duration:1}}
            className="w-full lg:w-1/2 mt-auto mb-auto">
                <div className="flex justify-center lg:justify-start ">
                    <p className="max-w-xl lg:pl-12 text-xl text-neutral-400">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
        <div className="flex flex-wrap">
            <motion.div 
                        whileInView={{opacity:1 , scale:1}} initial={{opacity:0, scale:0.7}} transition={{duration:1.25}}
                        animate={{ x: [0, 100, 0] }}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center lg:justify-start flex-col">
                    <h2 className='font-medium mt-10 text-5xl lg:px-12'>Engaged in <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent'>15+ Hackathons</span> Across Diverse Locales, Blending Online And Offline Formats</h2>
                    <p className='max-w-xl pt-6 lg:pl-12 text-2xl text-neutral-400'>I am seasoned in Hackathons, having participated in over 15 events, both online and offline, across various states. With each competition,I am honed my by problem-solving skills and fostered innovation, consistently delivering impactful solutions under pressure.</p>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity:1 , scale:1}} initial={{opacity:0, scale:0.7}} transition={{duration:1.25}} 
                className="w-full lg:w-1/2 mt-20">
                    <div className="flex items-center justify-center">
                        <img src={hackphoto} alt="my about"  className="rounded-2xl "/>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;