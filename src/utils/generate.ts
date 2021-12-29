import Answer from "../models/answer.model";
import getValue from "./getValue";

import { ChoiceValues } from "../models/choice.model";
import { chooseAppType, chooseFileType, chooseLinting, chooseStructureLevel } from "../questions";

export class Generator {
  private config = {};

  public async generateConfig(): Promise<Object> {
    // TODO: Fix issue to generate the correct config

    let appType: Answer = await chooseAppType();
    let structureLevel: Answer = await chooseStructureLevel();

    if (getValue(structureLevel) === ChoiceValues.BEGINNER) {
      this.config = {
        appType: getValue(appType),
        structureLevel: getValue(structureLevel),
      };
    }

    let fileType: Answer = await chooseFileType();
    if (getValue(structureLevel) === ChoiceValues.INTERMIDIATE) {
      this.config = {
        appType: getValue(appType),
        structureLevel: getValue(structureLevel),
        fileType: getValue(fileType),
      };
    }

    if (getValue(fileType) === ChoiceValues.TYPESCRIPT) {
      let linting: Answer = await chooseLinting();

      if (getValue(structureLevel) === ChoiceValues.ADVANCED) {
        this.config = {
          appType: getValue(appType),
          structureLevel: getValue(structureLevel),
          fileType: getValue(fileType),
          linting: getValue(linting),
        };
      }
    } else {
      if (getValue(structureLevel) === ChoiceValues.ADVANCED) {
        this.config = {
          appType: getValue(appType),
          structureLevel: getValue(structureLevel),
          fileType: getValue(fileType),
        };
      }
    }

    return this.config;
  }

  public async initPackageJson() {
    // TODO: create a package-json with specified project name
  }
}
