export interface Choice {
  name: string;
  value: ChoiceValues | boolean;
}

export enum ChoiceValues {
  JAVASCRIPT = "JS",
  TYPESCRIPT = "TS",
  APPLICATION = "APP",
  REST_API = "API",
  BEGINNER = "BEGINNER",
  INTERMIDIATE = "INTERMIDIATE",
  ADVANCED = "ADVANCED",
}
