import AbstractConstructError from './src/index.js'
import auid from 'alphastring'

let expect = require('chai').expect

/* eslint-disable no-undef */
describe('AbstractConstructError class', function() {
    let id1
    let id2

    class AbstractParent {
        constructor() {
            if (new.target === AbstractParent) {
                throw new AbstractConstructError(`Cannot construct class AbstractParent instances directly. Test uid: ${id1}.`)
            }

            if (this.abstractMethod === AbstractParent.prototype.abstractMethod) {
                throw new AbstractConstructError(`Method "abstractMethod" must be overridden in class AbstractParent, Test uid: ${id2}`)
            }
        }

        abstractMethod() {}
    }

    beforeAll(function() {
        id1 = auid()
        id2 = auid()
    })

    it('should throw with message', function() {
        expect(() => {
            /* eslint-disable no-new */
            new AbstractParent()
        }).to.throw(Error, new RegExp(id1))

        class TestChild extends AbstractParent {
        }

        expect(() => {
            /* eslint-disable no-new */
            new TestChild()
        }).to.throw(Error, new RegExp(id2))
    })

    it('should throw without message', function() {
        expect(() => {
            throw new AbstractConstructError()
        }).to.throw(Error, /^$/i)
    })
})
