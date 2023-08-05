<script>
    import "$lib/styles/app.css";
    import Header from "./Header.svelte";
    import MetaTags from "./MetaTags.svelte";
</script>

<svelte:head>
    <!-- Preconnect to Prismic raster image CDN (png, jpg, etc.) -->
    <link rel="preconnect" href="https://images.prismic.io" crossorigin />
    <link rel="dns-prefetch" href="https://images.prismic.io" />
    <MetaTags />
</svelte:head>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
    }
</style>
