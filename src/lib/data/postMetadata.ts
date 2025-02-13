export interface PostMetadata {
	title: string;
	slug: string;
	contributor: string;
	contributorSlug: string;
	date: string;
	coverImage: string;
	excerpt: string;
	tags: string[];
}

interface PageModule {
	_meta: PostMetadata;
}

export async function getAllPostsMetadata(): Promise<PostMetadata[]> {
	// This will match all +page.ts files in any subfolder of src/routes/blog
	const modules = import.meta.glob('/src/routes/blog/*/+page.ts');
	const metadataPromises: Promise<PostMetadata>[] = [];

	for (const path in modules) {
		// Cast the module promise to Promise<PageModule> so that TS knows about the structure.
		metadataPromises.push(
			(modules[path]() as Promise<PageModule>).then((page) => page._meta)
		);
	}

	return await Promise.all(metadataPromises);
}
