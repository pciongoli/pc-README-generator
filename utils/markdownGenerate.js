// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Installation
  * [Installation](#installation)

  Description
  * [Description](#description)

  Contributors
  * [Contribution](#contributing)

  Tests
  * [Tests](#tests)

  Contact
  [Contact](#contact)

  ##Installation
  ${data.installation}

  ##Description
  ${data.description}

  ##Contributors
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Contact Me
  ${data.contact}
`;
}




module.exports = generateMarkdown;
