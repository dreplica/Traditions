import React, { Fragment, ChangeEvent, Dispatch } from "react";

import Categories from "../../../util/upload.json";
import { AdminForm, stateType } from ".";

interface Iprops {
    setForm: Dispatch<stateType>;
    context: stateType;
}

export default function DropDown({ setForm, context }: Iprops) {

    const keys: AdminForm["category"][] = Object.keys(
        Categories
    ) as AdminForm["category"][];

    const categoryAction = (type: string) => (event: ChangeEvent<HTMLSelectElement>) => {
        const item = event.currentTarget
            .value as AdminForm["category"];

        setForm({
            ...context,
            form: { ...context.form, [type]: item }
        })
    };

    const typeAction = (type: string) => (event: ChangeEvent<HTMLSelectElement>) => {
        const item: string = event.currentTarget.value;
        setForm({
            ...context,
            form: { ...context.form, [type]: item }
        })
    };

    const category = keys.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    return (
        <Fragment>
            <p>Select Category</p>
            <select onChange={categoryAction('category')}>{category}</select>
            <p>Select type</p>
            <select onChange={typeAction('type')}>
                {Categories[context.form.category].map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </Fragment>
    );
}