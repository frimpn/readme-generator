// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  1.[Description](#description)

  2.[Installation](#installation)

  3.[Usage](#usage)

  4.[Credits](#credits)

  5.[License](#license)

  6.[contributing](#contributing)

  7.[Tests](#tests)
  
  8.[Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

https://img.shields.io/badge/license-${data.license}-blue




## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Github id: ${data.github}
Email: ${data.email}


`;
}

module.exports = generateMarkdown;
