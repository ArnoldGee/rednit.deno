import { User } from "./User.ts";
export interface Applicant extends User {
  userType: "APPLICANT";
  firstName: string;
  surname: string;
}
