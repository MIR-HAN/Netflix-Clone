import axios from "axios";


export default axios.create({

    baseURL: `https://api.themoviedb.org/3`,
    
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `,
      },
    //common parameters
    params:{
        language:"en-US",
    }
});
