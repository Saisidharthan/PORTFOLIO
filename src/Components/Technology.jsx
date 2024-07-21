import { BiLogoDocker, BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaAws, FaGitAlt, FaNodeJs } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { RiOpenaiFill, RiReactjsLine } from "react-icons/ri"
import { SiFastapi, SiMongodb, SiPython, SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-15],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
});
const Technology = () => {
  return (
    <div className="border-b  border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technology</motion.h2>
        <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-950">
                <RiReactjsLine  className="text-6xl text-cyan-400"/>
            </motion.div>
            
            <motion.div 
                            variants={iconVariants(3.5)}
                            initial="initial"
                            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <TbBrandNextjs className="text-6xl " />
            </motion.div>
            <motion.div 
                                        variants={iconVariants(5)}
                                        initial="initial"
                                        animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <SiMongodb className="text-6xl text-green-500" />
            </motion.div>
            <motion.div 
                                                    variants={iconVariants(1)}
                                                    initial="initial"
                                                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <DiRedis className="text-6xl text-red-500" />
            </motion.div>
            <motion.div 
                                                    variants={iconVariants(3.5)}
                                                    initial="initial"
                                                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <FaNodeJs className="text-6xl text-green-500" />
            </motion.div>
            <motion.div 
                                                    variants={iconVariants(5)}
                                                    initial="initial"
                                                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <BiLogoPostgresql className="text-6xl text-cyan-400" />
            </motion.div>
            <motion.div                                         variants={iconVariants(2)}
                                        initial="initial"
                                        animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <BiLogoDocker className="text-6xl  text-cyan-400" />
            </motion.div>
           <motion.div                variants={iconVariants(0)}
                                        initial="initial"
                                        animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <GrMysql className='text-6xl text-blue-900'/>
            </motion.div>
            <motion.div 
                                                    variants={iconVariants(4.5)}
                                                    initial="initial"
                                                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <SiPython className='text-6xl text-blue-900'/>
            </motion.div>
            <motion.div 
                                                    variants={iconVariants(6)}
                                                    initial="initial"
                                                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <FaAws className='text-6xl text-neutral-100'/>
            </motion.div>
            <motion.div  variants={iconVariants(1)} initial="initial" animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <SiFastapi className='text-6xl text-green-400'/>
            </motion.div>
            <motion.div 

                    variants={iconVariants(5.5)}
                    initial="initial"
                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <FaGitAlt className='text-6xl text-red-700'/>
            </motion.div>
            <motion.div 
                                                    variants={iconVariants(7.5)}
                                                    initial="initial"
                                                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <RiOpenaiFill className='text-6xl text-white'/>
            </motion.div>
            <motion.div 
                                                    variants={iconVariants(1)}
                                                    initial="initial"
                                                    animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-purple-950">
                <SiTailwindcss className='text-6xl text-cyan-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technology