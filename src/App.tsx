import { useState } from "react";
import "./styles.css";

import { components } from "./components/index";

export default function App() {
  const totalLength = components.length;
  const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);
  return (
    <div>
      {components.map((item, index) => (
        <div
          className={index === currentComponentIndex ? "active" : "disabled"}
          key={index}
        >
          <>{item}</>
        </div>
      ))}
    </div>
  );
}
