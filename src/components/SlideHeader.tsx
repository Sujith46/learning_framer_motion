import "../styles/slide-header.css";

interface SlideHeaderProps {
  number: number;
  title: string;
}

const SlideHeader = ({ number, title }: SlideHeaderProps) => {
  const renderCustomNumber = number <= 9 ? `0${number}` : number;
  return (
    <div className="slide-header">
      <div className="slide-header__number">{renderCustomNumber}</div>
      <div className="slide-header__title">{title}</div>
    </div>
  );
};

export default SlideHeader;
