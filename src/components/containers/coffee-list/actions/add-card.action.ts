import type {CoffeeCardEntity} from "@containers/coffee-list/entities/coffee-card.entity";
import CoffeeCardException from "@containers/coffee-list/exceptions/coffee-card.exception";
import {coffeeCardsStore} from "@containers/coffee-list/stores/coffee-cards.store";

export function addCard(newCard: CoffeeCardEntity): void {
    coffeeCardsStore.update(cards => {
        const exists = cards.some(card => card.uid === newCard.uid);
        if (exists) {
            throw new CoffeeCardException(`Карточка с названием ${newCard.blend_name} уже загружена`);
        }
        return [...cards, newCard];
    });
}