import App from './App.svelte';
import type {SvelteComponentDev} from "svelte/internal";

const app: SvelteComponentDev = new App({
    target: document.body
});

export default app;

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.$destroy();
    });
}
