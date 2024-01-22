import { MatchData } from "../MatchData";
import { Analyzer } from "./Analyzer";

export class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (
        (match.homeTeam === this.team && match.result === "H") || // FIXME: use an enum
        (match.awayTeam === this.team && match.result === "A")
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
