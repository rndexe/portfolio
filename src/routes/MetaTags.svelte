<script>
    import { page } from "$app/stores";
</script>

<meta name="robots" content="index, follow" />
{#if $page.data.work}
    <meta name="title" content="{$page.data.work.title[0].text} | Himanshu Erande" />
    <meta name="description" content={$page.data.work.description} />
    <meta property="og:title" content="{$page.data.work.title[0].text} | Himanshu Erande"/>
    <meta property="og:description" content={$page.data.work.description} />
    <meta property="og:image" content={$page.data.work.cover_image.url} />
{:else}
    <meta name="title" content="Himanshu Erande" />
    <meta name="description" content="Creative Technologist Portfolio" />
    <meta property="og:title" content="Himanshu Erande" />
    <meta property="og:description" content="Creative Technologist Portfolio" />
{/if}
