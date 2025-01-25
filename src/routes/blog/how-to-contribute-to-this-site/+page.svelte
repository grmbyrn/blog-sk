<script lang="ts" context="module">
    import {postsMetadata} from '$lib/data/postMetadata'

    import Post from "../Post.svelte";

    const folderName = import.meta.url.split('/').slice(-2, -1)[0];
    const meta = postsMetadata[folderName]
</script>

<Post title={meta.title} date={new Date(meta.date)}>
    <img src={meta.image} alt="">

    <h1>Blog Posts Guide</h1>

    <p>All blog posts are located inside the <code>src/routes/(blog-article)</code> folder. Each folder inside it represents a blog post, and each folder has a <code>+page.md</code> file, which is the file that contains the post's content.</p>

    <p>This way, the URL for each blog post is generated with the folder's name. For example, the folder <code>src/routes/(blog-article)/how-blog-posts-work</code> will generate the URL <code>https://mysite.com/how-blog-posts-work</code>.</p>

    <p>All posts are Markdown files, which means you can use the <a href="https://www.markdownguide.org/basic-syntax">Markdown syntax</a> in them, and it will work out of the box. However, since this project uses <a href="https://mdsvex.pngwn.io/">MDsveX</a> to parse Markdown, you can also use Svelte components inside them! This means that the components used in other pages can also be used in blog posts.</p>

    <div class="callout info">
    <p>This is a Svelte component inside a Markdown file!</p>
    </div>

    <h2>Processing</h2>

    <p>Besides the blog post page itself, the blog posts can be displayed in other places, such as the <code>/blog</code> page, which lists all blog posts, and the <code>&lt;RecentPosts&gt;</code> component, used in the home page.</p>

    <p>To be able to do that, posts are processed in the <code>src/lib/data/blog-posts/index.ts</code> file. That file imports the blog post files and processes them, so we're able to use some of the post's metadata to list them. For example, we get the post's title, cover image, and calculate the reading time based on its content, so that information is displayed in the blog post cards in the <code>/blog</code> page.</p>

    <p>There is also some basic logic to get related posts based on a post's tags. The logic should be straightforward enough to modify it to your needs.</p>

    <h2>Creating a new post</h2>

    <p>To create a new post, create a new folder inside the <code>src/routes/(blog-article)</code> folder, and inside it, create a <code>+page.md</code> file. The folder name will be used as the post's URL slug, so make sure it's a valid URL slug.</p>

    <p>Inside the <code>+page.md</code> file, you must start with the front matter, which is a YAML-like syntax that is used to define metadata for the post. The front matter must be the first thing in the file, and must be separated from the rest of the content by three dashes (<code>---</code>). An example of a front matter is:</p>

    <pre><code class="language-markdown">
    ---
    slug: my-new-blog-post
    title: My New Blog Post
    date: 2023-04-22T20:45:25.350Z
    excerpt: A short description of the post
    coverImage: /images/posts/cover-image.jpg
    tags:
    - Example
    ---
    </code></pre>

    <h2>Managing blog posts</h2>

    <p>I highly recommend the <a href="https://frontmatter.codes/">Front Matter VS Code extension</a> to manage blog posts. It gives you a nice CMS-like UI to manage the front matter of all blog posts, as well as a preview of their content. It is, of course, optional, and you can manage everything directly in the Markdown files if you prefer.</p>

    <img src="/images/posts/frontmatter-preview-dashboard.png" alt="Screenshot of the Front Matter VS Code extension, showing the dashboard with all posts" style="width: 100%;">

    <img src="/images/posts/frontmatter-preview-edit.png" alt="Screenshot of the Front Matter VS Code extension, showing the post editing UI" style="width: 100%;">

    <h2>RSS</h2>

    <p>This template automatically generates a RSS feed of your blog posts. It is generated in the <code>src/routes/rss.xml/+server.ts</code> file, and it is available at the <code>/rss.xml</code> URL.</p>
</Post>

<style>
	img{
		height: 150px;
	}
</style>