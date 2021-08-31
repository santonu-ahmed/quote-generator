const quoteText = document.getElementById('quote-text');

async function getQuotes(){
    const apiUrl = ' https://sv443.net/jokeapi/v2';
    try{
        const response = await fetch(apiUrl);
        const quotes = await response.json();
    }
    catch(error){

    }
}
getQuotes()
console.log(getQuotes)