import axios from '../axios'

//resolve ~ return
//using async await
export const getHome = () => new Promise(async(resolve, reject) => {
    try{
        const response = await axios({
            //REACT_APP_SERVER_URL = https://api-zingmp3-vercel.vercel.app/api
            url: '/home',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
}
)