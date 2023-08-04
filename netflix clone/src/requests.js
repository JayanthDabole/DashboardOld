const key = "8f23927a789a29b993f5e9bb7a789b8b";


const requests= {
    requestPopular: `/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestLatest: `/movie/latest?api_key=${key}&language=en-US`,
    requestUpcoming: `/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestNowPlaying:`/movie/now_playing?api_key=${key}&language=en-US&page=1`
}

export default requests