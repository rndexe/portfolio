<script>
    import { page } from "$app/stores";
</script>

<header>
    <nav>
        <ul class="menu">
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined} class="menu-item">
                <a href="/">Home</a>
            </li>
            <li aria-current={$page.url.pathname === "/works" ? "page" : undefined} class="menu-item">
                <a href="/works">Work</a>
            </li>
            <li aria-current={$page.url.pathname === "/play" ? "page" : undefined} class="menu-item">
                <a href="/play">Play</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    nav {
        height: clamp(4rem, calc(3.6rem + 2vw), 6rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: clamp(3rem, calc(2.8rem + 1vw), 4rem);
    }
    li a {
        text-transform: uppercase;
        font-size: 1rem;
    }
    .menu-item {
        padding-inline: 0.5rem;
    }
    li[aria-current="page"] {
        background-color: #91e6d4;
    }
</style>
