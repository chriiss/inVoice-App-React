import Logo from "./logoComponent/Logo";
import Styles from "../../styles/App.module.scss";
import DarkMode from "./darkModeComponent/DarkMode";

const Aside = () => {
    return (
        <aside>
            <div>
                <Logo/>
            </div>
            <div className={Styles.bloc}>
                <DarkMode/>
                <div>
                    <img src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjcyMzcwNzI&ixlib=rb-4.0.3&q=80" alt="user avatar"/>
                </div>
            </div>
        </aside>
    )
}

export default Aside;