import { red, green, cyan, gray } from "kleur";
import figlet from "figlet";

import moment from "moment";

export class Logger {
  // TODO: Create a logger with colored output
  private showDate(): string {
    return gray(`[${moment(new Date()).format("DD/MM/YYYY, hh:mm:ss")}]`);
  }

  private showLoglevel(level: string): string {
    return cyan(`[${level}]`);
  }

  public showHeader(): void {
    console.log(cyan(figlet.textSync("new-express-project", { horizontalLayout: "default" })));
    console.info(cyan(" Create a new express app but on steroids!"));
    console.log("\n \n");
  }

  public info(message: string): void {
    console.log(`${this.showDate()} ${this.showLoglevel("INFO")} - ${message}`);
  }
}
