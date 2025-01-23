<script lang="ts" context="module">
	import Post from "../Post.svelte";
	export let title = "Why Svelte is so fast";
	export let date = new Date("2023-06-03");
	export let image = 'https://images.unsplash.com/photo-1736267735571-b5a2e83afe3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
</script>

<Post {title} {date}>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
		consequatur illum ipsum facilis minima perspiciatis a nostrum
		impedit repudiandae rem ipsam repellendus iusto ducimus,
		maxime facere, tempore aperiam nisi fugiat!
	</p>
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit.
		Atque iure animi sequi culpa hic praesentium aspernatur illo
		maiores ipsam nemo!
	</p>
	<p>Lorem ipsum dolor sit amet.</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit.
		Iusto harum neque libero quaerat inventore quam fugit nemo
		quod eum excepturi, ipsum fugiat molestiae totam voluptatum
		porro, impedit esse dolor ullam tempore, sunt ex blanditiis!
		Quidem molestias culpa velit iure totam?
	</p>
</Post>
