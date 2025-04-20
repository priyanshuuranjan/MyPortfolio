import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/Priyanshu.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter
import CV from "../../assets/Downloaded CV.pdf";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-4xl font-medium tracking-tight lg:mt-16 lg:text-7xl"
            >
              <h1>
                {" "}
                Hi, I’m <span className="text-red-400">
                  Priyanshu Ranjan,
                </span>{" "}
                a{" "}
              </h1>
            </motion.h1>
            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="  text-6xl font-medium tracking-tight lg:mt-3 lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent block min-h-[96px] overflow-hidden">
                <Typewriter
                  words={[
                    " Frontend Developer.",
                    " Full Stack Developer.",
                    " Professional Coder.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.h2>

            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-3 max-w-xl py-8 font-light text-xl tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href={CV}
              download
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="bg-red-500 text-white px-6 py-3 mb-10 rounded-full shadow-lg font-semibold text-lg mt-4"
            >
              Download CV
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Priyanshu Ranjan"
              className="rounded-full h-38 w-38 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
