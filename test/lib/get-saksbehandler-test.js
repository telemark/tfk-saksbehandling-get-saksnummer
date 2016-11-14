'use strict'

const tap = require('tap')
const getSaksnummer = require('../../index')

tap.isEqual(Object.keys(getSaksnummer()).length, 8, 'returns all on empty')

tap.ok(getSaksnummer('tilskudd-folkehelse', 'returns expected for tilskudd-folkehelse'))
