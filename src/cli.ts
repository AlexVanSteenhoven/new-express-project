import { Generator } from "./utils/generate";
import { Logger } from "./utils/logger";

export class CLI {
  public async prepare() {
    const generator = new Generator();
    const config = await generator.generateConfig();

    console.log(config);
  }

  public async execute(): Promise<any> {
    // TODO run the prepared config
    try {
      const logger = new Logger();
      logger.showHeader();

      return await this.prepare();
      // console.log(this.config);
    } catch (e) {
      return e;
    }
  }
}
