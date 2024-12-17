<script lang="ts">
    import {afterUpdate, onDestroy, onMount} from "svelte";
    import {TimerHelper} from "@lib/timer-helper";
    import ToastModal from "@containers/toast/toast-modal.svelte";
    import CoffeeCardNode from "./components/coffee-card-node.svelte";
    import {coffeeCardsStore} from "./stores/coffee-cards.store";
    import {CoffeePageService} from "./services/coffee-page.service";
    import "./assets/styles/coffee-page.less";
    import type {CoffeeCardContract} from "./contracts/coffee-card.contract";
    import type {CoffeeCardServiceContract} from "./contracts/coffee-card-service.contract";

    const INACTIVITY_INTERVAL: number = import.meta.env.SNOWPACK_PUBLIC_INACTIVITY_INTERVAL * 1000;

    let loading = false;
    let pictureIsLoading = false;
    let listContainer: HTMLElement | null = null;
    let cards: CoffeeCardContract[] = [];
    const coffeePageService: CoffeeCardServiceContract = new CoffeePageService();

    $: isLoadMoreDisabled = loading || pictureIsLoading;

    coffeeCardsStore.subscribe((state: CoffeeCardContract[]) => {
        cards = state;
    });

    const loadCards = async (): Promise<void> => {
        if (isLoadMoreDisabled) return

        loading = true;
        pictureIsLoading = true;

        TimerHelper.reset(() => loadCards(), INACTIVITY_INTERVAL);

        try {
            await coffeePageService.loadCard();
        } catch {
            pictureIsLoading = false;
        } finally {
            loading = false;
        }
    };

    afterUpdate(() => {
        if (listContainer) {
            document.documentElement.scrollTop = listContainer.scrollHeight;
        }
    });

    onDestroy(() => {
        TimerHelper.clear();
        coffeePageService.clearCard();
    });

    onMount(() => loadCards());
</script>

<div class="coffee-page">
    <div class="coffee-page__list" bind:this={listContainer}>
        {#each cards as card (card.uid)}
            <CoffeeCardNode
                    {card}
                    on:isFinished={() => (pictureIsLoading = false)}
            />
        {/each}
    </div>
    <button
            class="coffee-page__load-more {isLoadMoreDisabled ? 'coffee-page__load-more--disabled' : ''}"
            on:click={loadCards}
            disabled={isLoadMoreDisabled}
    >
        {isLoadMoreDisabled ? "Загрузка..." : "Загрузить еще"}
    </button>

    <ToastModal/>
</div>
