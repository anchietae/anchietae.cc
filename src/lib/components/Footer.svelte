<script lang="ts">
    import FooterPopout from "./FooterPopout.svelte";
    import { Button, Icon } from "m3-svelte";
    import mail from "@ktibow/iconset-material-symbols/mail-outline";
    import coffee from "@ktibow/iconset-material-symbols/coffee-outline";
    import graph_1 from "@ktibow/iconset-material-symbols/graph-1";
    import eyeglasses_2 from "@ktibow/iconset-material-symbols/eyeglasses-2";

    let isIncognito = false;
    let open = false;

    import { detectIncognito } from "detectincognitojs";

    detectIncognito().then((result) => {
        isIncognito = result.isPrivate;
    });
</script>

<footer>
    <div>
        <svg
            aria-hidden="true"
            width="100%"
            height="8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <pattern id="a" width="91" height="8" patternUnits="userSpaceOnUse">
                <g clip-path="url(#clip0_2426_11367)">
                    <path
                        d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                        stroke="#574343"
                        stroke-linecap="square"
                    ></path>
                </g>
            </pattern>
            <rect width="100%" height="100%" fill="url(#a)"></rect>
        </svg>
    </div>
    <div class="footer">
        <Button
            variant="outlined"
            iconType="full"
            href="mailto:contact@anchietae.cc"><Icon icon={mail}></Icon></Button
        >
        <Button
            variant="outlined"
            iconType="full"
            href="https://github.com/anchietae"
            ><Icon icon={graph_1}></Icon></Button
        >
        <Button
            variant="outlined"
            iconType="full"
            href="https://ko-fi.com/anchietae"
            ><Icon icon={coffee}></Icon></Button
        >
    </div>
    <div class="footer">
        {#if isIncognito}
            <Button variant="text" iconType="full" disabled={true} square={true}
                ><Icon icon={eyeglasses_2}></Icon></Button
            >
        {:else}
            <Button variant="text" square={true} click={() => (open = true)}
                ><span>{__GIT_HASH_SHORT__}</span></Button
            >
        {/if}
        <Button variant="text" disabled={true} square={true}>
            <img src="/banner.gif" alt="" draggable="false" />
        </Button>
    </div>
    <div class="footer">
        <Button
            variant="filled"
            href="https://www.abuseipdb.com/user/223280"
            square={true}
            title="AbuseIPDB Contributor"
        >
            <img
                src="https://www.abuseipdb.com/contributor/223280.svg"
                alt="AbuseIPDB Contributor Badge"
                style="width: 100px;"
                crossorigin="anonymous"
            />
        </Button>
    </div>
</footer>

<FooterPopout bind:open></FooterPopout>

<style>
    footer {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .footer {
        display: flex;
        text-align: center;
        margin-top: 8px;
        padding: 4px 0;
        justify-content: space-evenly;
        align-items: center;
    }

    .footer img {
        image-rendering: pixelated;
    }

    .footer span {
        color: rgb(var(--m3-scheme-on-surface-variant));
        opacity: 0.7;
    }
</style>
