<script lang="ts">
	import { page } from '$app/stores';
	import AnimatedHamburger from '$lib/components/singletons/AnimatedHamburger.svelte';
	import Header from '$lib/icons/header.svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let currentPath = $derived($page.url.pathname);
</script>

<header>
	<div class="header-wrapper">
		<a class="logo" href="/" aria-label="Site logo">
			<Header />
		</a>
		<AnimatedHamburger {isMenuOpen} {toggleMenu}>
			<div class="links-wrapper">
				<ul class="links">
					<!-- Menu items -->
					<li>
						<a href="/" class={currentPath === '/' ? 'active' : ''} onclick={toggleMenu}>Home</a>
					</li>
					<li>
						<a
							href="/torrent-index"
							class={currentPath === '/torrent-index' ? 'active' : ''}
							onclick={toggleMenu}>Index</a
						>
					</li>
					<li>
						<a
							href="/torrent-tracker"
							class={currentPath === '/torrent-tracker' ? 'active' : ''}
							onclick={toggleMenu}>Tracker</a
						>
					</li>
					<li>
						<a
							href="/self-host"
							class={currentPath === '/self-host' ? 'active' : ''}
							onclick={toggleMenu}>Self&#8209;host</a
						>
					</li>
					<li>
						<a
							href="/community"
							class={currentPath === '/community' ? 'active' : ''}
							onclick={toggleMenu}>Community</a
						>
					</li>
					<li>
						<a href="/blog" class={currentPath === '/blog' ? 'active' : ''} onclick={toggleMenu}
							>Blog</a
						>
					</li>
					<li>
						<a href="/about" class={currentPath === '/about' ? 'active' : ''} onclick={toggleMenu}
							>About</a
						>
					</li>
				</ul>
			</div>
		</AnimatedHamburger>
	</div>
</header>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	header {
		position: relative;
		z-index: 1000;
		background-color: rgba(255, 49, 0, 1);
		width: 100%;
		padding-inline: 1.5rem;

		.header-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			margin: 0 auto;
			padding-top: 0.25rem;

			@include bp.for-phone-only {
				height: 64px;
			}
		}

		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: end;
			gap: 16px;
			margin-bottom: 1vh;
			list-style: none;
			font-size: 1.1rem;
		}

		li > a {
			display: inline-block;
			transition: all 200ms ease-in-out;
			color: rgba(245, 245, 245, 0.8);
			font-size: 1rem;
		}

		li > a:hover {
			color: white;
		}

		.active {
			position: relative;
			color: white;
		}

		.active::after {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: -16px;
			height: 4px;
			background-color: white;
		}

		@include bp.for-phone-only {
			.links-wrapper {
				padding: 3rem;
				margin: 3.5rem 0rem;
				opacity: 1;
			}

			ul {
				flex-direction: column;
				gap: 2vw;
			}

			.active::after {
				bottom: -2px;
				height: 1px;
			}
		}

		.links-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: justify;
			gap: 30px;
			background-color: rgba(255, 49, 0, 1);

			a {
				text-decoration: none;
				text-align: center;

				&:hover {
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}
	}
</style>
