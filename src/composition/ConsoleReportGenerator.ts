import { ReportGenerator } from "./ReportGenerator";

export class ConsoleReportGenerator implements ReportGenerator {
  print(report: string): void {
    console.log(report);
  }
}
