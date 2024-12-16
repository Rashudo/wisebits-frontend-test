/**
 * @jest-environment jsdom
 */

import Counter from '../src/components/containers/coffee-list/coffee-list.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('Counter Component', () => {
  test('it counts', async () => {
    const { getByTestId } = render(Counter, {
      id: 'counter-btn'
    });

    const button = getByTestId('counter-btn');
    expect(button.innerHTML).toBe('Clicks: 0');
    await fireEvent.click(button);
    expect(button.innerHTML).toBe('Clicks: 1');
  });
});