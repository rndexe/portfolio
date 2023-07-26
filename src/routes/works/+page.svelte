<script>
    import * as prismic from "@prismicio/client";
    import { gsap } from "gsap/dist/gsap";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;
    let duration = 0.75;

    onMount(() => {
        //staggerIn();
    });

    function staggerIn() {
        gsap.from(".card-block", {
            opacity: 0,
            duration: duration,
            ease: "none",
            stagger: {
                amount: duration,
                ease: "none",
            },
        });
    }

    function staggerOut(event) {
        gsap.to(".card-block", {
            opacity: 0,
            duration: duration,
            ease: "none",
            stagger: { amount: duration, ease: "none" },
            onComplete: handleNavigate,
            onCompleteParams: [event.currentTarget],
        });
    }

    function handleNavigate(a) {
        goto(a.href);
    }
</script>

<svelte:head>
    <title>Works</title>
</svelte:head>

<div class="work-grid">
    {#each data.works_data as work}
        {@const title = prismic.asText(work.title)}
        <!--<a href="/works/{work.uid}" on:click|preventDefault={staggerOut}>-->
        <a href="/works/{work.uid}">
            <div class="card-block">
                <div class="img-wrapper">
                    <img src={prismic.asImageSrc(work.cover_image)} alt="" />
                </div>
                <h2>{title}</h2>
                <p>{work.description}</p>
            </div>
        </a>
    {/each}
</div>

<style>
    .work-grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: clamp(1.00rem, calc(0.80rem + 1.00vw), 2.00rem);
;
    }

    @media (min-width: 640px) {
        .work-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

    }
    @media (min-width: 1024px) {
        .work-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
    .work-grid a {
        border-width: 1px;
        border-color: var(--color-text);
    }

    .card-block {
        aspect-ratio: 4/3;

        padding: 1rem;
    }
    .img-wrapper {
        background-color: var(--bg-color);
        aspect-ratio: 16/9;
    }

    .card-block img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
    }

    .card-block h2 {
        margin-block: 1rem;
        font-family: var(--font-inter);
        font-size: var(--size-h2);
        line-height: 1;
    }
    .card-block p {
        margin-bottom: 1rem;
    }
</style>
