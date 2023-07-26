<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="intro-wrapper">
    <p>Hello, my name is <span class="text-teal">Himanshu.</span></p>
    <p>
        I am a <span class="text-teal">creative technologist</span>. I make websites, experiment with electronics and do
        a little bit of everything in between.
    </p>
    <p>
        Contact me on : <a class="underline" href="mailto:himanshu.ernde@gmail.com" target="_blank">Email</a> or
        <a class="underline" href="https://www.instagram.com/rnd.exe/" target="_blank">Instagram</a>
    </p>
</div>

<style>
    .intro-wrapper {
        display: flex;
        flex-direction: column;
        flex: 0.6;
        justify-content: center;
    }
    p {
        line-height: 1;
        font-size: var(--size-h1);
        font-family: var(--font-inter);
        margin-bottom: 4rem;
    }
    .text-teal {
        background-color: #00a98d;
        background-image: linear-gradient(to right, #00a98d, #008077, #00a98d);
        background-clip: text;
        background-size: 200%;
        -webkit-background-clip: text;
        color: transparent;
        animation: background-pan 6s linear infinite;
    }

    .underline {
        text-decoration: underline;
        text-decoration-thickness: clamp(3px, calc(0.1875rem + ((1vw - 3.2px) * 0.0625)), 4px);
        text-underline-offset: clamp(4px, calc(0.25rem + ((1vw - 3.2px) * 0.25)), 8px);
    }

    @media (hover: hover) {
        .underline:hover {
            color: #00a98d;
        }
    }
    @keyframes background-pan {
        from {
            background-position: 0% center;
        }

        to {
            background-position: -200% center;
        }
    }
</style>
