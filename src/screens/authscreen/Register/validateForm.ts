import { SIGNUP_FORM } from "../../../ReusableComponents/theme/types";

type Company = "companyname" | "companydesc" | "logo";

type User =
  | "firstname"
  | "lastname"
  | "username"
  | "password"
  | "email"
  | "phone";

export default function validateRegistration(
  form: SIGNUP_FORM
): string | boolean {
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

  const ErrorLogs: string[] = [];

  (form['admin'] === 1) && companyRequiredFields.map((item) =>
    form[item] === "" ? ErrorLogs.push(item) : null
  );
  userRequiredField.map((item) =>
    form[item] === "" ? ErrorLogs.push(item) : null
  );

  return ErrorLogs.length ? ErrorLogs.join(",") : false;
}
