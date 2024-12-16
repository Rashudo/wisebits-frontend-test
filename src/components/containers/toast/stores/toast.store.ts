import {writable, Writable} from 'svelte/store';
import type {ToastStateContract} from "@containers/toast/contracts/toast-state.contract";

/**
 * Хранилище тостов
 */
export class ToastStore implements Writable<ToastStateContract[]> {

    private store = writable<ToastStateContract[]>([]);

    subscribe = this.store.subscribe;

    update = this.store.update;

    set = this.store.set;
}

export const toastStore = new ToastStore();
