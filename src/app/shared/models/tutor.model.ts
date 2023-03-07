import { Common } from "src/app/core/models";

export interface Tutor extends Common {
  _id?: number;
  name?: string;
  city?: string;
  profilePicUrl?: string;
}