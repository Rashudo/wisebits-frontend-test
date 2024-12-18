export interface TimerHelperContract {
    /**
     * Установить таймер.
     * @param callback - Функция, вызываемая по истечении интервала.
     * @param interval - Интервал времени в миллисекундах.
     */
    set(callback: () => void, interval: number): void;

    /**
     * Сбросить активный таймер и установить новый.
     * @param callback - Функция, вызываемая по истечении интервала.
     * @param interval - Интервал времени в миллисекундах.
     */
    reset(callback: () => void, interval: number): void;

    /**
     * Сбросить активный таймер
     */
    clear(): void;
}