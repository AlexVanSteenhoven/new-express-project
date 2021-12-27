import inquirer from "inquirer";

import Answer from "../models/answer.model";
import { Choice, ChoiceValues } from "../models/choice.model";

export async function chooseStructureLevel(): Promise<Answer> {
  const types: Choice[] = [
    { name: "Basic", value: ChoiceValues.BEGINNER },
    { name: "Intermidiate", value: ChoiceValues.INTERMIDIATE },
    { name: "Advanced", value: ChoiceValues.ADVANCED },
  ];

  return await inquirer.prompt([
    {
      type: "list",
      name: "structure-level",
      message: "What type of structure do you want to use?",
      choices: types,
    },
  ]);
}
