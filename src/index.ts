import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("../football-stats.csv", [
  "date",
  "homeTeam",
  "awayTeam",
  "goalsHomeTeam",
  "goalsAwayTeam",
  "result",
  "referee",
]);
reader.read();

console.log(reader.data);
