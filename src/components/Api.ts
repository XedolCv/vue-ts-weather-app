import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5112',
});


export type GetWeather = {
    longitude: number
    latitude: number
    temperature: number
    windSpeed: number
    time: string
}



export async  function getWeatherFromAPi(longitude : number, latitude : number) : Promise<GetWeather> {
        return  await  axiosClient.get<GetWeather>(`/Weather`,{params:{Longitude:longitude.toFixed(6), Latitude:latitude.toFixed(6)}})
            .then((res)=>{
                return res.data;
            }) .catch(function (error) {
                console.log(error);
                return error;
            })
}