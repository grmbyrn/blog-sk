<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "How pages work in SvelteKit";
	export let date = new Date("2023-02-04");
	export let image = 'https://images.unsplash.com/photo-1736771932149-26287a969645?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
</script>

<Post {title} {date}>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Beatae in placeat dolorem obcaecati explicabo repellat
		blanditiis?
	</p>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit.
		Consectetur nihil totam iste dicta a?
	</p>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit.
		Suscipit, dolorum saepe laudantium culpa laborum quidem earum
		iure veniam ipsum libero dolorem quasi, porro, quis numquam
		aspernatur architecto dicta nisi veritatis incidunt vitae
		minima! Ad est dolorum architecto, perspiciatis, cupiditate
		iure fuga ratione officia velit dolorem voluptate nobis
		molestiae omnis sint.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Debitis vitae consequatur aut rerum est sed distinctio unde
		voluptates fugit alias!
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		Nesciunt voluptates possimus voluptatem vitae quod quia in
		assumenda dignissimos labore corporis!
	</p>
</Post>
