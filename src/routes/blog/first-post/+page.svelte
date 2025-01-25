<script lang="ts" context="module">
	import {postsMetadata} from '$lib/data/postMetadata'

	import Post from "../Post.svelte";

	const folderName = import.meta.url.split('/').slice(-2, -1)[0];
	const meta = postsMetadata[folderName]
</script>

<Post title={meta.title} date={new Date(meta.date)}>
	<img src={meta.image} alt="">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Labore recusandae odio amet ab impedit enim! Molestias
		praesentium totam cupiditate blanditiis! Veniam modi unde iste
		quo amet excepturi. Labore mollitia, doloremque animi
		excepturi natus aperiam in voluptatibus eius ipsum placeat
		ratione.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Voluptatibus error dignissimos ipsa facere cum sit ipsum et
		iure facilis sunt?
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Possimus voluptatibus, at sequi, eius obcaecati nesciunt autem
		aliquam deserunt explicabo ex expedita cum necessitatibus
		totam sit error ullam. Ipsum delectus eaque tempora maiores
		consequuntur voluptate ut nisi qui, eligendi saepe voluptatum
		deserunt, vel non aperiam, numquam id. Illo, atque? Earum,
		laborum!
	</p>
</Post>

<style>
	img{
		height: 150px;
	}
</style>