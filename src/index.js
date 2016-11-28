export default class AbstractConstructError extends Error {
    constructor(message) {
        super();
        this.name = 'AbstractConstructError';
        this.message = message || '';
    }
}
