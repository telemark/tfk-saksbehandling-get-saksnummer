const tap = require('tap')
const getSaksnummer = require('../../index')

tap.ok(getSaksnummer, 'module loads OK')

tap.isEqual(Object.keys(getSaksnummer()).length, 8, 'returns all on empty')

tap.ok(getSaksnummer('tilskudd-folkehelse'), 'returns expected for tilskudd-folkehelse')

tap.ok(getSaksnummer('tilskudd-idrett'), 'returns expected for tilskudd-idrett')

tap.ok(getSaksnummer('tilskudd-kultur-billedkunst'), 'returns expected for tilskudd-kultur-billedkunst')

tap.ok(getSaksnummer('tilskudd-kultur-film'), 'returns expected for tilskudd-kultur-film')

tap.ok(getSaksnummer('tilskudd-kultur-kulturarv'), 'returns expected for tilskudd-kultur-kulturarv')

tap.ok(getSaksnummer('tilskudd-kultur-litteratur'), 'returns expected for tilskudd-kultur-litteratur')

tap.ok(getSaksnummer('tilskudd-kultur-musikk'), 'returns expected for tilskudd-kultur-musikk')

tap.ok(getSaksnummer('tilskudd-kultur-scenekunst'), 'returns expected for tilskudd-kultur-scenekunst')

tap.isEqual(undefined, getSaksnummer('this-does-not-exist'), 'returns undefined if not found')
