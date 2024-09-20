import { SiHtml5 } from "react-icons/si"; // Importing HTML5 icon
import { SiJavascript } from "react-icons/si"; // Importing JavaScript icon
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* HTML5 Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiHtml5 style={{ color: "#E34F26" }} className="text-7xl" />
          </a>
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiJavascript style={{ color: "#F7DF1E" }} className="text-7xl" />
          </a>
        </motion.div>

        {/* ReactJS Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://react.dev/">
            {" "}
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </a>
        </motion.div>

        {/* Next.js Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://nextjs.org/">
            {" "}
            <SiNextdotjs className="text-7xl text-white" />
          </a>
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.mongodb.com/">
            {" "}
            <SiMongodb style={{ color: "#47A248" }} className="text-7xl" />
          </a>
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.mysql.com/">
            {" "}
            <SiMysql style={{ color: "#00758F" }} className="text-7xl" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
