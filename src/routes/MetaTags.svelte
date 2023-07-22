<script>
    import { page } from "$app/stores";
</script>

<meta name="robots" content="index, follow" />
{#if $page.data.work}
    <title> "{$page.data.work.title[0].text} | rnd.exe"</title>

    <meta name="title" content="{$page.data.work.title[0].text} | rnd.exe" />
    <meta name="description" content={$page.data.work.description} />
    <meta property="og:title" content="{$page.data.work.title[0].text} | rnd.exe"/>
    <meta property="og:description" content={$page.data.work.description} />
    <meta property="og:image" content={$page.data.work.cover_image.url} />
{:else}
    <meta name="title" content="rnd.exe" />
    <meta name="description" content="Creative Technologist Portfolio" />
    <meta property="og:title" content="rnd.exe" />
    <meta property="og:description" content="Creative Technologist Portfolio" />
{/if}
