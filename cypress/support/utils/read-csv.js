// cypress/support/utils/readCsv.js
const fs = require("fs");
const csv = require("csv-parser");

export function readCsv(filePath) {
  return new Promise((resolve, reject) => {
    const data = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}
