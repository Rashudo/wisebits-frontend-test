export const imageLoader = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
        const img: HTMLImageElement = new Image();
        img.src = url;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
    });
}