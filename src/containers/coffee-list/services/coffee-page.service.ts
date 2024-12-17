import {showToast} from "../../toast/actions/show-toast.action";
import {Toast} from "../../toast/entities/toast.entity";
import CoffeeCardException from "../exceptions/coffee-card.exception";
import type {CoffeeCardContract} from "../contracts/coffee-card.contract";
import type {HttpClientContact} from "@lib/http-client/http-client.contract";
import {HttpClient} from "@lib/http-client";
import {CoffeeCardEntity} from "../entities/coffee-card.entity";
import type {CoffeeCardResponseContract} from "../contracts/coffee-card-response.contract";
import {coffeeCardsStore} from "../stores/coffee-cards.store";
import type {CoffeeCardServiceContract} from "../contracts/coffee-card-service.contract";

/**
 * Сервис для работы со страницей кофе
 */
export class CoffeePageService implements CoffeeCardServiceContract{

    private readonly COFFEE_API_URL = import.meta.env.SNOWPACK_PUBLIC_COFFEE_API_URL;

    /**
     * Загрузить новую карточку кофе
     */
    public async loadCard(): Promise<void> {
        try {
            const newCard: CoffeeCardContract = await this.loadNewCardAction();
            this.addCardAction(newCard);
        } catch (error: unknown) {
            this.handleErrors(error);
        }
    }

    /**
     * Очистить все карточки кофе
     */
    public clearCard(): void {
        coffeeCardsStore.set([])
    }

    /**
     * Обработать ошибки
     * @param error
     */
    private handleErrors(error: unknown): void {
        if (error instanceof CoffeeCardException) {
            showToast(new Toast(error.message));
        } else {
            showToast(new Toast("Произошла ошибка при загрузке карточки"));
        }
        throw error;
    }

    /**
     * Загрузить новую карточку кофе
     * @param httpClient
     * @private
     */
    private async loadNewCardAction(
        httpClient: HttpClientContact = new HttpClient()
    ): Promise<CoffeeCardEntity> {
        const newCard: CoffeeCardResponseContract = await httpClient.get<CoffeeCardResponseContract>(
            this.COFFEE_API_URL
        );
        return CoffeeCardEntity.fromResponse(newCard)
    }

    /**
     * Добавить карточку кофе
     * @param newCard
     * @private
     */
    private addCardAction(newCard: CoffeeCardEntity): void {
        coffeeCardsStore.update(cards => {
            const exists = cards.some(card => card.uid === newCard.uid);
            if (exists) {
                throw new CoffeeCardException(`Карточка с названием ${newCard.blend_name} уже загружена`);
            }
            return [...cards, newCard];
        });
    }

}
