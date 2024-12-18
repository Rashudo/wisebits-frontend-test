import {toastStore} from "../stores/toast.store";
import type {ToastStateContract} from "../contracts/toast-state.contract";

/**
 * Скрыть уведомление
 * @param id
 */
export function hideToast(id: string): void {
    toastStore.update((state: ToastStateContract[]) => state.filter((toast: ToastStateContract) => toast.id !== id));
}
