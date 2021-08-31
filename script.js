const quoteText = document.getElementById('quote-text');

async function getQuotes(){
    const apiUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
    try{
        const response = await fetch(apiUrl);
        const quotes = await response.json();
    }
    catch(error){

    }
}
getQuotes()
console.log(getQuotes)