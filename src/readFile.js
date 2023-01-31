const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const chalk = require('chalk');

exports.readFile = (fileName) => {
  let data = [];

  return new Promise(async (resolve, reject) => {
    fs.createReadStream(fileName)
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => console.error(error))
      .on('data', (row) => {
        data.push({
          route_start_latitude: parseFloat(row.route_start_latitude),
          route_start_longitude: parseFloat(row.route_start_longitude),

          route_end_latitude: parseFloat(row.route_end_latitude),
          route_end_longitude: parseFloat(row.route_end_longitude),

          target_latitude: parseFloat(row.target_latitude),
          target_longitude: parseFloat(row.target_longitude),
        });
      })
      .on('end', (rowCount) => {
        console.log(`Parsed ${rowCount} rows`);
        resolve(data);
      });
  });
};
