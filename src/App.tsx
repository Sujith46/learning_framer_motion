import { useState } from "react";
import "./styles.css";

import { components } from "./components/index";
import SlideHeader from "./components/SlideHeader";
import BackgroundGradient from "./components/BackgroundGradient";
import SideBar from "./components/SideBar";

export default function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);
  const [currentComponentTitle, setCurrentComponentTitle] =
    useState("Text Reveal");
  return (
    <div className="App">
      <div className="grid-container">
        <SideBar
          menu={components.map((item) => item.title)}
          active={currentComponentTitle}
        />
        {/* <BackgroundGradient color="#fc4400" /> */}
        <div className="content">
          <SlideHeader
            number={currentComponentIndex + 1}
            title={currentComponentTitle}
          />
          {components.map((item, index) => (
            // <div
            //   className={
            //     index === currentComponentIndex ? "active" : "disabled"
            //   }
            //   key={index}
            // >
            <>{item.title === currentComponentTitle ? item.component : null}</>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}
