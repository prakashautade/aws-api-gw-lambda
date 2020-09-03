export class APIInput implements Input {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    /**
     * getMessage
     */
    public getMessage(): string {
        return this.message;
    }
}