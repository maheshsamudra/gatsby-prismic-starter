const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "queries");

const readQuery = async () => {
  let files;

  try {
    files = fs.readdirSync(directoryPath);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }

  return files;
};

module.exports = readQuery;
