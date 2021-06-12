//to fetch data from unplash

const API_ACCESS_KEY = "Mo-Cwp3G1cgNxecBnhVADMpTyWa03ONE8ajPpLZhnQU";

const fetchPromise = async (imageName)=>{
    let urlSubmmit = `https://api.unsplash.com/search/photos?query=${imageName}&client_id=${API_ACCESS_KEY}`;
    let response = await fetch(urlSubmmit)
    let jsonResponse = await response.json()
    return jsonResponse
}

export const fetchImageUrl = (imageName)=>{
    const promise = fetchPromise(imageName)
    const imageUrl = promise.then((result) => {
        return result
        // if(result.alt_description === "purple and yellow abstract painting"){
        //     return result.urls.small
        // }
    })
    return imageUrl
}