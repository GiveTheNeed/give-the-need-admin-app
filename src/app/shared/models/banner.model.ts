import { Common } from "src/app/core/models";

export interface Banner extends Common {
  _id?: number;
  title?: string;
  description?: string;
  picDetails?: string;
}
