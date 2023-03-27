import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': 'd4b8ae53a3mshf13ca8cc610db23p1288c5jsn16f0d83cc581',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const getData = () => {

    axios.request(options).then(function (response) {
        const data = response.data;
        return data
    }).catch(function (error) {
        console.error(error);
    });
}