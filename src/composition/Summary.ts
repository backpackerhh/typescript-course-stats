import { MatchData } from "../MatchData";
import { Analyzer } from "./Analyzer";
import { ReportGenerator } from "./ReportGenerator";

export class Summary {
  constructor(private analyzer: Analyzer, private reportGenerator: ReportGenerator) {}

  printReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);

    this.reportGenerator.print(output);
  }
}
