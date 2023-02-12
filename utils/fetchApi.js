import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': "e2f613e1c9msh7aff0382524c129p1b3ed4jsn0b39c7e9f4f3",
            'X-RapidAPI-Host': "bayut.p.rapidapi.com"
          },
    })
    return data
}