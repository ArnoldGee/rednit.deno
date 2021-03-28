import { MongoId } from './util/MongoId.ts';
export interface User {
  _id: MongoId;
  name: string;
  email: string;
  password: string;
  isPremium: boolean;
  img?: string;
  applicantProfile?: string;
  businessProfile?: string;
}
