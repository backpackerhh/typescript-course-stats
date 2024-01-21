import fs from "fs";
import { parse } from "csv-parse";

export class CsvFileReader {
  data: string[][] = [];

  constructor(private filepath: string, private headers: string[]) {}

  read(): void {
    fs.createReadStream(require.resolve(this.filepath), { encoding: "utf-8" })
      .pipe(parse({ delimiter: ",", columns: this.headers }))
      .on("data", (row: string[]) => {
        this.data.push(row);
      })
      .on("error", (error) => {
        console.log(error.message);
      })
      .on("end", () => {
        console.log(this.data);
      });
  }
}
