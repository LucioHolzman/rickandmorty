const btn = document.getElementById('btn');
const main = document.querySelector('.main');
btn.addEventListener('click', e => {
    capture()
})

function capture() {
   fetch( "https://rickandmortyapi.com/api/character")
   .then(res => res.json())
   .then(res => {
        for(let result of res.results){
            let contain = document.createElement('div');
            main.appendChild(contain);
            contain.className = 'card';
            contain.innerHTML = `
                <h2>${result.name}</h2>
                <img class="img" src="${result.image}"/>
                <p>Specie: ${result.species}</p>
                <p>Gender: ${result.gender}</p>
                <p>Origin: ${result.origin.name}</p>
                <p>Status: ${result.status}</p>
            `
        }
    })
    .catch(error => console.error('Error', error));
}
