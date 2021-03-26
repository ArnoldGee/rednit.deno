export interface User {
  _id: string;
  email: string;
  password: string;
  isPremium: boolean;
  name: string;
  img?: string;
  applicantProfile?: string;
  businessProfile?: string;
}
