<script lang="ts">
    import {imageLoader} from "@lib/image-expectant";
    import {createEventDispatcher, onMount} from "svelte";
    import type {CoffeeCardContract} from "../contracts/coffee-card.contract";
    import "../assets/styles/coffee-card-node.less";

    const dispatch = createEventDispatcher<{ isFinished: boolean }>();

    export let card: CoffeeCardContract;

    let imageIsLoaded: boolean = false;

    onMount(async (): Promise<void> => {
        imageIsLoaded = await imageLoader(card.image_url);
        dispatch("isFinished", true);
    });
</script>

<section class="coffee-card">
    <div class="coffee-card__image">
        {#if imageIsLoaded}
            <img class="coffee-card__image-img" src={card.image_url} alt={card.blend_name}/>
        {:else}
            <div class="coffee-card__image-placeholder">Загрузка...</div>
        {/if}
    </div>
    <div class="coffee-card__info">
        <h2 class="coffee-card__info-title">{card.blend_name}</h2>
        <p class="coffee-card__info-origin">{card.origin}</p>
        <p class="coffee-card__info-variety">{card.variety} / {card.intensifier}</p>
        <div class="coffee-card__info-space"/>
        {#if card.notes.length}
            <div class="coffee-card__info-tags">
                {#each card.notes as note, index (index)}
                    <div class="coffee-card__info-tags-tag">{note}</div>
                {/each}
            </div>
        {/if}
    </div>
</section>