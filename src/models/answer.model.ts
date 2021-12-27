import { ChoiceValues } from "./choice.model";

export default interface Answer {
  name: string;
  value: string | boolean | ChoiceValues;
}
