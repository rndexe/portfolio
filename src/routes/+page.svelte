<svelte:head>
    <title>home | rnd.exe</title>
</svelte:head>

<div class="intro-wrapper">
    <p>Hello, my name is <span class="text-teal">Himanshu.</span></p>
    <p>
        I am a creative technologist. I make websites, experiment with electronics and do a little bit of everything in
        between.
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
        background-image: linear-gradient(to right, #00a98d, #91e6d4, #00a98d);
        background-clip: text;
        background-size: 200%;
        -webkit-background-clip: text;
        color: transparent;
        animation: background-pan 6s linear infinite;
    }

    .underline {
        text-decoration: underline;
        text-decoration-thickness: 4px;
        text-underline-offset: 8px;
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
