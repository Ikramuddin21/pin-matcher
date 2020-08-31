// matching image remove
document.getElementById("dontMatchImg").style.display = "none";
document.getElementById("matchImg").style.display = "none";

// generate pin button & input
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click",function(){
    const fourDigit = 1000 + Math.random() * 9000;
    const numberFloor = Math.floor(fourDigit);
    printInput("generateInput", numberFloor);
})

// calculator number button event handler
const number = document.getElementsByClassName("button");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(){
        let output = getInput("calculatorInput");
        if(output != NaN){
            output = output + this.id;
            printInput("calculatorInput", output);
        }
    })
    
}

// calculator clear & backSpace button event handler
const reduceBtn = document.getElementsByClassName("reduceBtn");
    for (let i = 0; i < reduceBtn.length; i++) {
        reduceBtn[i].addEventListener("click", function(){
            if(this.id == "clear"){
                printInput("calculatorInput", "");
            }
            if(this.id == "backSpace"){
                let backSpace = getInput("calculatorInput");
                backSpace = backSpace.slice(0, -1);
                printInput("calculatorInput", backSpace);
            }
        })
        
    }

    //matching number
    document.getElementById("submitBtn").addEventListener("click", function(){
        const generateInput = getInput("generateInput");
        const calculatorInput = getInput("calculatorInput");
        if(generateInput != "" & calculatorInput != ""){

            if(generateInput == calculatorInput){
                displayImages("matchImg", "dontMatchImg");
            }
            else{
                displayImages("dontMatchImg", "matchImg");
            }
        }

        else{
            displayImages("dontMatchImg", "matchImg");
        }
    });

function getInput(id){
    return document.getElementById(id).value;
}

function printInput(id, num){
    document.getElementById(id).value = num;
}

function displayImages(id1, id2){
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).style.display = "none";
}