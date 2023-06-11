import { motion } from "framer-motion";
import "../styles/sidebar.css";

interface SideBarProps {
  menu: string[];
  active: string;
}

const textMotion = {
  show: {
    color: "grey",
    x: -20,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hidden: {
    color: "blue",
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const SideBar = ({ menu, active }: SideBarProps) => {
  return (
    <div className="sidebar">
      {menu.map((item, index) => (
        <motion.div
          initial="show"
          whileHover="hidden"
          animate="show"
          key={index}
          className={`sidebar-links ${
            active.toString() === item.toString() ? "active" : "disabled"
          }`}
        >
          <span>{item}</span> <motion.span className="icon" variants={textMotion}>👉</motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default SideBar;
