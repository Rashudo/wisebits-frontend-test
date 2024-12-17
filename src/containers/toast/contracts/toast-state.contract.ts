import type {ToastEnum} from "./toast.enum";

export interface ToastStateContract {
    id: string;
    message: string;
    type: ToastEnum;
    timeout: number;
}