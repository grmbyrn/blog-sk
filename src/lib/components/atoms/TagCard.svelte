<script lang="ts">
    export let filteredPosts
    import { formatDate } from '$lib/utils/date';
</script>

<div class="posts">
    {#each filteredPosts as post}
        {#if post.tags}
            <a href={`/blog/${post.slug}`} class="post-card">
                {#if post.coverImage}
                    <div class="image-container">
                        <img src={post.coverImage} alt="Cover for {post.title}" />
                    </div>
                {/if}
                <div class="content">
                    <p class="title">{post.title}</p>
                    {#if post.date}
                        <div class="date">Published {formatDate(post.date)}</div>
                    {/if}
                    {#if post.excerpt}
                        <p class="excerpt">{post.excerpt}</p>
                    {/if}
                </div>
            </a>
        {/if}
    {/each}
</div>

<style lang="scss">
    @use '$lib/scss/breakpoints' as bp;

    .posts{
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 10px 0 0 10px;

    }
    
    .post-card {
        display: flex;
        flex-direction: column;
        background: #fff;
        overflow: hidden;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
        text-decoration: none;
        color: inherit;
        border-radius: 10px 10px 10px 10px;

    
        &:hover {
            transform: scale(1.02);
        }
    
        .image-container {
            flex: 1;
            width: 100%;
            height: 100%;
		    overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    
        .content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 20px;
            align-items: flex-start;
            word-break: keep-all;
    
            .title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                font-size: 1.2rem;
                font-weight: 700;
                color: black;
            }
    
            .date {
                font-size: 0.9rem;
                color: #666;
                margin-bottom: 0.5rem;
            }
    
            .excerpt {
                font-size: 1rem;
                color: #444;
            }
        }
    }
    
    @include bp.for-tablet-portrait-up {
        .post-card {
            flex-direction: row;

            .image-container {
                width: 50%;
            }

            .content {
                width: 50%;
                padding: 1.5rem;
            }
        }
    }
</style>
    