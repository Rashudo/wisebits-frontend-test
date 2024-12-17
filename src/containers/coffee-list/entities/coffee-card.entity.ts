import type {CoffeeCardContract} from '../contracts/coffee-card.contract';
import type {CoffeeCardResponseContract} from '../contracts/coffee-card-response.contract';

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

    /**
     * Создать экземпляр из ответа
     * @param response
     */
    public static fromResponse(response: CoffeeCardResponseContract): CoffeeCardEntity {
        const notes: string[] = response.notes.split(', ');
        const image_url: string = CoffeeCardEntity.getImageUrl(response.origin);
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

    /**
     * Получить URL изображения
     * @param origin
     */
    public static getImageUrl(origin: string): string {
        const imageName = origin.trim().replace(/\s/g, '').toLowerCase();
        return `${import.meta.env.SNOWPACK_PUBLIC_COFFEE_IMAGE_URL}/${imageName}`;
    }
}