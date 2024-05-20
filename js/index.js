

const arrayOfQuotes = [
    {
        "Name": "Oscar Wilde",
        "Quotes": "Always forgive your enemies; nothing annoys them so much"
    },

    {

        "Name": "Mahatma Gandhi",
        "Quotes": "Live as if you were to die tomorrow. Learn as if you were to live forever."

    },

    {
        "Name": "Bill Keane",
        "Quotes": "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."
    },

    {
        "Name": "Martin Luther King, Jr.",
        "Quotes": "But I know, somehow, that only when it is dark enough can you see the stars."
    },
     
    {
        "Name": "Elbert Hubbard",
        "Quotes": "Do not take life too seriously. You will not get out alive."
    },

    {
        "Name": 'Epictetus',
        "Quotes": 'It\'s not what happens to you, but how you react to it that matters.'
    },


];


function Quote(){
 const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
 document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].Quotes}\"`;
 document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].Name}`;

}




















