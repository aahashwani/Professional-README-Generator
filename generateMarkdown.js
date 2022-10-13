function renderLicenseBadge(license) {
  if (license !== "No license") {
    switch (license) {
      case "Apache":
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)]`;
        break;
      case "Boost":
        licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
        break;
      case "Eclipse":
        licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
        break;
      case "GNU":
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
        break;
      case "IBM":
        licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`;
        break;
      case "MIT":
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
        break;
      case "Mozilla":
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
        break;
      case "Perl":
        licenseBadge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
        break;
      case "Zlib":
        licenseBadge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]`;
        break;
      default:
        break;
    }
    return licenseBadge;
  } else {
    return " ";
  }
}

function renderLicenseLink(license) {
  if (license !== "No license") {
    switch (license) {
      case "Apache":
        licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "Boost":
        licenseLink = `(https://www.boost.org/LICENSE_1_0.txt)`;
        break;
      case "Eclipse":
        licenseLink = `(https://opensource.org/licenses/EPL-1.0)`;
        break;
      case "GNU":
        licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case "IBM":
        licenseLink = `(https://opensource.org/licenses/IPL-1.0)`;
        break;
      case "MIT":
        licenseLink = `(https://opensource.org/licenses/MIT)`;
        break;
      case "Mozilla":
        licenseLink = `(https://opensource.org/licenses/MPL-2.0)`;
        break;
      case "Perl":
        licenseLink = `(https://opensource.org/licenses/Artistic-2.0)`;
        break;
      case "Zlib":
        licenseLink = `(https://opensource.org/licenses/Zlib)`;
        break;
      default:
        break;
    }
    return licenseLink;
  } else {
    return " ";
  }
}

function renderLicenseSection(license) {
  if (license !== "No license") {
    return `
    The application license is covered by: ${renderLicenseBadge(
      license
    )}${renderLicenseLink(license)}
      `;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
  - [Description](#description-)
  - [Installation](#installation-)
  - [Contributors](#contributors-)
  - [Testing](#testing-)
  - [License](#license-)
  - [Test](#test-)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Testing
${data.testing}

## License
${renderLicenseSection(data.license)}

## GitHub
${data.github}

## Email
${data.email}

`;
}

module.exports = generateMarkdown;
