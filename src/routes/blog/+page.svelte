<script>
    import { Card } from "m3-svelte";
    export let data;

    let currentPage = 1;
    const pageSize = 20;
    $: totalPages = Math.ceil(data.posts.length / pageSize);
    $: paginatedPosts = data.posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
</script>

<h1>Blog</h1>

{#if data.posts.length === 0}
    <p>No posts available at the moment.</p>
{:else}
    <div class="posts">
        {#each paginatedPosts as post, i}
            {#if i % 2 === 0}
                <a href={`/blog/${post.slug}`}>
                    <Card variant="filled">
                        <p>{post.title}</p>
                        <p>{new Date(post.date).toLocaleDateString()}</p>
                    </Card>
                </a>
            {:else}
                <a href={`/blog/${post.slug}`}>
                    <Card variant="elevated">
                        <p>{post.title}</p>
                        <p>{new Date(post.date).toLocaleDateString()}</p>
                    </Card>
                </a>
            {/if}
        {/each}
    </div>

    <div class="pagination">
        {#if currentPage > 1}
            <button on:click={() => currentPage--}>Previous</button>
        {/if}
        <span>Page {currentPage}/{totalPages}</span>
        {#if currentPage < totalPages}
            <button on:click={() => currentPage++}>Next</button>
        {/if}
    </div>
{/if}

<style>
    .posts {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    p {
        margin: 0;
    }
    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
    }

    button {
        background: none;
        border: 1px solid;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
</style>
