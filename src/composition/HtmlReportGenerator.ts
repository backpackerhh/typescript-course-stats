import { ReportGenerator } from "./ReportGenerator";
import fs from "fs";

export class HtmlReportGenerator implements ReportGenerator {
  constructor(private outputFilepath: string) {}

  print(report: string): void {
    const output = `<h1>${report}</h1>`;

    fs.writeFileSync(this.outputFilepath, output);
  }
}
