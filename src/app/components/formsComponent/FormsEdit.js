import DataJson from "../../data/Data.json";
import Styles from "../../styles/App.module.scss";
import InputFrom from "./inputFromComponent/InputFrom";
import InputItem from './InputItemComponent/InputItem';
import InputTo from "./inputToComponent/InputTo";

const FormsEdit = ({ closeModalEdit, closeModalDetail, inVoice, setInvoice, register, handleSubmit, watch, errors }) => {
    const formsComponentData = DataJson.formsComponent;

    const onEditSave = (data) => {
        const updatedInvoice = inVoice.map((item) => {
            if (item.invoiceDate === data.invoiceDate) {
                return { ...item, ...data };
            }
            return item;
        });
        setInvoice(updatedInvoice);
        closeModalEdit();
        closeModalDetail();
    }

    return (
        <section>
            <form className={Styles.form} onSubmit={handleSubmit(onEditSave)}>
                <h2>{formsComponentData.title}</h2>
                <InputFrom register={register} errors={errors} />
                <InputTo register={register} errors={errors} />
                <div className={Styles.form_item}>
                    <h3>{formsComponentData.subTitle.itemList}</h3>
                    <InputItem register={register} errors={errors} watch={watch} />
                </div>
                <div className={`${Styles.form_group} ${Styles.form_status}`}>
                    <h3>{formsComponentData.subTitle.status}</h3>
                    <select className={Styles.bold} {...register("status")}>
                        {formsComponentData.selectStatus.map(data => {
                            return(
                                <option key={data.option} className={Styles.bold}>{data.option}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={Styles.form_buttons}>
                    <div>
                        <button className={Styles.bold} onClick={closeModalEdit} type="button">{formsComponentData.formButtons.discard}</button>
                    </div>
                    <div>
                        <input className={Styles.bold} type="submit" value={formsComponentData.formButtons.edit} />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FormsEdit;