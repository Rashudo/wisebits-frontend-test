interface ImportMetaEnv {
    readonly SNOWPACK_PUBLIC_APP_ENV: string;
    readonly SNOWPACK_PUBLIC_COFFEE_API_URL: string;
    readonly SNOWPACK_PUBLIC_COFFEE_IMAGE_URL: string;
    readonly SNOWPACK_PUBLIC_TOAST_TIMOUT: number;
    readonly SNOWPACK_PUBLIC_INACTIVITY_INTERVAL: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}