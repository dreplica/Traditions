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

interface iProps {
    auth?: string;
    setForm: (arg: any) => void;
    error?: string
}

interface initState {
    form: SIGNUP_FORM;
    error: string;
}

function Signup(props: iProps) {

    const history = useHistory();
    const [state, setState] = useState<initState>({
        form: SIGNUP_FORM,
        error: ""
    })

    const handleChange = (type: string) => (val:ChangeEvent<HTMLInputElement>) => {
        const text :string|number = val.currentTarget.value
        setState((previous) => {
            console.log(text)
            let adminVal = 0;
            let check = false;
            if(type === 'admin'){
                check = true
                adminVal = state.form.admin?0:1
            }
            return { 
                ...previous,
                form: { ...previous.form, [type]: check?adminVal:text }
            }
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(state.form);
        const valid = validateRegistration(state.form);

        if (valid) {
            setState({ ...state, error: valid as string });
            return;
        }
        try {
            const result = await Axios.post("http://localhost:3000/signup", state.form);
            // props.setToken(result.data);
            console.log("res", result.data);
            // history.push("/");
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
                <Input type='text' value={state.form.firstname} changeHandeler={handleChange('firstname')} />
                </Label>

                <Label> Last Name
                <Input type='text' value={state.form.lastname} changeHandeler={handleChange('lastname')} />
                </Label>

                <Label> Username
                <Input type='text' value={state.form.email} changeHandeler={handleChange('username')} />
                </Label>

                <Label> Email
                <Input type='text' value={state.form.email} changeHandeler={handleChange('email')} />
                </Label>

                <Label> Phone Number
                <Input type='text' value={state.form.phone} changeHandeler={handleChange('phone')} />
                </Label>

                <Label> Password
                <Input type='password' value={state.form.password} changeHandeler={handleChange('password')} />
                </Label>


                <Label>
                    Sell Cloths
                <Input type='checkbox' value={state.form.admin} changeHandeler={handleChange('admin')} />
                    {/* onChange={(e) => props.setForm({ ...props.form, admin: props.form.admin ? 0 : 1 })} */}
                </Label>


                <AdminForm style={{ display: state.form.admin ? "block" : "none" }}>

                    <Label>
                        Company Name
                <Input type='text' value={state.form.companyname as string} changeHandeler={() => { }} />
                        {/* onChange={(e) => props.setForm({ ...props.form, admin: props.form.admin ? 0 : 1 })} */}
                    </Label>
                    <Label>
                        Company Logo
            <ImageInput
                            type="file"
                            id="image"
                            accept="image/*"
                            required
                            // onChange={HandleImage}
                            name="file"
                        />
                    </Label>

                    <Label>
                        company description
            <textarea
                            placeholder="e.g we are the largest..."
                            value={state.form.companydesc}
                            onChange={() => { }}
                        ></textarea>
                    </Label>

                    <Label>
                        Facebook Link
                <Input type='text' value={state.form.companyname as string} changeHandeler={() => { }} />
                    </Label>

                    <Label>
                        Instagram Link
                <Input type='text' value={state.form.companyname as string} changeHandeler={() => { }} />
                    </Label>

                    <Label>
                        Twitter Link
                <Input type='text' value={state.form.companyname as string} changeHandeler={() => { }} />
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
