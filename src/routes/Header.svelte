<header>
    <nav>
        <ul class="menu">
            <li class="menu-item">
                <a href="/">Home</a>
            </li>
            <li class="menu-item">
                <a href="/works">Work</a>
            </li>
            <li class="menu-item">
                <a href="/play">Play</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    nav {
        height: clamp(4.00rem, calc(3.60rem + 2.00vw), 6.00rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: clamp(3.00rem, calc(2.80rem + 1.00vw), 4.00rem);
    }
    li a {
        text-transform: uppercase;
        font-size: 1rem;
    }
</style>
