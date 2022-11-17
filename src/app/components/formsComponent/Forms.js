import { useForm } from "react-hook-form";
import DataJson from "../../data/Data.json";
import Styles from "../../styles/App.module.scss";
import InputFrom from "./inputFromComponent/InputFrom";
import InputItem from './InputItemComponent/InputItem';
import InputTo from "./inputToComponent/InputTo";


const Forms = ({ closeModal, inVoice, setInvoice }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const formsComponentData = DataJson.formsComponent;
   
    const onSubmit = (data) => {
        const addInVoice = [...inVoice, data].reverse();
        setInvoice(addInVoice);
        closeModal();
    }

    return (
        <section>
            <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                        <button className={Styles.bold} onClick={closeModal} type="button">{formsComponentData.formButtons.discard}</button>
                    </div>
                    <div>
                        <input className={Styles.bold} type="submit" value={formsComponentData.formButtons.submit} />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Forms;