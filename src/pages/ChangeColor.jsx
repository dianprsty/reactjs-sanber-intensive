import { useContext } from "react";
import { BuahContext } from "../App";

const ChangeColor = () => {
  const { color: colorTheme, setColor } = useContext(BuahContext);
  const handleClick = () => {
    if (colorTheme == "#FFFFFF") {
      setColor("#8A2BE2");
    } else {
      setColor("#FFFFFF");
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          background: colorTheme,
          color: colorTheme == "#FFFFFF" ? "#8A2BE3" : "#FFFFFF",
          border: "1px solid #8A2BE3",
        }}
      >
        Change Theme
      </button>
    </>
  );
};

export default ChangeColor;
