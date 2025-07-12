<script lang="ts">
    import "../app.css";

    let open = false;

    import { Dialog, Button, Card } from "m3-svelte";
</script>

<svelte:head>
    <title>Anchietae</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap" rel="stylesheet">
</svelte:head>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<h2>
    Hi, I'm <u on:click={() => (open = !open)} class="name">Anchietae</u>, a
    student and self-taught dev.
</h2>
<p>
    I've written most of my backends in JavaScript, and my frontends (mostly
    websites) are in Svelte.
</p>
<Card variant="filled">
    <h3>Some projects:</h3>
    <ul>
        <li>
            <a href="https://github.com/qwit-development/domain">Domain</a> - Gemini
            Powered Discord Chatbot
        </li>
    </ul>
</Card>

<Dialog headline="Pronunciation" bind:open>
    /æn.ʃi'e.ti:/
    {#snippet buttons()}
        <Button variant="tonal" click={() => (open = false)}>Close</Button>
    {/snippet}
</Dialog>

<style>
    .name {
        color: rgb(var(--m3-scheme-primary));
        cursor: pointer;
        text-decoration: wavy underline;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        font-family: "Instrument Serif";
        font-size: 2rem;
        font-style: normal;
        font-weight: bolder;
        line-height: normal;
        letter-spacing: -0.105rem;
    }
</style>
