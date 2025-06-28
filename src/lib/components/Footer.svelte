<script>
    import {Button, Icon} from 'm3-svelte';
    import mail from "@ktibow/iconset-material-symbols/mail-outline";
    import coffee from "@ktibow/iconset-material-symbols/coffee-outline";
    import graph_1 from "@ktibow/iconset-material-symbols/graph-1";
</script>

<footer>
    <div>
        <svg aria-hidden="true" width="100%" height="8" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <pattern id="a" width="91" height="8" patternUnits="userSpaceOnUse">
                <g clip-path="url(#clip0_2426_11367)">
                    <path
                            d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                            stroke="#574343" stroke-linecap="square"></path>
                </g>
            </pattern>
            <rect width="100%" height="100%" fill="url(#a)"></rect>
        </svg>
    </div>
    <div class="footer">
        <Button variant="outlined" iconType="full" href="mailto:contact@anchietae.cc"><Icon icon={mail}></Icon></Button>
        <Button variant="outlined" iconType="full" href="https://github.com/anchietae"><Icon icon={graph_1}></Icon></Button>
        <Button variant="outlined" iconType="full" href="https://ko-fi.com/anchietae"><Icon icon={coffee}></Icon></Button>
    </div>
</footer>


<style>
    footer {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .footer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>