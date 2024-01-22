import { RawMatchData } from "./MatchData";
import { MatchReader as InheritanceMatchReader } from "./inheritance/MatchReader";
import { MatchReader as CompositionMatchReader } from "./composition/MatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { WinsAnalyzer } from "./composition/WinsAnalyzer";
import { ConsoleReportGenerator } from "./composition/ConsoleReportGenerator";
import { HtmlReportGenerator } from "./composition/HtmlReportGenerator";
import { Summary } from "./composition/Summary";

const init = async () => {
  // INHERITANCE

  const filepath = "../../football-stats.csv";
  const headers = ["date", "homeTeam", "awayTeam", "goalsHomeTeam", "goalsAwayTeam", "result", "referee"];
  const reader = new InheritanceMatchReader(filepath, headers);
  await reader.read();

  console.log(reader.data.length);

  // COMPOSITION

  const csvFileReader = new CsvFileReader<RawMatchData>(filepath, headers);
  const matchReader = new CompositionMatchReader(csvFileReader);
  await matchReader.load();

  console.log(matchReader.matches.length);

  const winsAnalyzer = new WinsAnalyzer("Arsenal");
  const consoleReportGenerator = new ConsoleReportGenerator();
  const summary = new Summary(winsAnalyzer, consoleReportGenerator);
  summary.printReport(matchReader.matches);

  const htmlReportGenerator = new HtmlReportGenerator("src/composition/reports/output.html");
  const htmlSummary = new Summary(winsAnalyzer, htmlReportGenerator);
  htmlSummary.printReport(matchReader.matches);
};

init();
