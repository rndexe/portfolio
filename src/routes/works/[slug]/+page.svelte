<script>
    import * as prismic from "@prismicio/client";
    export let data;
</script>

<article>
    <h1>{prismic.asText(data.work.title)}</h1>
    <p>
        {data.work.long_description}
    </p>
    {@html prismic.asHTML(data.work.work_content)}
</article>

<style>
    h1 {
        line-height: 1;
        font-size: var(--size-h1);
        font-family: var(--font-inter);
        margin-bottom: 4rem;
    }

    article {
        max-width: 64rem;
        margin: 0 auto;
    }

    article :global(a) {
        text-decoration: underline;
    }

    article :global(p) {
        margin-top: 1rem;
    }

    article :global(img) {
        width: 100%;
        object-fit: cover;
        object-position: bottom;
        aspect-ratio: 16/9;
    }

    article :global(.block-img) {
        border-width: 1px;
        border-color: black;
    }

    article :global(h2) {
        margin-top: 4rem;
        font-size: var(--size-h3);
    }
</style>
