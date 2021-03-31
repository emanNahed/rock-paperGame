let userScore= 0;
let computerScore = 0;
let roundNumber = 1;

const userScore_h3= document.getElementById('user-scores');
const computerScore_h3= document.getElementById('computer-scores');

const rockUser_img= document.getElementById('rock-user');
const paperUser_img= document.getElementById('paper-user');
const scissorUser_img= document.getElementById('scissor-user');

const rockComp_img= document.getElementById('rock-comp');
const paperComp_img= document.getElementById('paper-comp');
const scissorsComp_img= document.getElementById('scissor-comp');


const result_h3= document.getElementById('result');
const whoWin_h3 = document.getElementById('winner');
const playButton= document.getElementById('play-button');
const roundNumber_h1 = document.getElementById('page-title')
play();

function play(){
    rockUser_img.addEventListener('click', () => {
        rockUser_img.style.backgroundColor= 'red';
        paperUser_img.style.backgroundColor= 'transparent';
        scissorUser_img.style.backgroundColor= 'transparent';
        round(0)
    })


    paperUser_img.addEventListener('click', ()=> {
        paperUser_img.style.backgroundColor= 'red';
        rockUser_img.style.backgroundColor= 'transparent';
        scissorUser_img.style.backgroundColor= 'transparent';
        round(1)
    })

    scissorUser_img.addEventListener('click', ()=>{
        scissorUser_img.style.backgroundColor= 'red';
        paperUser_img.style.backgroundColor= 'transparent';
        rockUser_img.style.backgroundColor= 'transparent';
        round(2)
    })


    playButton.addEventListener('click', ()=>{
        playButton.textContent= 'Play';

        userScore= 0;
        computerScore= 0;

        userScore_h3.textContent= 'score: 0';
        computerScore_h3.textContent = 'score: 0';

        whoWin_h3.textContent= 'win: ?';
        
        rockUser_img.style.pointerEvents= 'auto'
        paperUser_img.style.pointerEvents= 'auto'
        scissorUser_img.style.pointerEvents= 'auto'


        roundNumber++;
        roundNumber_h1.textContent= 'Round '+ roundNumber;

        
    })
}




function round (userChice){
    let computerChoice = Math.floor(Math.random() * 3);
    let win= 1; //tie value;

    
    
    if(computerChoice == 0){
        rockComp_img.style.backgroundColor = 'red';
        paperComp_img.style.backgroundColor= 'transparent';
        scissorsComp_img.style.backgroundColor= 'transparent';
    }
    else if(computerChoice == 1){
        paperComp_img.style.backgroundColor = 'red';
        rockComp_img.style.backgroundColor= 'transparent';
        scissorsComp_img.style.backgroundColor= 'transparent';
    }else{
        scissorsComp_img.style.backgroundColor = 'red';
        paperComp_img.style.backgroundColor= 'transparent';
        rockComp_img.style.backgroundColor= 'transparent';
    }
    if(userChice == 0 && computerChoice == 2
    || userChice == 1 && computerChoice == 0
    || userChice == 2 && computerChoice == 1){
        win = 0; //user win;
    }
    else if(computerChoice != userChice){
        win = 2; // computer win
    }
    

    if(win == 0){
        userScore++;
        result_h3.textContent= 'you win'
         userScore_h3.textContent = 'score: ' + userScore;
    }
    else if (win == 2){
        computerScore++;
        result_h3.textContent= 'computer win'
        computerScore_h3.textContent = 'score: ' + computerScore;
    }
    else{
        result_h3.textContent= 'tie'
    }


    if(computerScore == 3 || userScore == 3){
        whoWin_h3.textContent= 'win: '+ ((userScore == 3)? "you": 'computer');
        playButton.textContent= 'play Again';

        rockUser_img.style.pointerEvents= 'none'
        paperUser_img.style.pointerEvents= 'none'
        scissorUser_img.style.pointerEvents= 'none'

        rockComp_img.style.backgroundColor= 'transparent';
        paperComp_img.style.backgroundColor= 'transparent';
        scissorsComp_img.style.backgroundColor= 'transparent';

        rockUser_img.style.backgroundColor= 'transparent';
        paperUser_img.style.backgroundColor= 'transparent';
        scissorUser_img.style.backgroundColor= 'transparent';
    }
}
