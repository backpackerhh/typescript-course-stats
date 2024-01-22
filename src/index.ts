import { CsvFileReaderWithInterface } from "./CsvFileReaderWithInterface";
import { RawMatchData } from "./MatchData";
import { MatchReader } from "./MatchReader";
import { MatchReaderWithInterface } from "./MatchReaderWithInterface";

const init = async () => {
  const reader = new MatchReader("../football-stats.csv", [
    "date",
    "homeTeam",
    "awayTeam",
    "goalsHomeTeam",
    "goalsAwayTeam",
    "result",
    "referee",
  ]);
  await reader.read();

  console.log(reader.data.length);

  const csvFileReader = new CsvFileReaderWithInterface<RawMatchData>("../football-stats.csv", [
    "date",
    "homeTeam",
    "awayTeam",
    "goalsHomeTeam",
    "goalsAwayTeam",
    "result",
    "referee",
  ]);
  const matchReader = new MatchReaderWithInterface(csvFileReader);
  await matchReader.load();

  console.log(matchReader.matches.length);
};

init();
