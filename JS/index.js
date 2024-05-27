fetch("https://www.swapi.tech/api/people/1")
 .then(response => response.jason())
 .then(data => console.log(data))
 .catch(error =>console.error("Error fetching data:", error));
