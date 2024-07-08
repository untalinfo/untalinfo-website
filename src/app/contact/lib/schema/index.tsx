import * as yup from "yup";
import contactFields from "../constants";
import { EMPTY_FIELD, INVALID_EMAIL_FORMAT, MIN_CHARACTERS } from "../constants/errorMessages";

const contactValidations = {
  [contactFields.NAME]: yup.string().required(EMPTY_FIELD),
  [contactFields.EMAIL]: yup
    .string()
    .email(INVALID_EMAIL_FORMAT)
    .required(EMPTY_FIELD),
  [contactFields.MESSAGE]: yup
    .string()
    .required(EMPTY_FIELD)
    .min(20, MIN_CHARACTERS),
};


export const contactSchema = yup.object().shape(contactValidations);
