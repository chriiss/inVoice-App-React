import { useState, useEffect } from 'react';
import Aside from "./asideComponent/Aside";
import SectionHeader from "./sectionHeaderComponent/SectionHeader";
import InVoiceList from './inVoiceListComponent/InVoiceList';
import InVoiceListDetail from './inVoiceListDetailComponent/InVoiceListDetail';
import Forms from "./formsComponent/Forms";
import Styles from "../styles/App.module.scss";
import Modal from 'react-modal';

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenDetail, setIsOpenDetail] = useState(false);
    const [inVoice, setInvoice] = useState([]);
    const [detail, setDetail] = useState({});
    const [dataInvoice, setDataInvoice] = useState("");

    const openModal = () => {
        setIsOpen(!modalIsOpen);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const openModalDetail = () => {
        setIsOpenDetail(!modalIsOpenDetail);
    }
    const closeModalDetail = () => {
        setIsOpenDetail(false);
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("form"));
        if (items) {
         setInvoice(items);
        }
    }, []);

    useEffect(() => {
        if (inVoice.length > 0) {
            localStorage.setItem("form", JSON.stringify(inVoice));
        }
        if (inVoice.length === 0) {
            localStorage.removeItem("form");
        }
    }, [inVoice])

    const inVoiceDetail = (id) => {
        setDetail(id);
    }

    return (
        <div className={Styles.body}>
            <header>
                <Aside />
            </header>
            <main>
                <SectionHeader openModal={openModal} inVoice={inVoice} dataInvoice={dataInvoice} setDataInvoice={setDataInvoice} />

                <InVoiceList dataInvoice={dataInvoice} inVoiceDetail={inVoiceDetail} openModalDetail={openModalDetail} />

                <Modal isOpen={modalIsOpenDetail} onRequestClose={openModalDetail} contentLabel="My dialog detail" className={Styles.mymodalDetail} overlayClassName={Styles.myoverlay}>
                    <InVoiceListDetail detail={detail} closeModalDetail={closeModalDetail} setInvoice={setInvoice} />
                </Modal>

                <Modal isOpen={modalIsOpen} onRequestClose={openModal} contentLabel="My dialog" className={Styles.mymodal} overlayClassName={Styles.myoverlay}>
                    <Forms closeModal={closeModal} inVoice={inVoice} setInvoice={setInvoice} />
                </Modal>   
            </main>
        </div>
    )
}

Modal.setAppElement('#root');

export default Home;