import axios from "axios";

axios.defaults.baseURL = 'https://api.spacexdata.com/v4'

export async function fetchDragons() {
    const { data } = await axios.get(`/dragons`);
    return data;
}

export async function fetchDragonById(dragonId) {
    const { data } = await axios.get(`/dragons/${dragonId}`);
    return data;
}