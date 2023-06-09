import "../styles/sidebar.css";

interface SideBarProps {
  menu: string[];
  active: string;
}

const SideBar = ({ menu, active }: SideBarProps) => {
  return (
    <div className="sidebar">
      {menu.map((item, index) => (
        <div
          key={index}
          className={`sidebar-links ${
            active.toString() === item.toString() ? "active" : "disabled"
          }`}
        >
          <span>👉</span> {item}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
