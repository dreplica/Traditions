import React, { FormEvent, useState, ChangeEvent } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import { loadData } from "../../../store/actioncreator/actiontypes";
import { SIGNUP_FORM } from "../../../reusablecomponent/theme/types";
import { stateData } from "../../../store/reducers/authentication";
import { ImageInput } from "../../adminscreen/upload/style";
import Input from "./textinput";
import validateRegistration from "./validateform";
import { registrationFrom } from "../../../store/actioncreator/actiontypes";
import {
    Container,
    Form,
    Content,
    AdminForm,
    Label
} from "../style";
import imageupload from "../../adminscreen/upload/imageupload";

interface iProps {
    auth?: string;
    setForm: (arg: any) => void;
    error?: string
}

interface initState {
    form: SIGNUP_FORM;
    error: string;
    image: FileList | null
}

function Signup(props: iProps) {

    const history = useHistory();
    const [state, setState] = useState<initState>({
        form: SIGNUP_FORM,
        error: "",
        image: null
    })

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const files = e.currentTarget.files

        setState((previous) => {
            return {
                ...previous,
                form: { ...previous.form, image: files }
            }
        })
    }

    const handleChange = (type: string) => (val: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const text: string | number = val.currentTarget.value
        setState((previous) => {
            let adminVal = 0;
            let check = false;
            if (type === 'admin') {
                check = true
                adminVal = state.form.admin ? 0 : 1
            }
            return {
                ...previous,
                form: { ...previous.form, [type]: check ? adminVal : text }
            }
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
        const valid = validateRegistration(state.form);
        if (valid) {
            setState({ ...state, error: valid as string });
            return;
        }
        const links  = state.form.admin && await imageupload(state.image as FileList) 

        props.setForm({ 
            ...state.form,
            [state.form.logo as string]:links as string
        })

        } catch (error) {
            setState({ ...state, error: error.message as string });
            console.log("error", error.message);
        }
    };

    if (props.auth?.length) {
        history.push("/");
    }

    return (
        <Container>
            <Content>
                <div className="log">
                    <h3>Register</h3>
                    <div className="line"></div>
                </div>
                <div>
                    Register and get awesome african traditional fashion
          <br />
          already have an account ?
          <a href="/signin" className="forget">
                        Login
          </a>
                </div>
            </Content>
            <Form>
                <span>{state.error}</span>

                <Label> first Name
                <Input type='text'
                        value={state.form.firstname}
                        changeHandeler={handleChange('firstname')}
                        placeholder='first name'
                    />
                </Label>

                <Label> Last Name
                <Input type='text'
                        value={state.form.lastname}
                        changeHandeler={handleChange('lastname')}
                        placeholder='last name'
                    />
                </Label>

                <Label> Username
                <Input type='text'
                        value={state.form.username}
                        changeHandeler={handleChange('username')}
                        placeholder='username' />
                </Label>

                <Label> Email
                <Input type='text'
                        value={state.form.email}
                        changeHandeler={handleChange('email')}
                        placeholder='email' />
                </Label>

                <Label> Phone Number
                <Input type='text'
                        value={state.form.phone}
                        changeHandeler={handleChange('phone')}
                        placeholder='phone number' />
                </Label>

                <Label> Password
                <Input type='password'
                        value={state.form.password}
                        changeHandeler={handleChange('password')}
                        placeholder='password' />
                </Label>


                <Label>
                    Sell Cloths
                <Input type='checkbox'
                        value={state.form.admin}
                        changeHandeler={handleChange('admin')} />
                </Label>


                <AdminForm style={{ display: state.form.admin ? "block" : "none" }}>

                    <Label>
                        Company Name
                <Input type='text'
                            value={state.form.companyname as string}
                            placeholder='Company name'
                            changeHandeler={handleChange('companyname')} />
                    </Label>

                    <Label>
                        Company Logo
                        <ImageInput
                            type="file"
                            accept="image/*"
                            required
                            onChange={handleImageChange}
                        />
                    </Label>

                    <Label>
                        company description
                        <textarea
                            placeholder="e.g we are the largest..."
                            value={state.form.companydesc}
                            onChange={handleChange('companydesc')}
                        ></textarea>
                    </Label>

                    <Label>
                        Facebook Link
                <Input type='text'
                            value={state.form.companyname as string}
                            placeholder='facebook link'
                            changeHandeler={handleChange('facebook')} />
                    </Label>

                    <Label>
                        Instagram Link
                <Input type='text'
                            value={state.form.companyname as string}
                            placeholder='instagram link'
                            changeHandeler={handleChange('instagram')} />
                    </Label>

                    <Label>
                        Twitter Link
                <Input type='text'
                            value={state.form.companyname as string}
                            placeholder='twitter link'
                            changeHandeler={handleChange('companydesc')} />
                    </Label>
                </AdminForm>

                <button type="submit" onClick={handleSubmit}>
                    Register
        </button>
            </Form>
        </Container>
    );
}

const mapStateToProps = ({
    authenticate,
}: {
    authenticate: stateData;
}) => {
    return {
        auth: authenticate.data?.auth?.token,
    };
};

export default connect(mapStateToProps, { setToken: loadData, setForm: registrationFrom })(Signup);
