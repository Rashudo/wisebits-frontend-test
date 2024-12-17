export class TimerHelper {

    /**
     * Ссылка на таймер
     * @private
     */
    private static timer: ReturnType<typeof setTimeout> | null = null;


    /**
     * Сбрасывает таймер с новым интервалом и колбэком.
     * @param callback - Функция, вызываемая по истечении интервала.
     * @param interval - Интервал времени в миллисекундах.
     */
    static reset(callback: () => void, interval: number): void {
        if (this.timer !== null) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(callback, interval);
    }

    /**
     * Очищает активный таймер, если он существует.
     */
    static clear(): void {
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}
