// import moment from 'moment'

export const getLatestMovies = () => {
    // const today = moment().format("YYYY-MM-DD")
    // const lastWeek = moment().subtract(1, 'week').format("YYYY-MM-DD")

    // const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=e441f8a3a151d588a4932d2c5d310769`
    const url = "http://localhost:8000/Weekly"


    return fetch(url)
        .then(response => response.json())
}

export const getPopularMovies = () => {
    // const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"
    const url = "http://localhost:8000/Popular"


    return fetch(url)
        .then(response => response.json())
}


export const getMovieApi = (id) => {

    // const url = `http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`
    const url = `http://localhost:8000/${id}`
    return fetch(url)
        .then(response => response.json())
}