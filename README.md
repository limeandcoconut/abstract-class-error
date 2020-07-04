# AbstractConstructError

An error designed for being thrown when a class is instantiated, an object created, or a method is not overridden that, was intended to be abstract.

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

## Feedback ✉️

[Website 🌐](https://jacobsmith.tech)

[js@jacobsmith.tech](mailto:js@jacobsmith.tech)

[https://github.com/limeandcoconut](https://github.com/limeandcoconut)

[@limeandcoconut 🐦](https://twitter.com/limeandcoconut)

Cheers!

## License

ISC, see [license](/license) for details.

## Usage

[![NPM](https://nodei.co/npm/abstract-class-error.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/abstract-class-error/)

## License

MIT, see [LICENSE.md](http://github.com/limeandcoconut/abstract-class-error/blob/master/LICENSE.md) for details.
