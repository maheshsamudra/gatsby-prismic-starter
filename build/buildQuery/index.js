const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "queries");

const readQuery = async () => {
  let query = [];

  let files;

  try {
    files = fs.readdirSync(directoryPath);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }

  files.forEach(function (file) {
    query.push(require(`./queries/${file}`));
  });

  return `
{
      ${query.join("")}
}`;
};

module.exports = readQuery;
