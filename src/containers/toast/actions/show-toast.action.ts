import {toastStore} from "../stores/toast.store";
import {hideToast} from "./hide-toast.action";
import type {Toast} from "../entities/toast.entity";
import type {ToastStateContract} from "../contracts/toast-state.contract";

/**
 * Показать уведомление
 * @param toast
 */
export function showToast(
    toast: Toast
) {
    toastStore.update((toasts: ToastStateContract[]) => [...toasts, toast]);

    setTimeout(() => hideToast(toast.id), toast.timeout);
}
