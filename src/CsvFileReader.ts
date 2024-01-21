import fs from "fs";
import { parse } from "csv-parse";

export class CsvFileReader {
  data: string[][] = [];

  constructor(private filepath: string, private headers: string[]) {}

  read(): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.createReadStream(require.resolve(this.filepath), { encoding: "utf-8" })
        .pipe(parse({ delimiter: ",", columns: this.headers }))
        .on("data", (row) => {
          this.data.push(row);
        })
        .on("error", (error) => {
          reject(error);
        })
        .on("end", () => {
          resolve();
        });
    });
  }
}
