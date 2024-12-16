<script lang="ts">
    import type {CoffeeCardContract} from "@containers/coffee-list/contracts/coffee-card.contract";
    import {imageLoader} from "@lib/image-expectant";
    import {createEventDispatcher, onMount} from "svelte";

    const dispatch = createEventDispatcher();

    export let card: CoffeeCardContract;

    let imageIsLoaded: boolean = false;

    onMount(async (): Promise<void> => {
        imageIsLoaded = await imageLoader(card.image_url);
        dispatch("isFinished", true);
    });
</script>

<div class="coffee-card">
    <div class="coffee-card__image">
        {#if imageIsLoaded}
            <img class="coffee-card__image-img" src={card.image_url} alt="Coffee"/>
        {:else}
            <div class="coffee-card__image-placeholder">Загрузка...</div>
        {/if}
    </div>
    <div class="coffee-card__info">
        <h2 class="coffee-card__info-title">{card.blend_name}</h2>
        <p class="coffee-card__info-origin">{card.origin}</p>
        <p class="coffee-card__info-variety">{card.variety}</p>
        {#if card.notes.length}
            <div class="coffee-card__info-tags">
                {#each card.notes as note, index (index)}
                    <div class="coffee-card__info-tags-tag">{note}</div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
  .coffee-card {
    display: flex;
    gap: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &__image {
      width: 120px;
      height: 120px;
      overflow: hidden;

      &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &-placeholder {
        width: 100%;
        height: 100%;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;
      }
    }

    &__info {
      flex: 1;

      &-title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 8px;
      }

      &-origin,
      &-variety {
        font-size: 1rem;
        color: #555;
        margin-bottom: 4px;
      }

      &-tags {
        display: flex;
        gap: 8px;
        flex-wrap: nowrap;
        overflow-x: auto;

        &::-webkit-scrollbar {
          height: 6px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #aaa;
          border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: #888;
        }

        &-tag {
          background-color: #f1f1f1;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.875rem;
          white-space: nowrap;
        }
      }
    }
  }
</style>