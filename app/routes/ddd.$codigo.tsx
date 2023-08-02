import { defer, type LoaderArgs } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { getCitiesByDDD } from "~/features/ddd/apit.server";
import CityInfo from "~/features/ddd/components/CityInfo";

export function loader({ params }: LoaderArgs) {
    const lazy = getCitiesByDDD(params.codigo ?? '17')
    return defer({ lazy })
}
export default function () {
    const data = useLoaderData<typeof loader>()
    return (
        <div>
            <Suspense fallback={<p>loading</p>}>
                <Await errorElement={<p>something went wrong</p>} resolve={data.lazy}>
                    {(lazy) => lazy.cities.map(city => <CityInfo key={city}>{city}</CityInfo>)}
                </Await>
            </Suspense>
        </div>
    );
}
