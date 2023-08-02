type CitiesInfo = {
    state: string,
    cities: string[]
}
export async function getCitiesByDDD(ddd: string): Promise<CitiesInfo> {
    return await (await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)).json()
}