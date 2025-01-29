<script lang="ts" context="module">
	import { postsMetadata } from '$lib/data/postMetadata';
	import Post from '$lib/components/organisms/Post.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import Callout from '$lib/components/molecules/Callout.svelte';
	import CodeBlock from '$lib/components/molecules/CodeBlock.svelte';
	import Toc from '$lib/components/atoms/Toc.svelte';
    import PrevNextPost from '$lib/components/singletons/PrevNextPost.svelte';
    import PagesWrapper from '$lib/components/atoms/PagesWrapper.svelte';

	const folderName = import.meta.url.split('/').slice(-2, -1)[0];
	const meta = postsMetadata[folderName];
    console.log(postsMetadata)
</script>

<Post
	title={meta.title}
	slug={meta.slug}
	coverImage={meta.coverImage}
	date={meta.date}
	tags={meta.tags}
	excerpt={meta.excerpt}
	contributor={meta.contributor}
	contributorSlug={meta.contributorSlug}
>
<PagesWrapper heading='Table of Contents'>
	<div class="wrapper">
		<Toc class="toc" />
		<div id="toc-contents" class="content-preview">
            <h2>Hello, Torrent Enthusiasts!</h2>
			<p>
				We're thrilled to announce the beta demo of Bittorrent Torrust Index v3.0.0 is now live! This is a significant milestone for us, and we're eager to share what we've been working on with our vibrant community.
			</p>

            <Callout type="info">Live demo: <a href="http://index.torrust-demo.com">http://index.torrust-demo.com</a></Callout>

            <h2>Experience the Beta Demo Today</h2>
			<p>
				Our beta demo is your sneak peek into the future of torrent indexing. We invite you to dive in, explore its features, and experience the enhancements firsthand. Remember, this is a beta version, so you're getting an early glimpse before the final release!
			</p>

            <p>You can test it at: <a href="http://index.torrust-demo.com">http://index.torrust-demo.com</a></p>

            <h2>Your Feedback Makes Us Better</h2>
			<p>
				We believe in the power of community-driven development. That's why we're calling on you, our users, to actively participate in testing the beta.
			</p>

            <p>Encountered a bug? Noticed something off? We want to hear about it. Please contribute by opening issues on our GitHub repository. Your insights are invaluable in refining and perfecting the platform.</p>

			<h2>Join the Conversation</h2>

			<p>Got ideas? Suggestions for improvement? Join the <a href="https://github.com/torrust/torrust-index-gui/discussions">discussion</a> on our GitHub repo's discussion section. Your thoughts and proposals are a key part of our collaborative development process. Let's brainstorm together to make Torrust even better.</p>

            <h2>Important Notice: Demo Availability</h2>

            <Callout type='info'>
                Please be aware that the demo is subject to downtime or resets. As a beta version, it's part of our testing process. Any data you add may be lost during these periods. We appreciate your understanding and patience as we fine-tune the platform.
            </Callout>

            <h2>A Heartfelt Thank You to Our Contributors</h2>
            <p>This release wouldn't have been possible without the dedication and hard work of our contributors. A big shout-out to everyone who has contributed their time, skills, and passion to this release. Your contributions are the backbone of this project, and we're immensely grateful for your support.</p>

            <h2>Join Us in This Exciting Journey</h2>
            <p>We're just getting started, and there's much more to come. Stay tuned for more updates, and thank you for being a part of this journey. We very welcome any contributions to the projects.</p>
		</div>
	</div>
</PagesWrapper>
</Post>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: relative;
	}

	.content-preview {
		flex: 1;
		word-break: keep-all;
		padding-top: 2rem;
	}

	h2 {
		font-size: 1.8rem;
		font-weight: bold;
	}

	h2:not(:first-of-type) {
		padding-top: 1.5rem;
	}

	h3 {
		font-size: 1.3rem;
		font-weight: bold;
		padding-top: 1rem;
	}

	p {
		font-size: 1rem;
		padding-top: 1rem;
		color: rgba(245, 245, 245, 0.8);
		word-break: keep-all;
	}

	a {
		word-break: keep-all;
		color: rgba(255, 49, 0, 1);
	}

	ul {
		display: flex;
		flex-direction: column;
		list-style-type: disc;
		margin: 0;
		padding-left: 1.5rem;
		word-break: keep-all;
	}

	ul li {
		margin: 0.25rem 0;
		word-break: keep-all;
	}

	.content-preview > p,
	.content-preview > ul,
	.content-preview > h2,
	.content-preview > h3 {
		margin-bottom: 1rem;
	}

	h2:not(:first-of-type) {
		padding-top: 1.5rem;
	}

	img {
		border-radius: 24px;
	}

	@include bp.for-desktop-up {
		.wrapper {
			flex-direction: row;
			gap: 4rem;
		}

		.wrapper :global(.toc) {
			position: sticky;
			top: 4rem;
			height: min-content;
		}

		.content-preview {
			overflow-y: auto;
			padding-top: 0rem;
		}
	}
</style>
