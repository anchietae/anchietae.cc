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

<Card variant="outlined">
    <div class="header">
        <p><b>anchietae.cc</b></p>
        <p>{time}</p>
    </div>
</Card>

<style>
    .header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .header p {
        margin: 0;
    }
</style>
