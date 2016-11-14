[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-get-saksnummer.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-get-saksnummer)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-get-saksnummer/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-get-saksnummer?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-saksbehandling-get-saksnummer
Get case number and other metadata

## Usage

```JavaScript
'use strict'

const getSaksnummer = require('tfk-saksbehandling-get-saksnummer')

console.log(getSaksnummer('skoleskyss')) // data for skoleskyss

console.log(getSaksnummer()) // data for all cases
```

## License
[MIT](LICENSE)