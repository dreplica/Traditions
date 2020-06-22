import React, { useState, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import Axios from "axios";

import { stateData } from "../../../store/reducers/authentication";
import { ITEMS } from "../../../reusablecomponent/theme/types";
import DropDown from "./dropdown";
import imageUpload from "./imageupload";
import {
    Form,
    Heading,
    TextArea,
    ImageInput,
    Error
} from "./style";
import InputField from "../../authscreen/register/textinput";

interface Iprops {
    auth?: string;
}

export interface AdminForm extends Omit<ITEMS, "id"> {
    category: "accessories" | "men" | "menfoot" | "women" | "womenfoot";
    type: string;
    quantity: number;
}

const initialForm: AdminForm = {
    category: "women",
    type: "",
    itemname: "",
    price: "",
    image: "",
    description: "",
    quantity: 0,
};

type Keys =
    | "category"
    | "type"
    | "itemname"
    | "price"
    | "image"
    | "description"
    | "quantity";

export interface stateType {
    form: AdminForm;
    pic: FileList | null,
    error: string;
}

function Admin({ auth }: Iprops) {
    const [state, setstate] = useState<stateType>({
        form: initialForm,
        pic: null,
        error: ""
    });

    const handleChange = (type: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const value = e.currentTarget?.value
        setstate(prev => ({
            ...prev,
            form: { ...prev.form, [type]: value },
            error: ""
        }))
    }

    const HandleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        setstate(prev => ({
            ...prev,
            pic: files
        }))
    };

    const check_input = (form: AdminForm) => {
        const keys: Keys[] = Object.keys(form) as Keys[];
        return keys.filter(
            (item) => form[item] === "" || form[item] === "select option"
        );
    };


    const SubmitItem = async (e: FormEvent) => {
        e.preventDefault();
        let { form } = state

        try {

            const links = await imageUpload(state.pic as FileList);

            if (!links?.length) {
                return setstate(prev => ({
                    ...prev,
                    error: "uploaded failed, please try again"
                }))

            }

            form = { ...form, image: links }

            setstate(prev => ({
                ...prev,
                error: (`don't leave "${check_input(form).join(",")}" empty`)
            }))

            if (state.error.length) return;

            await Axios.post("http://localhost:3000/items", form,
                {
                    headers: {
                        authorization: `Bearer ${auth}`,
                        "content-type": "application/json",
                    },
                });
            setstate(prev => ({
                ...prev,
                form: initialForm,
                error: "uploaded succesfully"
            }))

        } catch (error) {
            console.log(error);
        }
    };


    const ErrorLog = state.error.length ? <Error>{state.error}</Error>:null

    return (
        <Form style={{ top: "5vh" }} encType="multipart/">
            <Heading>Hello Admin, Please Fill in the Form to upload an Item</Heading>
            {ErrorLog}
            <label>
                <p> Item Name</p>
                <InputField
                    type="text"
                    placeholder="item name"
                    value={state.form.itemname}
                    changeHandeler={handleChange('itemname')}
                />
            </label>
            <label>
                <p>Price</p>
                <InputField
                    type="text"
                    placeholder="price e.g, 6000"
                    value={state.form.price}
                    changeHandeler={handleChange('price')}
                />
            </label>
            <DropDown setForm={setstate} context={state} />
            <label>
                <p>Quantity</p>
                <InputField
                    type="text"
                    placeholder="Quantity"
                    value={state.form.quantity}
                    changeHandeler={handleChange('quantity')}
                />
            </label>
            <label>
                <p>Image {state.pic?.length}</p>
                <ImageInput
                    type="file"
                    id="image"
                    accept="image/*"
                    multiple
                    required
                    onChange={HandleImage}
                    name="file"
                />
            </label>
            <label>
                <p>Description</p>
                <TextArea
                    value={state.form.description}
                    placeholder="price e.g, 6000"
                    onChange={handleChange('description')}
                ></TextArea>
            </label>
            <button onClick={SubmitItem}>Add Item</button>
        </Form>
    );
}

const mapStateToProps = ({ authenticate }: { authenticate: stateData }) => ({
    auth: authenticate.data?.auth?.token,
});
export default connect(mapStateToProps)(Admin);