const quoteText = document.getElementById('quote-text');

async function getQuotes(){
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    try{
        const response = await fetch(apiUrl);
        const quotes = await response.json();
    }
    catch(error){

    }
}
getQuotes()
console.log(getQuotes)