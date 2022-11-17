import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";

const InVoiceListDetailItems = ({detail}) => {
    const itemsComponentData = DataJson.inVoiceListDetailComponent.items.label;
    return (
        <div className={Styles.invoice_detail_section_items}>
            <div className={Styles.invoice_detail_section_items_children}>
                <div>{itemsComponentData.itm}</div>
                <div className={Styles.bold}>{detail.itm}</div>
            </div>
            <div className={Styles.invoice_detail_section_items_children}>
                <div className={Styles.uppercase}>{itemsComponentData.qty}</div>
                <div className={Styles.bold}>{detail.qty}</div>
            </div>
            <div className={Styles.invoice_detail_section_items_children}>
                <div>{itemsComponentData.price}</div>
                <div className={Styles.bold}>{detail.price}</div>
            </div>
            <div className={Styles.invoice_detail_section_items_children}>
                <div>{itemsComponentData.total}</div>
                <div className={Styles.bold}>&#163;{detail.qty * detail.price}</div>
            </div>
        </div>
    )
}

export default InVoiceListDetailItems;