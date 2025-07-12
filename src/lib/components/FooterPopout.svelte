<script lang="ts">
    import { BottomSheet } from "m3-svelte";

    export let open = false;
</script>

{#if open}
    <div class="outer">
        <BottomSheet close={() => (open = false)}>
            <div class="inner">
                <img src="/ceobe.gif" alt="" loading="lazy" draggable="false" />
                <a
                    href="https://github.com/anchietae/anchietae.cc/commit/{__GIT_HASH_LONG__}"
                    ><h3>{__GIT_HASH_LONG__}</h3></a
                >
            </div>
        </BottomSheet>
    </div>
{/if}

<style>
    div.outer {
        --m3-scheme-surface-container-low: 238 255 255;
        --m3-scheme-on-surface: 32 32 32;
        --m3-scheme-on-surface-variant: 32 32 32;
    }
    div.inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }
    img {
        width: 20rem;
        height: auto;
    }
    a {
        color: inherit;
    }
</style>
