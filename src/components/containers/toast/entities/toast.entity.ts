import {ToastEnum} from "@containers/toast/contracts/toast.enum";
import type {ToastStateContract} from "@containers/toast/contracts/toast-state.contract";

/**
 * Сущность тоста
 */
export class Toast implements ToastStateContract {

    public readonly id: string;
    public readonly message: string;
    public readonly type: ToastEnum;
    public readonly timeout: number;

    constructor(
        message: string,
        type: ToastEnum = ToastEnum.ERROR,
        timeout: number = import.meta.env.SNOWPACK_PUBLIC_TOAST_TIMOUT * 1000
    ) {
        this.id = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
        this.message = message;
        this.type = type;
        this.timeout = timeout;
    }
}