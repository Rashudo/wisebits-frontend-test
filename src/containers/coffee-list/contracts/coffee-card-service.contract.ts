export interface CoffeeCardServiceContract {
    loadCard(): Promise<void>;

    clearCard(): void;
}