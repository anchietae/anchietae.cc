<script lang="ts">
    import { FAB } from "m3-svelte";
    import { onMount, onDestroy } from "svelte";
    import arrow_upward from "@ktibow/iconset-material-symbols/arrow-upward";

    let visible = false;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        visible = window.scrollY > 100;
    };

    onMount(() => {
        handleScroll();
    });
    window.addEventListener("scroll", handleScroll);
    onDestroy(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>

{#if visible}
<div class="fab">
    <FAB color="secondary" size="small" icon={arrow_upward} click={scrollToTop} />
</div>
{/if}

<style>
    .fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1000;
    }
    @media (37.5rem <= width < 52.5rem) {
        .fab {
            bottom: calc(4rem + 16px);
        }
    }
    @media (width < 37.5rem) {
        .fab {
            bottom: calc(4rem + 16px);
        }
    }
</style>
