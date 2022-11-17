import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";
import formatDate from "../../../hook/FormatDate";


const InVoiceListDetailSectionTwo = ({detail}) => {
    const sectionTwoComponentData = DataJson.inVoiceListDetailComponent.sectionTwo.label;
    return (
        <div className={Styles.invoice_detail_section_two}>
            <div className={Styles.invoice_detail_section_two_bloc}>
                <div>
                    <div className={Styles.invoice_detail_section_two_bloc_label}>{sectionTwoComponentData.date}</div>
                    <div className={`${Styles.invoice_detail_section_two_bloc_date} ${Styles.bold}`}>{formatDate(new Date(detail.invoiceDate))}</div>
                </div>
                <div>
                    <div className={Styles.invoice_detail_section_two_bloc_label}>{sectionTwoComponentData.payment}</div>
                    <div className={`${Styles.invoice_detail_section_two_bloc_date} ${Styles.bold}`}>{detail.terms}</div>
                </div>
            </div>
            <div className={Styles.invoice_detail_section_two_bloc}>
                <div className={Styles.invoice_detail_section_two_bloc_label}>{sectionTwoComponentData.to}</div>
                <div className={Styles.bold}>{detail.name}</div>
                <div className={Styles.invoice_detail_section_two_bloc_label}>{detail.streetTo}</div>
                <div className={Styles.invoice_detail_section_two_bloc_label}>{detail.cityTo}</div>
                <div className={Styles.invoice_detail_section_two_bloc_label}>{detail.postCodeTo}</div>
                <div className={Styles.invoice_detail_section_two_bloc_label}>{detail.countriesTo}</div>
            </div>
            <div className={Styles.invoice_detail_section_two_bloc}>
                <div className={Styles.invoice_detail_section_two_bloc_label}>{sectionTwoComponentData.send}</div>
                <div className={Styles.bold}>{detail.mail}</div>
            </div>
        </div>
    )
}

export default InVoiceListDetailSectionTwo;