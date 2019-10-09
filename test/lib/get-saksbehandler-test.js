const tap = require('tap')
const getSaksnummer = require('../../index')

tap.ok(getSaksnummer, 'module loads OK')

tap.isEqual(Object.keys(getSaksnummer()).length, 3, 'returns all on empty')

tap.ok(getSaksnummer('tilskudd-folkehelse'), 'returns expected for tilskudd-folkehelse')

tap.ok(getSaksnummer('tilskudd-idrett'), 'returns expected for tilskudd-idrett')

tap.ok(getSaksnummer('tilskudd-kultur'), 'returns expected for tilskudd-kultur')

tap.isEqual(undefined, getSaksnummer('this-does-not-exist'), 'returns undefined if not found')
