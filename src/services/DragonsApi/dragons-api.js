const BASE_URL = 'https://api.spacexdata.com/v4'

function fetchDragons(limit) {
  const data = {
    "query": {},
    "options": {
      "page": 1,
      "limit": `${limit}`
    }
  }

  return fetch(`${BASE_URL}/dragons/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`No dragons`));
  });
       
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