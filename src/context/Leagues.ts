import axios from "axios";


export async function fetchLeague() {
    const { data } = await axios.get(import.meta.env.BASE_URL + 'teams?league=140&season=2023', {headers: {'x-apisports-key': import.meta.env.API_KEY}});
    return (data);
}