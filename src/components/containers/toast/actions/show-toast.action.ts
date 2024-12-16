import {toastStore} from "@containers/toast/stores/toast.store";
import {hideToast} from "@containers/toast/actions/hide-toast.action";
import type {Toast} from "@containers/toast/entities/toast.entity";
import type {ToastStateContract} from "@containers/toast/contracts/toast-state.contract";


export function showToast(
    toast: Toast
) {
    toastStore.update((toasts: ToastStateContract[]) => [...toasts, toast]);

    setTimeout(() => hideToast(toast.id), toast.timeout);
}
