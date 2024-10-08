import { useRouter } from 'vue-router';

export function useSwipe() {
    const router = useRouter();

    function nextView(): void {
        router.push('/next-view');
    }

    function previousView(): void {
        router.push('/previous-view');
    }

    return { nextView, previousView };
}
