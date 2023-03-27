import { useQuery } from 'vue-query';

export function usePlaylists() {
	const { data: playlists, isLoading } = useQuery(
		'playlists',
		() => fetch('http://localhost:8000/playlists').then((r) => r.json()),
		{
			staleTime: 60 * 1000,
		}
	);

	return { playlists, isLoading };
}

export function usePlaylist(id: number) {
	const { data: playlist, isLoading } = useQuery(
		`playlist/${id}`,
		() => fetch(`http://localhost:8000/playlists/${id}`).then((r) => r.json()),
		{
		}
	);

	return { playlist, isLoading };
}

export function usePlaylistbyUser(id: number) {
	const { data: playlists, isLoading } = useQuery(
		`user/${id}/playlists`,
		() => fetch(`http://localhost:8000/user/${id}/playlists`).then((r) => r.json()),
		{
			staleTime: 60 * 1000,

		}
	);

	return { playlists, isLoading };
}
