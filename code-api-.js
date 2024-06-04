const BASE_URL = "https://freetestapi.com/api/v1/";

const fetchData = async (endpointResource) => {
    try {
        const response = await fetch(`${BASE_URL}${endpointResource}`);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json(); 
        displayData(data);
    } catch (error) {
        console.error(`Error fetching data from ${endpointResource}:`, error);
    }
};

const displayData = (data) => { 
    data.forEach(iterator => {
        console.log(`${iterator.name}, ${iterator.description}`);
        console.log('');
    });
}
    

//fetchData("albums");
//fetchData("todos");
//fetchData("todos/1");
//fetchData("albums");
//fetchData("comments");
fetchData('cats');

const baseUrl = "https://jsonplaceholder.typicode.com/";
const endpoint = "todo";
const endpointUsers = "users";
const fullUrlEndpoint = baseUrl + endpoint;

function fetchData(_endpoint) {
  fetch(`https://jsonplaceholder.typicode.com/${_endpoint}`).then((response) =>
    response.json().then((data) => displayData(data))
  );
}

function displayData(_data) {
  console.log(_data.userId);
  /*for(let i = 0; i < _data.length; i++){
        let theTitle = _data[i];
        if(theTitle.id == 2){
            console.log(theTitle.title);
        }
    }*/
}

fetchData("todos");


// const BASE_URL = "https://freetestapi.com/api/v1/";

// //asnyc is keyword that waits for a response
// const fetchData = async (endpointResource) => {
//   try {
//     const response = await fetch(`${BASE_URL}${endpointResource}`);
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }
//     //wait for data -- same as the .then() method
//     const data = await response.json();
//     displayData(data);
//   } catch (error) {
//     console.error(`Error fetching data from ${endpointResource}:`, error);
//   }
// };
// const displayData = (data) => {
//   for(let i = 0; i < data.length; i++){
//     console.log(`The cats name is ${data[i].name}. 
//     And their description is : ${data[i].description}`);
//   }
// }; 
// //fetchData("albums"); 
// //fetchData("todos"); 
// //fetchData("todos/1"); 
// //fetchData("albums"); 
// fetchData("cats");
