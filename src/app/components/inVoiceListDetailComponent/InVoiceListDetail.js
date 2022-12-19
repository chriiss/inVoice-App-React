import Styles from "../../styles/App.module.scss";
import InVoiceListDetailBack from "./inVoiceListDetailBack/InVoiceListDetailBack";
import InVoiceListDetailHeader from "./inVoiceListDetailHeader/InVoiceListDetailHeader";
import InVoiceListDetailSectionOne from "./inVoiceListDetailSectionOne/InVoiceListDetailSectionOne";
import InVoiceListDetailSectionTwo from "./inVoiceListDetailSectionTwo/InVoiceListDetailSectionTwo";
import InVoiceListDetailItems from "./inVoiceListDetailItems/InVoiceListDetailItems";
import InVoicelistDetailFooter from "./inVoiceListDetailFooter/InVoiceListDetailFooter";

const InVoiceListDetail = ({ detail, closeModalDetail, setInvoice, openModalEdit, setValue }) => {

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

    const editInVoice = (item) => {
        setValue("streetFrom", item.streetFrom);
        setValue("cityFrom", item.cityFrom);
        setValue("postCodeFrom", item.postCodeFrom);
        setValue("countriesFrom", item.countriesFrom);
        setValue("streetTo", item.streetTo);
        setValue("name", item.name);
        setValue("mail", item.mail);
        setValue("cityTo", item.cityTo);
        setValue("postCodeTo", item.postCodeTo);
        setValue("countriesTo", item.countriesTo);
        setValue("invoiceDate", item.invoiceDate);
        setValue("terms", item.terms);
        setValue("description", item.description);
        setValue("itm", item.itm);
        setValue("qty", item.qty);
        setValue("price", item.price);
        setValue("status", item.status);
        openModalEdit();
    }

    return (
        <div className={Styles.invoice_detail}>
            <InVoiceListDetailBack closeModalDetail={closeModalDetail} />
            <InVoiceListDetailHeader detail={detail} removeInVoice={removeInVoice} changeStatus={changeStatus} editInVoice={editInVoice} />
            <InVoiceListDetailSectionOne detail={detail} />
            <InVoiceListDetailSectionTwo detail={detail} />
            <InVoiceListDetailItems detail={detail} />
            <InVoicelistDetailFooter detail={detail} />
        </div>
    )
}

export default InVoiceListDetail;