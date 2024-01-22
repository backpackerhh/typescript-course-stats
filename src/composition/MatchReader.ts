import { DataReader } from "./DataReader";
import { MatchData, RawMatchData } from "../MatchData";
import { parseDate } from "../utils";

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader<RawMatchData>) {}

  async load(): Promise<void> {
    await this.reader.read();

    this.matches = this.reader.data.map((match: RawMatchData): MatchData => {
      return {
        ...match,
        date: parseDate(match.date),
        goalsHomeTeam: parseInt(match.goalsHomeTeam),
        goalsAwayTeam: parseInt(match.goalsAwayTeam),
      };
    });
  }
}
