import { useState, useEffect } from "react";
import DataJson from "../../data/Data.json"; 
import Styles from "../../styles/App.module.scss";

const SectionHeader = ({openModal, inVoice, dataInvoice, setDataInvoice}) => {
    const headerComponentData = DataJson.headerComponent;
    const [statusFilter, setStatusFilter] = useState("all");
    const [openFilterStatus, setOpenFilterStatus] = useState(false);

    useEffect(() => {
        const dataStatusFilterCheck = () => {
            if (statusFilter === "all") {
                setDataInvoice(inVoice);
            } else {
                const filteredStatus = inVoice.filter(status => status.status === statusFilter);
                setDataInvoice(filteredStatus);
            }
        }
        dataStatusFilterCheck();
    }, [statusFilter, inVoice, setDataInvoice]);

    const handleFilterStatus =({target}) => {
        setStatusFilter(target.value);
    }

    const toggleFilterStatus = () => {
        setOpenFilterStatus(!openFilterStatus);
    }

    return (
        <section>
            <div className={Styles.section_header}>
                <div>
                    <h1 className={Styles.bold}>{headerComponentData.title}</h1>
                    <span className={`${Styles.section_header_results} ${Styles.bold}`}>{dataInvoice && dataInvoice.length} {dataInvoice.length > 1 ? headerComponentData.results : headerComponentData.result}</span>
                </div>
                <div>
                    <span className={`${Styles.section_header_filter_status_label} ${Styles.bold}`} onClick={toggleFilterStatus}>
                        {headerComponentData.filterStatusLabel}
                        <svg className={openFilterStatus ? Styles.section_header_filter_status_label_svg_arrow_top : ""} fill="#7C5DFA" viewBox="0 0 320 512" width="7" title="angle-down">
                            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                        </svg>
                    </span>
                    <div className={`${Styles.section_header_filter_status_render} ${openFilterStatus ? Styles.section_header_show : ""}`}>
                        {headerComponentData.filterStatusRender.map(data => {
                            return(
                                <div key={data.value}>
                                    <input type="checkbox" checked={statusFilter === data.value} onChange={handleFilterStatus} value={data.value} /> <span className={Styles.bold}>{data.value}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <button type="button" className={Styles.bold} onClick={openModal}><svg fill="#ffffff" viewBox="0 0 512 512" width="30" title="plus-circle">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
                    </svg>{headerComponentData.addInvoice}</button>
                </div>
            </div>
        </section>
    )
}

export default SectionHeader;