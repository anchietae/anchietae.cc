<script>
    import { Card } from "m3-svelte";
    export let data;
</script>

<h1>Blog</h1>

{#if data.posts.length === 0}
    <p>No posts available at the moment.</p>
{:else}
    <div class="posts">
        {#each data.posts as post, i}
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
        {#if data.page > 1}
            <a href={`/blog?page=${data.page - 1}`}>Previous</a>
        {/if}
        <span>Page {data.page}/{data.totalPages}</span>
        {#if data.page < data.totalPages}
            <a href={`/blog?page=${data.page + 1}`}>Next</a>
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
</style>
