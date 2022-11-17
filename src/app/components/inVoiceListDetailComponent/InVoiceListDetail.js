import Styles from "../../styles/App.module.scss";
import InVoiceListDetailBack from "./inVoiceListDetailBack/InVoiceListDetailBack";
import InVoiceListDetailHeader from "./inVoiceListDetailHeader/InVoiceListDetailHeader";
import InVoiceListDetailSectionOne from "./inVoiceListDetailSectionOne/InVoiceListDetailSectionOne";
import InVoiceListDetailSectionTwo from "./inVoiceListDetailSectionTwo/InVoiceListDetailSectionTwo";
import InVoiceListDetailItems from "./inVoiceListDetailItems/InVoiceListDetailItems";
import InVoicelistDetailFooter from "./inVoiceListDetailFooter/InVoiceListDetailFooter";

const InVoiceListDetail = ({ detail, closeModalDetail, setInvoice }) => {

    const removeInVoice = (item) => {
        setInvoice(oldValues => oldValues.filter(data => data !== item));
        closeModalDetail();
    }

    const changeStatus = (status) => {
        setInvoice(oldValues => oldValues.map(item => {
            if((item === status && item.status === "draft") || (item === status && item.status === "pending")) {
                return { ...item, status: "paid"};
            } else {
                return item;
            }
        }));
        closeModalDetail();
    }

    return (
        <div className={Styles.invoice_detail}>
            <InVoiceListDetailBack closeModalDetail={closeModalDetail} />
            <InVoiceListDetailHeader detail={detail} removeInVoice={removeInVoice} changeStatus={changeStatus} />
            <InVoiceListDetailSectionOne detail={detail} />
            <InVoiceListDetailSectionTwo detail={detail} />
            <InVoiceListDetailItems detail={detail} />
            <InVoicelistDetailFooter detail={detail} />
        </div>
    )
}

export default InVoiceListDetail;