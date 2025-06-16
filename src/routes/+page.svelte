<script lang="ts">
    import "../app.css";

    let open = false;

    import {Dialog, Button, Card} from "m3-svelte";
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<h2>Hi, I'm <u on:click={() => open = !open} class="name">Anchietae</u>, a student and self-taught dev.</h2>
<p>I mostly do stuff in javascript...</p>
<Card variant="filled">
    <h3>Some projects:</h3>
    <ul>
        <li><a href="https://github.com/qwit-development/domain">Domain</a> - Gemini Powered Discord Chatbot</li>
    </ul>
</Card>

<Dialog headline="Pronunciation" bind:open>
    /æn.ʃiˈe.tiː/
    {#snippet buttons()}
        <Button variant="tonal" click={() => (open = false)}>Close</Button>
    {/snippet}
</Dialog>

<style>
    .name {
        color: rgb(var(--m3-scheme-primary));
        cursor: pointer;
        font-weight: bolder;
        text-decoration: wavy underline;
    }
</style>