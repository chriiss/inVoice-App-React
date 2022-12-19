import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";

const InVoiceListDetailHeader = ({detail, removeInVoice, changeStatus, editInVoice}) => {
    const detailHeaderComponentData = DataJson.inVoiceListDetailComponent.header;
    return(
        <div className={Styles.invoice_detail_header}>
                <div className={Styles.invoice_detail_header_status}>
                    <span>{detailHeaderComponentData.status}</span>
                    <span className={`${detail.status === 'paid' ? Styles.paid : detail.status === "pending" ? Styles.pending : Styles.draft} ${Styles.bold}`}>
                        &#9679;&nbsp;&nbsp;{detail.status}
                    </span>
                </div>
                <div className={Styles.invoice_detail_header_buttons}>
                    <button type="button" className={Styles.bold} onClick={() => removeInVoice(detail)}>{detailHeaderComponentData.buttons.delete}</button>
                    <button type="button" className={Styles.bold} onClick={() => editInVoice(detail)}>{detailHeaderComponentData.buttons.edit}</button>
                    <button type="button" className={Styles.bold} onClick={() => changeStatus(detail)}>{detailHeaderComponentData.buttons.mark}</button>
                </div>
            </div>
    )
}

export default InVoiceListDetailHeader;