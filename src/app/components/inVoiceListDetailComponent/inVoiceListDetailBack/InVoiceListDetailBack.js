import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";

const InVoiceListDetailBack = ({closeModalDetail}) => {
    const backComponentData = DataJson.inVoiceListDetailComponent;
    return (
        <div className={Styles.invoice_detail_back}>
            <button type="button" onClick={closeModalDetail}>
                <svg fill="#7C5DFA" viewBox="0 0 256 512" width="7" title="angle-left">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                </svg>&nbsp;&nbsp;&nbsp;{backComponentData.backButton.name}
            </button>
        </div>
    )
}

export default InVoiceListDetailBack;