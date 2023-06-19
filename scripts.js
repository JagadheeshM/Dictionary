async function dictionary(wordHere){
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+wordHere;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6a00832df4msh584fdc3e8abd5d5p1f477fjsne0d255fcccae',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        fetch(url, options)
        .then(response => response.json())
        .then((response)=>{
            mean.innerHTML = response.definition.replace('2.','<br>2.').replace('3.','<br>3.').replace('4.','<br>4.').replace('5.','<br>5.');
            words.innerHTML = response.word;
        })
    } catch (error) {
        console.error(error);
    }   
}

searched.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchWord.value);
})
