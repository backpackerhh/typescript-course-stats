import fs from "fs";
import { parse } from "csv-parse";

let matches: string[] = [];

fs.createReadStream(require.resolve("../football-stats.csv"), { encoding: "utf-8" })
  .pipe(
    parse({
      delimiter: ",",
      columns: ["date", "homeTeam", "awayTeam", "goalsHomeTeam", "goalsAwayTeam", "result", "referee"],
    })
  )
  .on("data", function (row) {
    matches.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log(matches);
    console.log("finished");
  });
