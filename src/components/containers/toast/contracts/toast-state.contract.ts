import type {ToastEnum} from "@containers/toast/contracts/toast.enum";

export interface ToastStateContract {
    id: string;
    message: string;
    type: ToastEnum;
    timeout: number;
}