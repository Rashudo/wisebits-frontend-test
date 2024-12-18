import {toastStore} from "../stores/toast.store";
import {hideToast} from "./hide-toast.action";
import type {Toast} from "../entities/toast.entity";
import type {ToastStateContract} from "../contracts/toast-state.contract";
import {TimerHelper} from "@lib/timer-helper";

/**
 * Показать уведомление
 * @param toast
 */
export function showToast(
    toast: Toast
): void {
    toastStore.update((toasts: ToastStateContract[]) => [...toasts, toast]);

    new TimerHelper().set(() => hideToast(toast.id), toast.timeout);
}