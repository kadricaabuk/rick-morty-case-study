
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Header from "./_components/header";
import Characters from "./_components/characters";
import { getCharacters } from "@/lib/utils";
import Filters from "./_components/filters";

export default async function Page() {
    
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['characters'],
      queryFn: () => getCharacters(),
    })

    return (
        <>
            <Header />
            <main className="p-4 flex flex-col items-center">
                <Filters />
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <Characters />
                </HydrationBoundary>
            </main>
        </>
    )
}