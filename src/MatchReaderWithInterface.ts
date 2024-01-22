import { DataReaderInterface } from "./DataReaderInterface";
import { MatchData, RawMatchData } from "./MatchData";
import { parseDate } from "./utils";

export class MatchReaderWithInterface {
  matches: MatchData[] = [];

  constructor(public reader: DataReaderInterface<RawMatchData>) {}

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
