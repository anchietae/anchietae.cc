<script lang="ts">
    import {Card} from "m3-svelte";
</script>

<h1>Terms of Service for "Domain Dave" Discord Bot</h1>
<p>Effective Date: June 15, 2025</p>

<p>
    This Terms of Service ("TOS") applies to the Discord bot instance known as "Domain Dave" (hereinafter "the Bot").
    The underlying software, "Domain-Unchained," is an open-source project. For terms related to self-hosting, please see Section 8.
</p>

<h2>1. Acceptance of Terms</h2>
<p>By interacting with the Bot, you agree to be bound by this TOS, as well as Discord's Terms of Service. If you do not agree with these terms, you must not use the Bot.</p>

<h2>2. Description of Service</h2>
<p>
    The Bot is a Discord application that uses various Artificial Intelligence models (via OpenAI-compatible completions API) to generate responses and interact with users based on context rather than specific invocation commands. The Bot operates in specific Discord channels.
    The Bot may observe a "sleeping range", during which its responsiveness might be altered and message history is cleared.
</p>

<h2>3. Data Collection and Usage</h2>
<Card variant="filled">
    <h3>3.1. Message and Interaction Data</h3>
    <p>To provide contextual responses, the Bot collects and processes data from interactions, including:</p>
    <ul>
        <li>
            Message history from channels it operates in, up to a maximum of 200 messages. This message history is temporarily stored for context but is deleted when the Bot enters its "sleeping" period. The message history may also be saved to disk solely for recovery purposes in case the host experiences technical issues. Separately, the Bot tracks and permanently stores a counter of the total number of messages sent by each user.
        </li>
        <li>
            Discord User information: Discord Username, User ID, and Display Name of users interacting in monitored channels.
        </li>
        <li>
            Content of messages: This includes all text and any embedded content such as images.
        </li>
        <li>
            The collected data is formatted (as per <a href="https://github.com/qwit-development/domain/blob/master/functions/makePrompt.js">functions/makePrompt.js</a> and
            <a href="https://github.com/qwit-development/domain/blob/master/initializers/historyCreator.js">initializers/historyCreator.js</a>) to provide context to the AI model.
        </li>
    </ul>
</Card>
<Card variant="elevated">
    <h3>3.2. Image Data</h3>
    <ul>
        <li>
            Images sent in monitored channels may be temporarily downloaded to a temporary storage directory (e.g., <code>data/running/tmp/</code> as handled in parts of
            <a href="https://github.com/qwit-development/domain/blob/master/eventHandlers/botCommands.js">eventHandlers/botCommands.js</a>).
        </li>
        <li>
            These images are subsequently converted to base64 format and sent to the AI model provider for processing (see <a href="https://github.com/qwit-development/domain/blob/master/eventHandlers/fileUploader.js">eventHandlers/fileUploader.js</a> which handles this).
        </li>
        <li>
            After processing, the temporarily stored image data is typically removed (e.g., via unlinking).
        </li>
    </ul>
</Card>
<Card variant="filled">
    <h3>3.3. Data Management</h3>
    <ul>
        <li>
            Message history and associated data for a channel can be cleared by authorized Bot administrators using commands like <code>/reset</code>, through the WebUI, or automatically when the Bot enters its sleeping period.
        </li>
        <li>
            User-specific data like messages and images are not directly accessed by Bot owners/administrators for general review, except where necessary for debugging, moderation, or if explicit logging is enabled. This excludes aggregated or derived data like reputation scores.
        </li>
        <li>
            The Bot will disregard messages that begin with <code>//</code> (as per <a href="https://github.com/qwit-development/domain/blob/master/functions/checkAuthors.js">functions/checkAuthors.js</a>).
        </li>
    </ul>
</Card>
<Card variant="elevated">
    <h3>3.4. Purpose of Data Collection</h3>
    <p>Data is collected and processed solely for the purpose of enabling the Bot to understand context, generate relevant responses, perform requested actions, and for the third-party AI provider (Google) to operate and improve its services as per their terms.</p>
</Card>

<h2>4. AI Model and Third-Party Services</h2>
<Card variant="filled">
    <h3>4.1. AI Processing</h3>
    <p>
        Response generation and data interpretation are performed by various AI models through OpenAI-compatible completions API endpoints. The specific model used may vary and is configured by the Bot administrators (utilized by
        <a href="https://github.com/qwit-development/domain/blob/master/initializers/geminiClient.js">initializers/geminiClient.js</a>).
    </p>
</Card>
<Card variant="elevated">
    <h3>4.2. Disclaimer of Accuracy</h3>
    <p>
        The Bot and its underlying AI model provide information and generate responses on an "as is" basis. The accuracy, completeness, or reliability of responses generated by the AI model is not guaranteed.
    </p>
</Card>
<Card variant="filled">
    <h3>4.3. Data Usage by AI Providers</h3>
    <p>
        You acknowledge that data processed by the Bot, including message content, is shared with the configured AI model provider to enable API functionality. The AI provider may use this data in accordance with their own terms and policies. Users should refer to the specific AI provider's terms of service for more information about data usage and privacy practices.
    </p>
</Card>

<h2>5. User Conduct and Responsibilities</h2>
<Card variant="elevated">
    <h3>5.1. Prohibited Activities</h3>
    <p>Users are expressly prohibited from engaging in the following activities:</p>
    <ul>
        <li>
            Attempting to circumvent, "jailbreak", or bypass the Bot's operational restrictions, filters, or persona instructions (as outlined in prompt files and checked by
            <a href="https://github.com/qwit-development/domain/blob/master/functions/checkAuthors.js">functions/checkAuthors.js</a>).
        </li>
        <li>
            Transmitting illegal, harmful, or NSFW (Not Safe For Work) materials to or through the Bot.
        </li>
        <li>
            Utilizing the Bot to scrape, or attempt to scrape, IP lookup services, IP grabber websites, or to discover the host IP address of the Bot or related services.
        </li>
        <li>
            Manipulating the Bot into an endless loop of responses or actions that impede its use by others, potentially requiring a reset of the Bot's memory.
        </li>
        <li>
            Attempting to impersonate or reconfigure the Bot's designated function or persona (e.g., simulating a bash terminal, or making it deviate from its instructed persona as defined in its prompt files).
        </li>
        <li>
            Attempting to extract, discover, or reverse engineer the Bot's system instructions, system prompts, or configuration details through interaction or any other means.
        </li>
        <li>
            Attempting to manipulate the Bot's formatted prompt or operational context by injecting unauthorized data or instructions.
        </li>
        <li>
            Intentionally attempting to crash the Bot, exploit vulnerabilities, or otherwise render it unusable for other users.
        </li>
        <li>
            Abusing or manipulating the reputation system (see Section 7.2), including attempts to artificially inflate one's own reputation or unfairly lower the reputation of others.
        </li>
    </ul>
</Card>
<Card variant="filled">
    <h3>5.2. Compliance with Discord ToS</h3>
    <p>All interactions with the Bot must also comply with Discord's Terms of Service and Community Guidelines.</p>
</Card>

<h2>6. Moderation and Enforcement</h2>
<Card variant="elevated">
    <h3>6.1. Muting</h3>
    <ul>
        <li>The Bot or its administrators may temporarily mute users from interacting with the Bot or within a server.</li>
        <li>
            Muting can be initiated for violations of this TOS, attempts to jailbreak the Bot (which may result in an automatic timeout as per
            <a href="https://github.com/qwit-development/domain/blob/master/functions/checkAuthors.js">functions/checkAuthors.js</a>), or other disruptive behavior as determined by Bot administrators.
        </li>
        <li>
            The duration and specific triggers for mutes (beyond automated detections) are at the discretion of the Bot administrators or as defined in server-specific rules. Bot-initiated mutes via commands are handled by
            <a href="https://github.com/qwit-development/domain/blob/master/eventHandlers/botCommands.js">eventHandlers/botCommands.js</a>) and may use specific emojis.
        </li>
    </ul>
</Card>
<Card variant="filled">
    <h3>6.2. User Banning</h3>
    <ul>
        <li>
            Users found to be in severe violation of this TOS or engaging in malicious activities may be added to a ban list, preventing their use of this Bot instance (managed via a database, see
            <a href="https://github.com/qwit-development/domain/blob/master/commands/amIBanned.js">commands/amIBanned.js</a>).
        </li>
        <li>
            For the "Domain Dave" instance, decisions regarding additions to the ban list are typically final and may not be subject to appeal.
        </li>
        <li>
            Attempting to bypass a ban by using alternate accounts ("alting") will result in those alternate accounts also being banned.
        </li>
    </ul>
</Card>

<h2>7. Features and Functionality</h2>
<Card variant="elevated">
    <h3>7.1. Internet Searching</h3>
    <ul>
        <li>
            The Bot may be configured to perform internet searches using a SearXNG instance, as handled by <a
                href="https://github.com/qwit-development/domain/blob/master/eventHandlers/searchHandler.js">eventHandlers/searchHandler.js</a> and
            <a href="https://github.com/qwit-development/domain/blob/master/utils/searx.js">utils/searx.js</a>, to acquire supplementary context. This may be indicated by a search emoji.
        </li>
        <li>
            This functionality typically fetches a number of top search results.
        </li>
        <li>
            The search process implements filtering based on a banned domain list, which includes remote lists, to avoid fetching content from undesirable sources, including potentially NSFW content.
        </li>
    </ul>
</Card>
<Card variant="filled">
    <h3>7.2. User Reputation System</h3>
    <p>
        The Bot features a reputation system (see <a href="https://github.com/qwit-development/domain/blob/master/commands/reputation.js">commands/reputation.js</a> and
        <a href="https://github.com/qwit-development/domain/blob/master/functions/usageRep.js">functions/usageRep.js</a>) where users are assigned a score. This score can influence the Bot's responsiveness and helpfulness, potentially tiered as implied in persona prompts. Reputation scores are associated with a user's Discord ID and stored by the Bot instance. Users can view their position on the leaderboard at: <a href="https://dave.anchietae.cc/leaderboard">https://dave.anchietae.cc/leaderboard</a>. Upvote/downvote emojis may be used in relation to this system.
    </p>
    <p>
        Users of the "Domain Dave" instance may request the removal of their User ID and associated reputation score from the database by contacting <a href="mailto:contact@anchietae.cc">contact@anchietae.cc</a>. Providing your Discord User ID will expedite this process.
    </p>
</Card>
<Card variant="elevated">
    <h3>7.3. Other Indicators</h3>
    <p>The Bot may use specific emojis for feedback, such as indicating an upload is in progress or completed.</p>
</Card>

<h2>8. Self-Hosting and Open Source</h2>
<Card variant="filled">
    <h3>8.1. Availability and License</h3>
    <p>
        The underlying software for the Bot, "Domain-Unchained," is open-source and licensed under the GNU Affero General Public License v3.0 or later (AGPLv3+), as detailed in
        <a href="https://github.com/qwit-development/domain/blob/master/LICENSE.md">LICENSE.md</a> and <a href="https://github.com/qwit-development/domain/blob/master/readme.md">readme.md</a>. Users have the right to download, modify, and run their own instances of the software.
    </p>
</Card>
<Card variant="elevated">
    <h3>8.2. Self-Hoster Responsibilities</h3>
    <p>If you choose to self-host an instance of "Domain-Unchained":</p>
    <ul>
        <li>
            You are solely responsible for your instance's configuration (including settings for Discord tokens, AI API keys, active channels, prompt paths, WebUI ports, etc., as outlined in
            <a href="https://github.com/qwit-development/domain/blob/master/readme.md">readme.md</a>), data management, security, and maintenance.
        </li>
        <li>
            You are responsible for ensuring your use of third-party services (like Discord and your chosen AI provider) complies with their respective terms of service.
        </li>
        <li>
            You are responsible for any data collected by your instance and must comply with all applicable data privacy laws and regulations.
        </li>
        <li>
            You may need to create or adapt a Terms of Service and Privacy Policy appropriate for your users and your instance's configuration.
        </li>
    </ul>
</Card>
<Card variant="filled">
    <h3>8.3. Applicability of These Terms</h3>
    <p>
        This TOS specifically governs the "Domain Dave" instance. While it may serve as a template, self-hosters are responsible for establishing their own terms for their instances. The owners of "Domain Dave" are not responsible for any self-hosted instances.
    </p>
</Card>

<h2>9. Disclaimer of Warranties</h2>
<p>THE BOT IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THE BOT OWNERS DO NOT WARRANT THAT THE BOT WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR THAT DEFECTS WILL BE CORRECTED.</p>

<h2>10. Limitation of Liability</h2>
<p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE BOT OWNERS OR DEVELOPERS (INCLUDING THOSE MENTIONED IN
    <a href="https://github.com/qwit-development/domain/blob/master/package.json">package.json</a> OR COPYRIGHT NOTICES) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE BOT; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE BOT; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</p>

<h2>11. Modifications to Terms</h2>
<p>These terms may be modified at any time without prior notice. Changes will be effective immediately upon posting the revised TOS. Your continued use of the Bot after such changes constitutes your acceptance of the new terms. It is your responsibility to review this TOS periodically for updates.</p>

<h2>12. Contact Information</h2>
<p>For questions regarding this TOS for the "Domain Dave" instance, or for data removal requests as specified in Section 7.2, please contact: <a href="mailto:contact@anchietae.cc">contact@anchietae.cc</a>.</p>
