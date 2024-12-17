/**
 * CoffeeCardException
 */
export default class CoffeeCardException extends Error {

    /**
     * @param message
     */
    constructor(message: string | undefined) {
        super(message);
        this.name = 'CoffeeCardException';
    }
}