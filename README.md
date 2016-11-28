# AbstractConstructError

An error designed for being thrown when a class is instantiated, an object created, or a method is not overridden that, was intended to be abstract.
Testing and dev are done with babel in es6.

```js
import AbstractConstructError from 'abstract-class-error';

class AbstractParent {
    constructor() {
        if (new.target === AbstractParent) {
            throw new AbstractConstructError('Cannot construct class AbstractParent instances directly');
        }

        if (this.abstractMethod === AbstractParent.prototype.abstractMethod) {
            throw new AbstractConstructError('Method "abstractMethod" must be overridden in class AbstractParent');
        }
    }

    abstractMethod() {}
}
```

## Usage

[![NPM](https://nodei.co/npm/abstract-class-error.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/abstract-class-error/)

## License

MIT, see [LICENSE.md](http://github.com/limeandcoconut/abstract-class-error/blob/master/LICENSE.md) for details.
