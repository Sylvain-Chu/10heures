import { useQuery } from 'vue-query';

export function useFlow() {
	const { data: flow, isLoading } = useQuery(
		'flow',
		() => fetch('http://localhost:8000/flow').then((r) => r.json()),
		{
			staleTime: 60 * 1000,
		}
	);

	return { flow, isLoading };
}
