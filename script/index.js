//boilerplate


const BASE_URL = "placeholder-questions.json"
//define player 1 and 2 in an array and give them properties
let playerArray = [
    {
        name: "player-1",
        turn: true,
        score: +0,
    },
    {
        name: "player-2",
        turn: false,
        score: +0,
    }

]

let quesArray = []

//display placeholder questions in correct boxes
// --------------------------------FETCH CONTENT AND DISPLAY CORRECT QUESTION WHEN CLICKED------------------------------- //
let catArray = []
async function getAllCategories(){
    let catCount = 0
    let cathtml = 0
    for (let i = 0; i < 6; i++) {
    cathtml = (cathtml+1)
    catCount = (catCount+9)
    let categoryFetch = await fetch(`${BASE_URL}`)
    let cat = await categoryFetch.json()
    let catContent = cat.placeholderQuestions[`${catCount}`]
    let catDisplay = document.getElementById(`category${cathtml}`)
    
    catDisplay.textContent= `${catContent.category}`
   console.log(cat)
    
    // let test = cat.map((category) => {return placeholderQuestions.category})
    // catArray = push().test
    // console.log(catArray)
    }
}
getAllCategories()

    let quesCount = -1
    
async function getQuestions() {
    for (let i = 0; i < 6; i++) {
    quesCount = (quesCount+10)
    let questionFetch = await fetch(`${BASE_URL}`)
    let ques = await questionFetch.json()
    let quesContent = ques.placeholderQuestions[`${quesCount}`]
    let quesDisplay = document.querySelectorAll(`questions1`)
    console.log(quesContent.question)
    quesDisplay.textContent = `${quesContent.question}`
    }
    }
getQuestions()


//when round 1 is loaded notify that it is player 1's turn
//change both players scores to 0 (current score variable)
async function intial(){
let notify = document.getElementById("notification")
notify.textContent = "It's Player Ones turn"

}
intial()

//disable the submit answer and pass question until a question value is selected

//replace score in the selected box with a specific question and enable the pass and submit buttons

//pass question button passes the question to the other player

//function to figure out if submitted answer is correct and award the right player with the right amount of points, blank out the question box after
    //answer is correct - award the initial player their specific amount of points and allow them to pick another question

    //answer is incorrect - subtract from the players score and pass the question to the next player and give them a chance to answer
        //2nd player is correct - award them the specific amount of points and change it to their turn to select the next question
        //2nd player is incorrect - allow the initial question selector to select another question

