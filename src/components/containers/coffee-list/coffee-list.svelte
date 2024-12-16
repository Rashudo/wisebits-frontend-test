<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import CoffeeCardNode from "@containers/coffee-list/elements/coffee-card-node.svelte";
    import {CoffeeCardEntity} from "@containers/coffee-list/entities/coffee-card.entity";
    import {loadNewCardAction} from "@containers/coffee-list/actions/load-new-card.action";
    import {Toast} from "@containers/toast/entities/toast.entity";
    import {showToast} from '@containers/toast/actions/show-toast.action';
    import {coffeeCardsStore} from "@containers/coffee-list/stores/coffee-cards.store";
    import CoffeeCardException from "@containers/coffee-list/exceptions/coffee-card.exception";
    import {addCard} from "@containers/coffee-list/actions/add-card.action";
    import {clearCard} from "@containers/coffee-list/actions/clear-cards.action";
    import ToastModal from "@containers/toast/toast-modal.svelte";

    const INACTIVITY_INTERVAL: number = import.meta.env.SNOWPACK_PUBLIC_INACTIVITY_INTERVAL * 1000;

    let loading: boolean = false;
    let pictureIsLoading: boolean = false;
    $: isLoadMoreDisabled = loading || pictureIsLoading;

    let inactivityTimer: ReturnType<typeof setTimeout>;

    const loadCards = async (): Promise<void> => {
        if (isLoadMoreDisabled) return;

        setIsLoadingState(true);
        pictureIsLoading = true;
        resetInactivityTimer();

        try {
            const newCard: CoffeeCardEntity = await loadNewCardAction();
            addCard(newCard);
        } catch (error: any) {
            pictureIsLoading = false;
            if (error instanceof CoffeeCardException) {
                showToast(new Toast(error.message));
            } else {
                showToast(new Toast('Произошла ошибка при загрузке карточки'));
            }
        } finally {
            setIsLoadingState(false);
        }
    };

    const resetInactivityTimer = (): void => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => loadCards(), INACTIVITY_INTERVAL);
    };

    const setIsLoadingState = (state: boolean): void => {
        loading = state;
    };

    onDestroy(() => {
        clearTimeout(inactivityTimer);
        clearCard();
    });

    onMount(() => loadCards());
</script>

<div class="coffee-page">
    <div class="coffee-page__list">
        {#each $coffeeCardsStore as card (card.uid)}
            <CoffeeCardNode
                    {card}
                    on:isFinished={() => pictureIsLoading = false}
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

<style lang="scss">
  .coffee-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 37rem;
    }

    &__load-more {
      margin-top: 1rem;
      padding: .5rem 1rem;
      font-size: 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: .25rem;
      cursor: pointer;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
  }
</style>
