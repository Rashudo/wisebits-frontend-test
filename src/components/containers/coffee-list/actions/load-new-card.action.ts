import type {HttpClientContact} from "@lib/http-client/http-client.contract";
import {HttpClient} from "@lib/http-client";
import type {CoffeeCardResponseContract} from "@containers/coffee-list/contracts/coffee-card-response.contract";
import {CoffeeCardEntity} from "@containers/coffee-list/entities/coffee-card.entity";

const COFFEE_API_URL = import.meta.env.SNOWPACK_PUBLIC_COFFEE_API_URL;

export const loadNewCardAction = async (
    httpClient: HttpClientContact = new HttpClient()
): Promise<CoffeeCardEntity> => {
    const newCard: CoffeeCardResponseContract = await httpClient.get<CoffeeCardResponseContract>(
        COFFEE_API_URL
    );
    return CoffeeCardEntity.fromResponse(newCard)
};
