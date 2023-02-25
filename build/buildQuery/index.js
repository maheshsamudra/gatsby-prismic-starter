const path = require("path");
const fs = require("fs");
const queryFiles = require("./queryFiles");

const readQuery = async () => {
  let query = [];

  let files = await queryFiles();

  files.forEach(function (file) {
    query.push(require(`./queries/${file}`));
  });

  return `
{
      ${query.join("")}
}`;
};

module.exports = readQuery;
