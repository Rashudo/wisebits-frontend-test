<script lang="ts">
    import {toastStore} from './stores/toast.store';
    import type {Toast} from "./entities/toast.entity";
    import './assets/styles/toast-modal.less';

    let toasts: Toast[] = [];

    toastStore.subscribe(state => {
        toasts = state;
    });
</script>

<div class="toast-modal">
    {#each toasts as toast (toast.id)}
        <div class="toast-modal__message {toast.type}">
            {toast.message}
        </div>
    {/each}
</div>

