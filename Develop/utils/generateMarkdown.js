// retyrns empty string if no licencse is entered
function displayBadge(license) {
  if (!license) return "";
  // all available license options nested in a object
  const licenseBadges = {
      Zlib: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
      ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  return licenseBadges[license];
}

function generateMarkdown(data) {
  // Return the README
  const licenseBadge = displayBadge(data.license);
  return `# ${data.title} 

${licenseBadge}

## Overview

${data.overview}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## License

This project is under the ${data.license} license. You can find more on this license at https://opensource.org/licenses/${data.license}
---

## Tests

${data.testing}

## Questions

[Email](${data.email})
[Github](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
