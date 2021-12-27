import inquirer from "inquirer";

import Answer from "../models/answer.model";
import { Choice, ChoiceValues } from "../models/choice.model";

export async function chooseFileType(): Promise<Answer> {
  const types: Choice[] = [
    { name: "JavaScript", value: ChoiceValues.JAVASCRIPT },
    { name: "TypeScript", value: ChoiceValues.TYPESCRIPT },
  ];

  return await inquirer.prompt([
    {
      type: "list",
      name: "file-type",
      message: "Do you want to use JavaScript or TypeScript?",
      choices: types,
    },
  ]);
}
