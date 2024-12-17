import {Readable, Writable, writable} from 'svelte/store';
import type {CoffeeCardContract} from "../contracts/coffee-card.contract";

/**
 * Хранилище карточек кофе
 */
class CoffeeCardsStore implements Readable<CoffeeCardContract[]> {

    private store: Writable<CoffeeCardContract[]> = writable<CoffeeCardContract[]>([]);

    subscribe = this.store.subscribe;

    update = this.store.update;

    set = this.store.set;
}

export const coffeeCardsStore = new CoffeeCardsStore();