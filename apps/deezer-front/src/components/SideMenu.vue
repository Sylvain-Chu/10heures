
<script>
	export default {
		name: 'SideMenu',
	};
</script>

<template>
	<RouterLink to='/'>
<!--		<img src='public/img/deezer_logo_white.png' alt='logo deezer'>-->
		<img src='https://cdn.discordapp.com/attachments/1089603087288778762/1089606350562144447/10h.png' alt='logo deezer'>
	</RouterLink>

	<ul>
		<RouterLink to='/'>
			<li :class="{ active: $route.path === '/' }">
				Musique
			</li>
		</RouterLink>
		<RouterLink to='/podcasts'>
			<li :class="{ active: $route.path === '/artists' }">
				Podcasts
			</li>
		</RouterLink>
		<RouterLink to='/radio'>
			<li :class="{ active: $route.path === '/albums' }">
				Radio
			</li>
		</RouterLink>
		<RouterLink to='/explore'>
			<li :class="{ active: $route.path === '/playlists' }">
				Explore
			</li>
		</RouterLink>
	</ul>
</template>


<style lang='scss' scoped>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		padding: 1rem;
	//border-bottom: 1px solid var(--deezer-light-grey);
		color: var(--deezer-dark-grey);
	}

	a li {
		color: white;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
	}

	a:hover li {
		color: var(--deezer-red);
	}

	li.active {
		border-left: 2px solid var(--deezer-red);
	}

	a li.active {
		color: var(--deezer-red);
	}

	footer {
		background-color: hsl(240, 11%, 15%);
		border-top: 1px solid var(--light-grey);
		grid-area: footer;
	}
</style>