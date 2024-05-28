
document.getElementById("fetchCharacter").addEventListener("click", () =>fetchCharacter(2));
document.getElementById("fetchStarship").addEventListener("click",() =>fetchStarship(9));


function fetchCharacter(characterID) {
    fetch(`https://www.swapi.tech/api/people/${characterID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayCharacter(data.result.properties))
        .catch(error => handleError(error));
}

function fetchStarship(starshipId) {
    fetch(`https://www.swapi.tech/api/starships/${starshipId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
               return response.json();
        })

        .then(data => displayStarship(data.result.properties))
        .catch(error => handleError(error));
}

function displayCharacter(character) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML =`
        <h2>${character.name}</h2>
        <p><strong>Gender:</strong>$(character.gender}</p>
        <button onclick="fetchStarship(9)">View Starships</button>`;
}

function displayStarship(starship) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML =`
        <h2>${starship.name}</h2>
        <p><strong>Model:</strong>${starship.model}</p>
        <p><strong>Crew:</strong>${starship.crew}</p> `;

}

function handleError(error) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    console.error('Error fetching data:', error);
}

// Example fetch to verify functionality:
fetch("https://www.swapi.tech/api/people/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

//editgit status
