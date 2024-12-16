import type {CoffeeCardContract} from '@containers/coffee-list/contracts/coffee-card.contract';
import type {CoffeeCardResponseContract} from '@containers/coffee-list/contracts/coffee-card-response.contract';

/**
 * Сущность карточки кофе
 */
export class CoffeeCardEntity implements CoffeeCardContract {
    constructor(
        readonly uid: string,
        readonly blend_name: string,
        readonly origin: string,
        readonly variety: string,
        readonly notes: string[],
        readonly intensifier: string,
        readonly image_url: string,
    ) {
    }

    static fromResponse(response: CoffeeCardResponseContract): CoffeeCardEntity {
        const notes: string[] = response.notes.split(', ');
        const image_url: string = CoffeeCardEntity.getImageUrl(response.uid);
        return new CoffeeCardEntity(
            response.uid,
            response.blend_name,
            response.origin,
            response.variety,
            notes,
            response.intensifier,
            image_url
        );
    }

    static getImageUrl(uid: string): string {
        return `${import.meta.env.SNOWPACK_PUBLIC_COFFEE_IMAGE_URL}?${uid}`;
    }
}