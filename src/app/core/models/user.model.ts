import { Common } from "./common.model";
import { Designation } from "./designation.model";

export class User extends Common {
  _id?: number = undefined;
  userId?: number = undefined;
  email?: string = undefined;
  hash?: string = undefined;
  token?: string = undefined;
  firstName?: string = undefined;
  middleName?: string = undefined;
  lastName?: string = undefined;
  mobileNumber?: string = undefined;
  alternateNumber?: string = undefined;
  role?: number;
  designation!: Designation;
  name?: {
    firstName: string,
    lastName: string
  }
}

export enum Role {
  ADMIN = 1,
  NON_ADMIN = 2
}