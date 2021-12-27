import Answer from "./models/answer.model";
import { chooseAppType, chooseFileType, chooseLinting, chooseStructureLevel } from "./questions";
import getValue from "./utils/getValue";

export class CLI {
  public async prepare() {
    let appType: Answer = await chooseAppType();
    let fileType: Answer = await chooseFileType();
    let structureLevel: Answer = await chooseStructureLevel();
    let linting: Answer = await chooseLinting();

    let configuration = {
      appType: getValue(appType)[0],
      fileType: getValue(fileType)[0],
      structureLevel: getValue(structureLevel)[0],
      linting: getValue(linting)[0],
    };

    return configuration;
  }

  public async execute(): Promise<any> {
    // TODO run the prepared config

    try {
      console.log(await this.prepare());
    } catch (e) {
      return e;
    }
  }
}
