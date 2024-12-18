import type {TimerHelperContract} from "@lib/timer-helper/timer-helper.contract";

export class TimerHelper implements TimerHelperContract {

    private timer: ReturnType<typeof setTimeout> | null = null;

    public set(callback: () => void, interval: number): void {
        this.timer = setTimeout(callback, interval);
    }

    public reset(callback: () => void, interval: number): void {
        if (this.timer !== null) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(callback, interval);
    }

    public clear(): void {
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}
