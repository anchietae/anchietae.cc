<script lang="ts">
    import { Card } from "m3-svelte";
    import { onMount } from "svelte";

    let time = "";
    const pad = (n: any) => n.toString().padStart(2, "0");
    function updateTime() {
        const d = new Date();
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        time = `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${pad(d.getHours())}:${pad(d.getMinutes())}/${pad(d.getSeconds())}`;
    }
    onMount(() => {
        updateTime();
        const timeUpdateInterval = setInterval(updateTime, 500);

        return () => {
            clearInterval(timeUpdateInterval);
        };
    });
</script>

<div class="header">
    <p><b>anchietae.cc</b></p>
    <p>{time}</p>
</div>
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

<style>
    .header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    p {
        margin: 0;
    }
</style>
