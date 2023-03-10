function generateMarkdown(data) {
   const licenseBadge = renderLicenseBadge(data.license);
   const licenseLink = renderLicenseLink(data.license);
   const licenseSection = renderLicenseSection(data.license);

   return `# ${data.title} ${licenseBadge}

## Technology
${data.technology}

## Installation
${data.installation}

## Description
${data.description}

## Contributors
${data.contributing}

## Tests
${data.tests}

## Contact Me
${data.contact}

${licenseLink}
${licenseSection}
`;
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license !== "No License") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
   } else {
      return "";
   }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   if (license !== "No License") {
      return `\n* [License](#license)\n`;
   } else {
      return "";
   }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license !== "No License") {
      return `## License

This project is licensed under the ${license} license.`;
   } else {
      return "";
   }
}

module.exports = generateMarkdown;
