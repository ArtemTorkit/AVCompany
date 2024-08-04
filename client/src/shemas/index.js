import * as yup from "yup"

const cities = [
    "Lake Worth",
    "Boynton Beach",
    "Boca Raton",
    "West Palm Beach",
    "Deerfield",
    "Pompano Beach",
    "Riviera Beach",
    "Jupiter",
    "Wellington",
    "Delray Beach",
    "Fort Lauderdale",
    "Plantation",
    "Coral Springs",
    "Greenacres",
    "Loxahatchee"
];

export const sendMailSchema = yup.object().shape({
    firstname: yup.string()
        .max(12, "First name is too long.")
        .required("Username is required."),
    lastname: yup.string()
        .max(12, "Last name is too long."),
    email: yup.string()
        .email("Please enter a valid email.")
        .required("Email is required."),
    phonenumber: yup.string()
        .matches(/^\d{9,13}$/, 'Please enter a valid phone number.')
        .required("Phone number is required."),
    address: yup.string().min(5, "Password is too short.").required("Password is required."),
    city: yup.string()
        .oneOf(cities, "Please select a valid city.")
        .required("City is required."),
    message: yup.string()
        .max(500, "Your message is too long."),
})