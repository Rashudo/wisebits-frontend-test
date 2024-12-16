import {Readable, writable} from 'svelte/store';
import type {CoffeeCardContract} from "@containers/coffee-list/contracts/coffee-card.contract";

/**
 * Хранилище карточек кофе
 */
class CoffeeCardsStore implements Readable<CoffeeCardContract[]> {

    private store = writable<CoffeeCardContract[]>([]);

    subscribe = this.store.subscribe;

    update = this.store.update;

    set = this.store.set;
}

export const coffeeCardsStore = new CoffeeCardsStore();