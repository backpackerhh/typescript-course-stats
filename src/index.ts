import { RawMatchData } from "./MatchData";
import { MatchReader as InheritanceMatchReader } from "./inheritance/MatchReader";
import { MatchReader as CompositionMatchReader } from "./composition/MatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";

const init = async () => {
  const filepath = "../../football-stats.csv";
  const headers = ["date", "homeTeam", "awayTeam", "goalsHomeTeam", "goalsAwayTeam", "result", "referee"];
  const reader = new InheritanceMatchReader(filepath, headers);
  await reader.read();

  console.log(reader.data.length);

  const csvFileReader = new CsvFileReader<RawMatchData>(filepath, headers);
  const matchReader = new CompositionMatchReader(csvFileReader);
  await matchReader.load();

  console.log(matchReader.matches.length);
};

init();
