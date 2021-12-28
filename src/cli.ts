import Answer from "./models/answer.model";
import getValue from "./utils/getValue";

import { ChoiceValues } from "./models/choice.model";
import { chooseAppType, chooseFileType, chooseLinting, chooseStructureLevel } from "./questions";

export class CLI {
  private config = {};

  private async createConfig(): Promise<Object> {
    let appType: Answer = await chooseAppType();
    let structureLevel: Answer = await chooseStructureLevel();

    if (getValue(structureLevel) === ChoiceValues.BEGINNER) {
      this.config = {
        appType: getValue(appType),
        structureLevel: getValue(structureLevel),
      };
    } else {
      let fileType: Answer = await chooseFileType();
      let linting: Answer = await chooseLinting();

      this.config = {
        appType: getValue(appType),
        structureLevel: getValue(structureLevel),
        fileType: getValue(fileType),
        linting: getValue(linting),
      };
    }

    return this.config;
  }

  public async prepare() {
    await this.createConfig();
  }

  public async execute(): Promise<any> {
    // TODO run the prepared config

    try {
      await this.prepare();
      // console.log(this.config);
    } catch (e) {
      return e;
    }
  }
}
