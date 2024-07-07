const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const loadText = "Pending....";
    factDiv.innerHTML = loadText;
    const baseURL = "//numbersapi.com/";
    const number = e.target.querySelector('input[type="number"]').value;
    fetch(baseURL + number, {
        headers: {
            'x-requested-with': 'text/plain'
        }
    })
        .then(response => response.text())
        .then(text => factDiv.innerHTML = text)
        .catch(e => console.log(e));
})