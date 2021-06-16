const BASE_URL = 'http://localhost:3000/api/v1';

export const Course = {
  index() {
      return fetch(`${BASE_URL}/courses`)
      .then(res => {
          return res.json();
      })
  },
  show(id) {
    return fetch(`${BASE_URL}/courses/${id}`)
      .then(res => res.json())
  },
  create(params){
    return fetch(`${BASE_URL}/courses`, {
        method: 'POST',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then((res) => res.json());
  },
  // update(id, params) {
  //   return fetch(`${BASE_URL}/courses/${id}`, {
  //     method: 'PATCH',
  //     credentials: 'include',
  //     headers: {
  //       "Content-Type": 'application/json'
  //     },
  //     body: JSON.stringify(params)
  //   }).then(res => res.json())
  // },
  // destroy(id) {
  //   return fetch(`${BASE_URL}/courses/${id}`, {
  //     method: 'DELETE',
  //     credentials: 'include',
  //   })
  // },
}

export const Episode = {
  index(id) {
      return fetch(`${BASE_URL}/courses/${id}/episodes`)
      .then(res => {
          return res.json();
      })
  },
  show(id) {
      return fetch(`${BASE_URL}/episodes/${id}`)
        .then(res => res.json())
  },
  create(id, params){
    return fetch(`${BASE_URL}/courses/${id}/episodes`, {
        method: 'POST',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then((res) => res.json());
  },
  // update(id, params) {
  //   return fetch(`${BASE_URL}/episodes/${id}`, {
  //     method: 'PATCH',
  //     credentials: 'include',
  //     headers: {
  //       "Content-Type": 'application/json'
  //     },
  //     body: JSON.stringify(params)
  //   }).then(res => res.json())
  // },
  // destroy(id) {
  //   return fetch(`${BASE_URL}/episodes/${id}`, {
  //     method: 'DELETE',
  //     credentials: 'include',
  //   })
  // },
}

export const Review = {
  create(id, params){
      return fetch(`${BASE_URL}/episodes/${id}/reviews`, {
        method: 'POST',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)  
      }).then(res => res.json())
  },
  destroy(id) {
    return fetch(`${BASE_URL}/reviews/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(res => res.json())
  }
}

export const Session = {
    create(params){
        return fetch(`${BASE_URL}/session`, {
          method: 'POST',
          credentials: 'include', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)  
        }).then(res => res.json())
    },
    destroy() {
      return fetch(`${BASE_URL}/session`, {
        method: 'DELETE',
        credentials: 'include',
      }).then(res => res.json())
    }
}

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: 'include',
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json())
  }
}