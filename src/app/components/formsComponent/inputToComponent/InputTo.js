import React from 'react';
import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";

const InputTo = ({ register, errors }) => {
    const inputToComponentData = DataJson.formsComponent;

    return (
        <React.Fragment>
            <div className={Styles.form_subtitle}>
                <br /><p className={Styles.bold}>{inputToComponentData.to.label.billTo}</p>
            </div>
            <div className={Styles.form_group}>
                <label htmlFor="name">{inputToComponentData.client.label.name}</label>
                <input type="text" id="name" {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })} />
                {errors.name && <span className={Styles.error}>{inputToComponentData.errors.fieldEmptyOrLetter}</span>}
            </div>
            <div className={Styles.form_group}>
                <label htmlFor="mail">{inputToComponentData.client.label.mail}</label>
                <input type="email" id="mail" placeholder="e.g.email@exemple.com" {...register("mail", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.mail && <span className={Styles.error}>{inputToComponentData.errors.fieldEmptyOrMail}</span>}
            </div>
            <div className={Styles.form_group}>
                <label htmlFor="streetTo">{inputToComponentData.field.label.streetAdress}</label>
                <input type="text" id="streetTo" {...register("streetTo", { required: true })} />
                {errors.streetTo && <span className={Styles.error}>{inputToComponentData.errors.fieldEmpty}</span>}
            </div>
            <div className={Styles.form_group}>
                <div>
                    <label htmlFor="cityTo">{inputToComponentData.field.label.city}</label>
                    <input type="text" id="cityTo" {...register("cityTo", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    {errors.cityTo && <span className={Styles.error}>{inputToComponentData.errors.fieldEmptyOrLetter}</span>}
                </div>
                <div>
                    <label htmlFor="post_codeTo">{inputToComponentData.field.label.postCode}</label>
                    <input type="text" id="post_codeTo" {...register("postCodeTo", { required: true, pattern: /^[0-9+-]+$/ })} />
                    {errors.postCodeTo && <span className={Styles.error}>{inputToComponentData.errors.fieldEmptyOrNumber}</span>}
                </div>
                <div>
                    <label htmlFor="countriesTo">{inputToComponentData.field.label.countries}</label>
                    <input type="text" id="countriesTo" {...register("countriesTo", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    {errors.countriesTo && <span className={Styles.error}>{inputToComponentData.errors.fieldEmptyOrLetter}</span>}
                </div>
            </div>
            <div className={Styles.form_group}>
                <div>
                    <label htmlFor="invoice_date">{inputToComponentData.field.label.date}</label>
                    <input type="date" id="invoice_date" className={Styles.bold} {...register("invoiceDate", { required: true })} />
                    {errors.invoiceDate && <span className={Styles.error}>{inputToComponentData.errors.fieldEnterDate}</span>}
                </div>
                <div>
                    <label htmlFor="terms">{inputToComponentData.field.label.paymentTerm}</label>
                    <select id="terms" className={Styles.bold} {...register("terms", { required: true })}>
                        {inputToComponentData.selectPayment.map(data => {
                            return(
                                <option key={data.option}>{data.option}</option>
                            )
                        })}
                    </select>
                    {errors.terms && <span className={Styles.error}></span>}
                </div>
            </div>
            <div className={Styles.form_group}>
                <label htmlFor="description">{inputToComponentData.field.label.description}</label>
                <input type="text" id="description" placeholder="e.g. Graphic Design Service" {...register("description", { required: true })} />
                {errors.description && <span className={Styles.error}>{inputToComponentData.errors.fieldEmpty}</span>}
            </div>
        </React.Fragment>
    )
}

export default InputTo;