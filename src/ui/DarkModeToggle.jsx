import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";

import { useDarkMode } from "../context/DarkModeContext";

/**
 * A button to switch between dark mode and light mode.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
