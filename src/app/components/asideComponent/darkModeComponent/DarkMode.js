import { useState, useEffect } from "react";
import Styles from "../../../styles/App.module.scss";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const getDefaultMode = () => {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'light';
}

const DarkMode = () => {
    const [isDarkMode, setDarkMode] = useState(getDefaultMode());
    const [isDarkModeIcon, setDarkModeIcon] = useState(false);

    const toggleDarkMode = () => {
        isDarkMode === Styles.dark ? setDarkMode(Styles.light) : setDarkMode(Styles.dark);
    };
    const toggleDarkModeIcon = (checked) => {
        setDarkModeIcon(checked);
      };
    useEffect(() => {
        document.body.className = isDarkMode;
        localStorage.setItem('mode', isDarkMode);
    }, [isDarkMode]);
    return(
        <div>
            <button className={Styles.bloc_darkModeButton} type="button" onClick={toggleDarkMode}><DarkModeSwitch checked={isDarkModeIcon} onChange={toggleDarkModeIcon} size={50} /></button>
        </div>
    )
}

export default DarkMode;