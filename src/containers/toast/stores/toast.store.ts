import {writable, Writable} from 'svelte/store';
import type {ToastStateContract} from "../contracts/toast-state.contract";

/**
 * Хранилище уведомлений
 */
export class ToastStore implements Writable<ToastStateContract[]> {

    private store: Writable<ToastStateContract[]> = writable<ToastStateContract[]>([]);

    subscribe = this.store.subscribe;

    update = this.store.update;

    set = this.store.set;
}

export const toastStore = new ToastStore();
