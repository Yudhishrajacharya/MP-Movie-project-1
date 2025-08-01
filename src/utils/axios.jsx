import axios from 'axios'


const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmNkZDE5NDVhZTQ0M2M0NGRlNzg2MzVkY2Q2YmU0NCIsIm5iZiI6MTc1NDAzNDk2MC45ODcsInN1YiI6IjY4OGM3MzEwOTM4ZGM2NTk1NmIyMjNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PYojEind5SIX61eVfZ_u5An9to-AwPnnk6fg4L-aLrE'
    }

})

export default instance