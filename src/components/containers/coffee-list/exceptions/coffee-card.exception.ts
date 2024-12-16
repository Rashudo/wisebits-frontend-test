export default class CoffeeCardException extends Error {
    constructor(message: string | undefined) {
        super(message);
        this.name = 'CoffeeCardException';
    }
}