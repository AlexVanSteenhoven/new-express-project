import inquirer from "inquirer";

import Answer from "../models/answer.model";
import { Choice, ChoiceValues } from "../models/choice.model";

export async function chooseAppType(): Promise<Answer> {
  const types: Choice[] = [
    { name: "Web app", value: ChoiceValues.APPLICATION },
    { name: "Api", value: ChoiceValues.REST_API },
  ];

  return await inquirer.prompt([
    {
      type: "list",
      name: "app-type",
      message: "What are you going to make?",
      choices: types,
    },
  ]);
}
