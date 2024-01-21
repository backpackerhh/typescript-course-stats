import { MatchReader } from "./MatchReader";

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
};

init();
