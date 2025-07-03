<script>
    import { Card } from 'm3-svelte';
</script>

<h1>Public DNS service with adblocking and some other features...</h1>
<p>REMINDER! No DoH or DoT support.</p>

<Card variant="filled">
<h2>IPs:</h2>
<ul>
    <li>132.145.255.58 (2603:c020:8003:deff:dafe:5f56:d0f8:e0e6)</li>
    <li>129.159.30.109 (2603:c020:8003:deff:418c:4532:4d1e:390f)</li>
</ul>
<p>Order as you want, no recommended order.</p>
<p>You may order the IPv6 addresses the same way you ordered the IPv4 ones.</p>
</Card>

<p>Your requests are hidden. I only collect query counts from your IP. That's it.</p>
<p>The servers use DNSSEC. If your domain's DNSSEC is misconfigured, it might not resolve for clients.</p>

<h2>Upstream DNS:</h2>
<ul>
    <li><a href="https://developers.google.com/speed/public-dns/docs/using">Google DNS</a></li>
    <li><a href="https://one.one.one.one/">Cloudflare 1.1.1.1</a></li>
</ul>

<h2>Usage:</h2>
<ul>
    <li>For personal/small-scale use.</li>
    <li>Don't overload the servers. High volume automated queries can degrade service for others.</li>
    <li>No malicious activity.</li>
</ul>

<h2>Used blocklists:</h2>
<ul>
    <li><b>Some hand-picked domains</b></li>
    <li><a href="https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.txt">d3Host List by d3ward</a></li>
    <li><a href="https://someonewhocares.org/hosts/hosts">Dan Pollock's hosts</a></li>
    <li><a href="https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Hosts/GoodbyeAds.txt">GoodbyeAds</a></li>
    <li><a href="https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-Xiaomi-Extension.txt">GoodbyeAds-Xiaomi-AdBlock</a></li>
    <li><a href="https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-Samsung-AdBlock.txt">GoodbyeAds-Samsung-AdBlock</a></li>
    <li><a href="https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-Spotify-AdBlock.txt">GoodbyeAds-Spotify-AdBlock</a></li>
    <li><a href="https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-YouTube-AdBlock.txt">GoodbyeAds-YouTube-AdBlock</a></li>
    <li><a href="https://big.oisd.nl/">oisd big</a></li>
    <li><a href="https://adaway.org/hosts.txt">AdAway default blocklist</a></li>
    <li><a href="https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts">StevenBlack/hosts</a></li>
</ul>