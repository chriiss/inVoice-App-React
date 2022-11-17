import React from 'react';
import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";

const InputFrom = ({ register, errors }) => {
    const inputFromComponentData = DataJson.formsComponent;
    return (
        <React.Fragment>
            <div className={Styles.form_subtitle}>
                <p className={Styles.bold}>{inputFromComponentData.from.label.billFrom}</p>
            </div>
            <div className={Styles.form_group}>
                <label htmlFor="streetFrom">{inputFromComponentData.field.label.streetAdress}</label>
                <input type="text" id="streetFrom" {...register("streetFrom", { required: true })} />
                {errors.streetFrom && <span className={Styles.error}>{inputFromComponentData.errors.fieldEmpty}</span>}
            </div>
            <div className={Styles.form_group}>
                <div>
                    <label htmlFor="cityFrom">{inputFromComponentData.field.label.city}</label>
                    <input type="text" id="cityFrom" {...register("cityFrom", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    {errors.cityFrom && <span className={Styles.error}>{inputFromComponentData.errors.fieldEmptyOrLetter}</span>}
                </div>
                <div>
                    <label htmlFor="post_codeFrom">{inputFromComponentData.field.label.postCode}</label>
                    <input type="text" id="post_codeFrom" {...register("postCodeFrom", { required: true, pattern: /^[0-9+-]+$/ })} />
                    {errors.postCodeFrom && <span className={Styles.error}>{inputFromComponentData.errors.fieldEmptyOrNumber}</span>}
                </div>
                <div>
                    <label htmlFor="countriesFrom">{inputFromComponentData.field.label.countries}</label>
                    <input type="text" id="countriesFrom" {...register("countriesFrom", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    {errors.countriesFrom && <span className={Styles.error}>{inputFromComponentData.errors.fieldEmptyOrLetter}</span>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default InputFrom;