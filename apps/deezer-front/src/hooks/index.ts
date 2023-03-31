import { useQuery } from 'vue-query';

export function usePlaylists() {
	const { data: playlistsByDeezer, isLoading } = useQuery(
		'playlists',
		() => fetch('http://localhost:8000/playlists').then((r) => r.json()),
		{
			staleTime: 60 * 1000,
		}
	);

	return { playlistsByDeezer, isLoading };
}

export function usePlaylist(id: number) {
	const { data: playlist, isLoading } = useQuery(
		`playlist/${id}`,
		() => fetch(`http://localhost:8000/playlists/${id}`).then((r) => r.json()),
		{}
	);

	return { playlist, isLoading };
}

export function usePlaylistbyUser(id: number) {
	const { data: playlistsByUSer, isLoading } = useQuery(
		`user/${id}/playlists`,
		() => fetch(`http://localhost:8000/user/${id}/playlists`).then((r) => r.json()),
		{
			staleTime: 60 * 1000,
		}
	);

	return { playlistsByUSer, isLoading };
}

export function useArtist(id: number) {
	const { data: artist, isLoading } = useQuery(
		`artist/${id}`,
		() => fetch(`http://localhost:8000/artist/${id}`).then((r) => r.json()),
		{}
	);

	return { artist, isLoading };
}

export function useTopTrack(id: number) {
	const { data: tracks, isLoading } = useQuery(
		`artist/${id}/top`,
		() => fetch(`http://localhost:8000/artist/${id}/top`).then((r) => r.json()),
		{}
	);

	return { tracks, isLoading };
}

export function useLastAlbum(id: number) {
	const { data: album, isLoading } = useQuery(
		`/artist/${id}/last`,
		() => fetch(`http://localhost:8000/artist/${id}/last`).then((r) => r.json()),
		{}
	);

	return { album, isLoading };
}
