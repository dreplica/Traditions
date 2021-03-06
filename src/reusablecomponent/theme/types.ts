export interface SIGNUP_FORM {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    isadmin: number;
    phone: string;
    companyname?: string;
    companydesc?: string;
    logo?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
}

export type SIGNUP_KEY =
    | "firstname"
    | "lastname"
    | "username"
    | "password"
    | "email"
    | "isadmin"
    | "phone"
    | "companyname"
    | "companydesc"
    | "logo"
    | "facebook"
    | "twitter"
    | "instagram";

export const SIGNUP_FORM: SIGNUP_FORM = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    isadmin: 0,
    phone: "",
    companyname: "",
    logo: "",
    companydesc: "",
    facebook: "",
    twitter: "",
    instagram: "",
};

interface COLORS {
    BG_DARK: string;
    BG_LIGHT: string;
    BG_ORANGE: string;
    FONT_LIGTH: string;
}

interface FONTS {
    MEDIUM_STYLE: string;
    BOLD_STYLE: string;
    LIGHT_STYLE: string;
    LARGE_SIZE: string;
    MEDIUM_SIZE: string;
    SMALL_SIZE: string;
}

export const Colors: COLORS = {
    BG_DARK: `rgb(24, 17, 17)`,
    BG_LIGHT: "white",
    BG_ORANGE: "orange",
    FONT_LIGTH: `rgb(230, 208, 208)`,
};

export interface ITEMS {
    id: string;
    itemname: string;
    description: string;
    image: string;
    price: string;
    type?: string;
    bought?: string;
    category?: string;
    quantity?: string|number;
    sellerid?: string;
    cartid?: string;
    createdAt?: string;
    updatedAt?: string;
}

export const initialItems: ITEMS = {
    id: "",
    itemname: "",
    description: "",
    image: "",
    price: "",
}