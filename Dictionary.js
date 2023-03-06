function getTheWord(){
    let word = document.getElementById("wordInput").value;
    let createWord = document.createElement("list");
    let wordCreated = document.createTextNode(word);
    createWord.appendChild(wordCreated );
    let listDictionary = document.getElementById("addWord");
    listDictionary.appendChild(createWord);
    document.getElementById("wordInput").value = " ";
}

function clearSaveText(id){
    window.location.reload();
}

function checkTheWord(){
    let wordSearched = document.getElementById("verifyInput").value;
    let wordCreated = document.getElementsByTagName('list');
    const textMessage = document.getElementById("findOrNo");
    let found = 0;
    for (let word of wordCreated) {
        let text = word.innerHTML;
        if (text == wordSearched){
            textMessage.innerHTML = "The word " + wordSearched + " is a match";
            found = 1;
        }
    }
    if (found == 0) {
        textMessage.innerHTML = "Sorry, but the word " + wordSearched + " doesn`t exist in the dictionary!";
    }
    }
function clearInput(x){
    let getValue = document.getElementById("verifyInput");
    if (getValue.value !="") {
        getValue.value = "";
    } 
}