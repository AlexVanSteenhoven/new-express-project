import { red, green, cyan } from "kleur";
import figlet from "figlet";

export class Logger {
  // TODO: Create a logger with colored output

  public showHeader(): void {
    console.log(cyan(figlet.textSync("new-express-project", { horizontalLayout: "default" })));
    console.info(cyan(" Create a new express app but on steroids!"));
    console.log("\n \n");
  }
}
