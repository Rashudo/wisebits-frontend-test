import {coffeeCardsStore} from "@containers/coffee-list/stores/coffee-cards.store";

export function clearCard(): void {
    coffeeCardsStore.set([])
}