export const getBooks = () =>{
    return fetch('http://localhost:4000/books/',{
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    }).then(response => response.json());
}