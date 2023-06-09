import "../styles/background-gradient.css";

interface BackgroundGradientProps {
  color?: string;
}

const BackgroundGradient = ({ color = "teal" }: BackgroundGradientProps) => {
  return (
    <div
      className="gradient bg-shape opacity-50 bg-blur"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default BackgroundGradient;
