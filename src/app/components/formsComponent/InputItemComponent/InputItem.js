import React from 'react';
import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";

let itemFields = {
    qty: "",
    price: ""
}

const InputItem = ({register, errors, watch}) => {
    const qty = watch('qty', itemFields.qty);
    const price = watch('price', itemFields.price);
    const inputItemComponentData = DataJson.formsComponent;

    return (
        <React.Fragment>
            <div className={Styles.form_group_item}>
                <div>
                    <label htmlFor="itm">{inputItemComponentData.field.label.itm}</label>
                    <input type="text" id="itm" {...register("itm", { required: true })} />
                    {errors.itm && <span className={Styles.error}>{inputItemComponentData.errors.fieldEmpty}</span>}
                </div>
                <div>
                    <label htmlFor="qty" className={Styles.uppercase}>{inputItemComponentData.field.label.qty}</label>
                    <input type="number" id="qty" {...register("qty", { required: true, pattern:/^[0-9+-]+$/, min: 1 })}  />
                    {errors.qty && <span className={Styles.error}>{inputItemComponentData.errors.fieldEmptyOrNumber}</span>}
                </div>
                <div>
                    <label htmlFor="price">{inputItemComponentData.field.label.price}</label>
                    <input type="number" step="any" id="price" {...register("price", { required: true, pattern:/[+-]?([0-9]*[.])?[0-9]+/i, min: 1 })} />
                    {errors.price && <span className={Styles.error}>{inputItemComponentData.errors.fieldEmptyOrNumber}</span>}
                </div>
                <div>
                    <label htmlFor="total">{inputItemComponentData.field.label.total}</label>
                    {qty * price}
                </div>
            </div>
        </React.Fragment>
    )
};

export default InputItem;