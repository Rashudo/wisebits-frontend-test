/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import CoffeeCardNode from "../src/containers/coffee-list/components/coffee-card-node.svelte";
import {render, waitFor} from '@testing-library/svelte';
import {imageLoader} from '@lib/image-expectant';
import type {CoffeeCardContract} from "../src/containers/coffee-list/contracts/coffee-card.contract";


jest.mock('@lib/image-expectant', () => ({
    imageLoader: jest.fn(),
}));


describe('CoffeeCardNode Component', () => {
    let mockCard: CoffeeCardContract;

    beforeEach(() => {
        mockCard = {
            "uid": "9319e77e-4d88-41c1-ab42-1ad91b8e2c6f",
            "blend_name": "Winter Nuts",
            "origin": "Boquete, Panama",
            "variety": "Yellow Bourbon",
            "notes": ['deep', 'big', 'barley', 'cola', 'lemongrass'],
            "intensifier": "balanced",
            "image_url": "https://whatever.com/image.jpg"
        };
    });

    test('it renders a card', async () => {

        (imageLoader as jest.Mock).mockResolvedValue(true)

        const { getByText, getByAltText, component } = render(CoffeeCardNode, {
            props: {card: mockCard},
        });

        getByText(mockCard.blend_name);
        getByText(mockCard.origin);
        getByText(`${mockCard.variety} / ${mockCard.intensifier}`);
        getByText(mockCard.notes[0]);
        getByText(mockCard.notes[1]);
        getByText(mockCard.notes[2]);
        getByText(mockCard.notes[3]);
        getByText(mockCard.notes[4]);

        const imagePlaceholder = getByText('Загрузка...');
        expect(imagePlaceholder).toBeInTheDocument();

        expect(imageLoader).toHaveBeenCalledWith(mockCard.image_url);
        expect(imageLoader).toHaveBeenCalledTimes(1);

        const spy = jest.fn();
        component.$on('isFinished', spy);

        await waitFor(() => expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: true })));

        expect(getByAltText(mockCard.blend_name)).toBeInTheDocument();
    });
});