<script>
    import { beforeNavigate, afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";

    import { gsap } from "gsap/dist/gsap";
    import { Flip } from "gsap/dist/Flip";

    gsap.registerPlugin(Flip);

    let state;
    beforeNavigate(() => {
        if ($page.url.pathname == "/works") {
            state = Flip.getState("[data-title]");
            console.log(state)
        }
    });

    afterNavigate(() => {
        if (state) {
            Flip.from(state, {
                targets: "[data-title]",
                duration: 0.5,
                scale: true,
                ease: "ease-in-out",
            });
        }
    });
</script>

<slot />
