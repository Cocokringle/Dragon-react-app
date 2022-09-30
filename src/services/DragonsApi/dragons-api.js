const BASE_URL = 'https://api.spacexdata.com/v4'

function fetchDragons() {
    return fetch(`${BASE_URL}/dragons`).then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(new Error(`No dragons`));
     })
}

function fetchDragonById(dragonId) {
    return fetch(`${BASE_URL}/dragons/${dragonId}`).then(response => {
        if (response.ok) {
          return response.json();
        }
        
        return Promise.reject(new Error(`No dragon with ${dragonId}`));
    })
}

const api = {
    fetchDragons,
    fetchDragonById,
};
  
export default api;