import Styles from "../../../styles/App.module.scss";

const InVoiceListDetailSectionOne = ({detail}) => {
    return (
        <div className={Styles.invoice_detail_section_one}>
            <div>
                {detail.description}
            </div>
            <div>
                {detail.streetFrom}<br />
                {detail.cityFrom}<br />
                {detail.postCodeFrom}<br />
                {detail.countriesFrom}
            </div>
        </div>
    )
}

export default InVoiceListDetailSectionOne;