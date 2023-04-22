<script lang="js" setup>
	export default {
		name: 'SideMenu',
	};

	window.addEventListener('DOMContentLoaded', () => {
		let svgElement = document.getElementsByClassName('svg-icon');

		for (let i = 0; i < svgElement.length; i++) {
			let path = svgElement[i].getElementsByTagName('path');

			svgElement[i].addEventListener('mouseover', () => {
				path.item(0).setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z');
			});
		}
	});
</script>

<template>
	<div class="sidebar-header-logo">
		<RouterLink to="/" class="logo">
			<img
				src="https://cdn.discordapp.com/attachments/1089603087288778762/1089606350562144447/10h.png"
				alt="logo deezer"
				id="logoDeezer"
			/>
		</RouterLink>
	</div>

	<div class="content">
		<ul>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/' }">
				<RouterLink to="/" class="is-main">
					<svg
						class="svg-icon1"
						focusable="false"
						height="24"
						role="img"
						width="24"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							d="M9 7.834V4.858l11-1.692v2.976L9 7.834zm11-.68L9 8.846V19c0 1.657-1.567 3-3.5 3S2 20.657 2 19s1.567-3 3.5-3c.98 0 1.865.345 2.5.9V4l12-1.846L21 2v15c0 1.657-1.567 3-3.5 3S14 18.657 14 17s1.567-3 3.5-3c.98 0 1.865.345 2.5.9V7.154zM17.5 15c1.53 0 2.5 1.035 2.5 2 0 .965-.97 2-2.5 2S15 17.965 15 17c0-.965.97-2 2.5-2zM8 19c0-.965-.97-2-2.5-2S3 18.035 3 19c0 .965.97 2 2.5 2S8 19.965 8 19z"
						></path>
					</svg>
					<span class="sidebar-nav-label">Music</span>
				</RouterLink>
			</li>

			<li class="sidebar-nav-item" :class="{ active: $route.path === '/podcasts' }">
				<RouterLink to="/podcasts" class="is-main">
					<svg
						class="svg-icon"
						focusable="false"
						height="24"
						role="img"
						width="24"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							d="M16 6a4 4 0 1 0-8 0h2.5a.5.5 0 0 1 0 1H8v1h2.5a.5.5 0 0 1 0 1H8v1h2.5a.5.5 0 0 1 0 1H8v1a4 4 0 0 0 8 0V6zm-4-5a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V6a5 5 0 0 0-5-5zM5 12H4a8 8 0 0 0 7.5 7.985V22H9v1h6v-1h-2.5v-2.015A8 8 0 0 0 20 12h-1a7 7 0 1 1-14 0z"
						></path>
					</svg>
					<span class="sidebar-nav-label">Podcasts</span>
				</RouterLink>
			</li>

			<li class="sidebar-nav-item" :class="{ active: $route.path === '/radio' }">
				<RouterLink to="/radio" class="is-main">
					<svg
						class="svg-icon"
						focusable="false"
						height="24"
						role="img"
						width="24"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							d="M10 3 4.75 6H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 .52-.878l6.984-3.99L10 3zM3 19V7h18v12H3zm16-8h-4v1h4v-1zm-4 3h4v1h-4v-1zm-3-1a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
						></path>
					</svg>
					<span class="sidebar-nav-label">Radio</span>
				</RouterLink>
			</li>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/explore' }">
				<RouterLink to="/explore" class="is-main">
					<svg
						class="svg-icon"
						focusable="false"
						height="24"
						role="img"
						width="24"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							d="M4 6h6.1v4H4V6zM3 6a1 1 0 0 1 1-1h6.1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6zm10.9 0H20v4h-6.1V6zm-1 0a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6.1a1 1 0 0 1-1-1V6zm-2.8 8H4v4h6.1v-4zM4 13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6.1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4zm9.9 1H20v4h-6.1v-4zm-1 0a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6.1a1 1 0 0 1-1-1v-4z"
						></path>
					</svg>
					<span class="sidebar-nav-label">Explore</span>
				</RouterLink>
			</li>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/favourites' }">
				<RouterLink to="/favourites" class="is-main">
					<svg
						class="svg-icon"
						focusable="false"
						height="24"
						role="img"
						width="24"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							d="m12 7.463-.764-.905c-1.497-1.773-2.903-2.437-4.028-2.53-1.117-.092-2.127.363-2.893 1.18-1.573 1.676-1.948 4.666.066 6.761a301.42 301.42 0 0 0 5.974 6.047c.692.68 1.249 1.22 1.645 1.601.396-.381.953-.921 1.645-1.6a301.444 301.444 0 0 0 5.97-6.044 4.963 4.963 0 0 0 .072-6.8c-.763-.809-1.771-1.258-2.89-1.16-1.127.1-2.535.77-4.033 2.545L12 7.463zM12 21s-3.475-3.276-8.34-8.338C-1.034 7.778 5.087-1.08 11.32 5.17c.226.227.453.474.68.743a12.9 12.9 0 0 1 .68-.744c6.233-6.256 12.354 2.513 7.66 7.493C15.475 17.724 12 21 12 21z"
						></path>
					</svg>
					<span class="sidebar-nav-label">Favourites</span>
				</RouterLink>
			</li>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/profile/loved' }">
				<RouterLink to="/profile/loved" class="is-second">
					<span class="sidebar-nav-label">Favourite tracks</span>
				</RouterLink>
			</li>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/profile/playlists' }">
				<RouterLink to="/profile/playlists" class="is-second">
					<span class="sidebar-nav-label">Playlists</span>
				</RouterLink>
			</li>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/profile/albums' }">
				<RouterLink to="/profile/albums" class="is-second">
					<span class="sidebar-nav-label">Albums</span>
				</RouterLink>
			</li>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/profile/artists' }">
				<RouterLink to="/profile/artists" class="is-second">
					<span class="sidebar-nav-label">Artists</span>
				</RouterLink>
			</li>
			<li class="sidebar-nav-item" :class="{ active: $route.path === '/profile/podcasts' }">
				<RouterLink to="/profile/podcasts" class="is-second">
					<span class="sidebar-nav-label">Podcasts</span>
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	.sidebar-header-logo {
		display: flex;
		align-items: center;
		height: 56px;
		justify-content: start;
		margin: 0 24px;
		padding-bottom: 6px;
	}

	.logo {
		outline: 0 none;
		margin-top: 7px;
	}

	.is-main {
		color: #ffffff;
		font-size: 18px;
		font-weight: 700;
		height: 32px;
		margin-bottom: 16px;
	}

	.is-second {
		color: #a2a2ad;
		padding: 0 12px 0 48px;
		font-size: 12px;
	}

	a:hover svg,
	a:hover {
		color: var(--deezer-red);
		fill: var(--deezer-red);
	}

	.logo img {
		fill: none;
		height: 60px;
	}

	ul {
		margin: 32px 0 10px;
		padding-left: 0px;
	}

	li {
		border-left: 4px solid hsl(240, 14%, 11%);
	}

	li a {
		display: flex;
		margin-bottom: 16px;
		padding-left: 20px;
	}

	.sidebar-nav-item svg {
		fill: white;
		stroke: currentColor;
		stroke-width: 0;
		vertical-align: top;
		margin-right: 12px;
	}

	li.active {
		border-left: 4px solid hsl(355, 65%, 62%);
	}

	li.active a {
		color: var(--deezer-red);
	}

	li.active svg {
		fill: var(--deezer-red);
	}
</style>
