import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

type AnimatedSpanType = {
  text: string[];
};

export default function TextRevel() {
  const headerOne = "Hello";
  const headerTwo = "World 😍";

  const AnimatedTextSpan = ({ text }: AnimatedSpanType) => (
    <motion.span
      className="span-container"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {[...text].map((letters, index) => (
        <motion.span key={index} className="span-letters" variants={item}>
          {letters}
        </motion.span>
      ))}
    </motion.span>
  );
  return (
    <motion.div variants={container} className="App">
      <AnimatedTextSpan text={[...headerOne]} />
      <AnimatedTextSpan text={[...headerTwo]} />
    </motion.div>
  );
}
