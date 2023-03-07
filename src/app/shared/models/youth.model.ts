import { Common } from "src/app/core/models";

export interface Youth extends Common {
  _id?: number;
  name?: string;
  city?: string;
  picDetails?: string;
}
