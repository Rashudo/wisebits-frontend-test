import {toastStore} from "@containers/toast/stores/toast.store";
import type {ToastStateContract} from "@containers/toast/contracts/toast-state.contract";

export function hideToast(id: string) {
    toastStore.update((state: ToastStateContract[]) => state.filter((toast: ToastStateContract) => toast.id !== id));
}
