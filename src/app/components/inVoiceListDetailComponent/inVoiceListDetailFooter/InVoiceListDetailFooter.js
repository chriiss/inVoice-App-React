import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";

const InVoiceListDetailFooter = ({detail}) => {
    const detailFooterComponentData = DataJson.inVoiceListDetailComponent.footer;
    return (
        <div className={Styles.invoice_detail_footer}>
            <div>{detailFooterComponentData.amount}</div>
            <div className={Styles.bold}>&#163;{detail.qty * detail.price}</div>
        </div>
    )
}

export default InVoiceListDetailFooter;