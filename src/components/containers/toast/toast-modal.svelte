<script lang="ts">
    import {toastStore} from '@containers/toast/stores/toast.store';
    import type {Toast} from "@containers/toast/entities/toast.entity";

    let toasts: Toast[] = [];

    toastStore.subscribe(state => {
        toasts = state;
    });
</script>

<div class="toast-container">
    {#each toasts as toast (toast.id)}
        <div class="toast {toast.type}">
            {toast.message}
        </div>
    {/each}
</div>

<style>
    .toast-container {
        position: fixed;
        top: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .toast {
        padding: .5rem 1rem;
        border-radius: .25rem;
        color: #fff;
        font-weight: bold;
        animation: fade-in-out 0.3s;
    }

    .toast.info { background: #2196f3; }
    .toast.success { background: #4caf50; }
    .toast.error { background: #f44336; }

    @keyframes fade-in-out {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>
