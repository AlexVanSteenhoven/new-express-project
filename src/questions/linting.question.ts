import inquirer from "inquirer";

import Answer from "../models/answer.model";
import { Choice } from "../models/choice.model";

export async function chooseLinting(): Promise<Answer> {
  const types: Choice[] = [
    { name: "Yes", value: true },
    { name: "No", value: false },
  ];

  return await inquirer.prompt([
    {
      type: "checkbox",
      name: "linting",
      message: "What type of structure do you want to use?",
      choices: types,
    },
  ]);
}
