import { SIGNUP_FORM } from "../../../reusablecomponent/theme/types";

type Company = "companyname" | "companydesc" | "logo";

type User =
  | "firstname"
  | "lastname"
  | "username"
  | "password"
  | "email"
  | "phone";

  const companyRequiredFields: Company[] = [
    "companyname",
    "companydesc",
    "logo",
  ];
  const userRequiredField: User[] = [
    "firstname",
    "lastname",
    "username",
    "password",
    "email",
    "phone",
  ];
 
export default function validateRegistration(
  form: SIGNUP_FORM
): string | boolean {

    console.log('form :>> ', form)
  const ErrorLogs: string[] = [];

  (form['isadmin'] === 1) && companyRequiredFields.map((item) =>
    form[item] === "" ? ErrorLogs.push(item) : null
  );
  userRequiredField.map((item) =>
    form[item] === "" ? ErrorLogs.push(item) : null
  );
    console.log('ErrorLogs :>> ', ErrorLogs);
  return ErrorLogs.length ? ErrorLogs.join(",") : false;
}
