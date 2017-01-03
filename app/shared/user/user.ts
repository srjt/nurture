import * as emailValidator from "email-validator";
export class User {
  email: string;
  password: string;
  isValidEmail() {
  	return emailValidator.validate(this.email);
  }
}