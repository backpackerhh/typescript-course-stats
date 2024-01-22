import { CsvFileReader } from "./CsvFileReader";
import { MatchData, RawMatchData } from "../MatchData";
import { parseDate } from "../utils";

export class MatchReader extends CsvFileReader<RawMatchData, MatchData> {
  sanitizeRow(row: RawMatchData): MatchData {
    return {
      ...row,
      date: parseDate(row.date),
      goalsHomeTeam: parseInt(row.goalsHomeTeam),
      goalsAwayTeam: parseInt(row.goalsAwayTeam),
    };
  }
}
