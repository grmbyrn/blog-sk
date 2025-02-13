import { getAllPostsMetadata } from '$lib/data/postMetadata';

export async function load() {
    // Await the asynchronous function so you get the actual metadata array.
    const allMetadata = await getAllPostsMetadata();
    return { allMetadata };
}
