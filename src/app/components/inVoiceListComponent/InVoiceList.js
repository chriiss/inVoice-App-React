import formatDate from "../../hook/FormatDate";
import inVoiceIndex from "../../hook/FormatIndex";
import Styles from "../../styles/App.module.scss";

const InVoiceList = ({dataInvoice, inVoiceDetail, openModalDetail}) => {
    return (
        <div>
            {dataInvoice && dataInvoice.map((data, index) => {
                const { id } = data;
                return (
                    <div key={index} className={Styles.invoice_list} onClick={() => {
                        inVoiceDetail(data)
                        openModalDetail()}}>
                        <div className={Styles.invoice_list_ticket}>
                            <div className={Styles.bold}>
                                <span className={Styles.invoice_list_ticket_hashtag}>#</span>{inVoiceIndex(id)}
                            </div>
                            <div>
                                Due {formatDate(new Date(data.invoiceDate))}
                            </div>
                            <div>
                                {data.name}
                            </div>

                            <div className={Styles.bold}>
                                &#163;{data.qty * data.price}
                            </div>
                            <div>
                                <span className={`${data.status === 'paid' ? Styles.paid : data.status === "pending" ? Styles.pending : Styles.draft} ${Styles.bold}`}>&#9679;&nbsp;{data.status}</span>
                            </div>
                            <div>
                                <svg fill="#7C5DFA" viewBox="0 0 256 512" width="7" title="angle-right">
                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InVoiceList;