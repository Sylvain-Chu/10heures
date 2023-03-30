
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
	<table>
		<RouterLink to='/'>
			<tr :class="{ active: $route.path === '/' }">
				<div class="trDiv">
					<td><i class="fas fa-music fa-lg"></i></td>
					<td><p>Musique</p></td>
				</div>
			</tr>
		</RouterLink>
		<RouterLink to='/podcasts'>
			<tr :class="{ active: $route.path === '/artists' }">
				<div>
					<td><i class="fa-solid fa-microphone-lines fa-lg"></i></td>
					<td><p>Podcasts</p></td>
				</div>
			</tr>
		</RouterLink>
		<RouterLink to='/radio'>
			<tr :class="{ active: $route.path === '/albums' }">
				<div>
					<td><i class="fa-solid fa-radio fa-lg"></i></td>
					<td><p>radio</p></td>
				</div>
			</tr>
		</RouterLink>
		<RouterLink to='/explore'>
			<tr :class="{ active: $route.path === '/playlists' }">
				<div>
					<td></td>
					<td><p>Explore</p></td>
				</div>
			</tr>
		</RouterLink>
	</table>
</template>



<style lang='scss' scoped>
	table {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	tr {
		color: var(--deezer-dark-grey);
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-left: 2px solid #181820;
		margin-bottom: 15px;
	}
	table tr td:first-child {
		width: 5vh;
		padding-left: 20px;
	}

	a tr {
		color: white;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
	}

	a:hover tr {
		color: var(--deezer-red);
	}

	tr.active {
		border-left: 3px solid var(--deezer-red);
	}

	a tr.active {
		color: var(--deezer-red);
	}

	i {
		margin-right: 12px;
	}
	 

	footer {
		background-color: hsl(240, 11%, 15%);
		border-top: 1px solid var(--light-grey);
		grid-area: footer;
	}
</style>