'use strict'

const tap = require('tap')
const getSaksnummer = require('../../index')

tap.isEqual(Object.keys(getSaksnummer()).length, 9, 'returns all on empty')

tap.ok(getSaksnummer('skoleskyss', 'returns expected for skoleskyss'))
