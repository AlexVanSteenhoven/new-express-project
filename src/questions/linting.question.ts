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
      type: "confirm",
      name: "linting",
      message: "Do you want to enable linting? (default: false)",
      default: false,
      choices: types,
    },
  ]);
}
