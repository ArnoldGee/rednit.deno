import { WorkExperience } from "./WorkExperience.ts";
import { Place } from "./Place.ts";
import { Education } from "./experience/Education.ts";

export interface ApplicantImg {
  img: string;
  description?: string;
}

export interface Applicant {
  _id: string;
  profileType: "APPLICANT";
  firstName: string;
  surname: string;
  place: Place;
  shortDescription?: string;
  description?: string;
  imgs: ApplicantImg[];
  education: Education[];
  WorkExperiences: WorkExperience[];
}
