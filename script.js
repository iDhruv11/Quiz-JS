const question = document.querySelector('h3');
const options = document.querySelectorAll('p');
const nextBtn = document.querySelector('footer');
const questionSet = [
    {
        ques: 'Which is the largest animal in the world',
        a: 'Shark', 
        b: 'Elephant', 
        c: 'Whale', 
        d: 'Giraffe',
        correct: 'c'
    },
    {
        ques: 'Which is the smallest country in the world', 
        a: 'Vatican City', 
        b: 'Bhutan', 
        c: 'Nepal', 
        d: 'Shri Lanka', 
        correct: 'a'
    },
    {
        ques: 'Which is the largest desert in the world',
        a: 'Gobi',
        b: 'Sahara', 
        c: 'Antartica',
        d: 'Kalahari',
        correct: 'd'
    },
    {
        ques: 'Which is the smallest continent in the world', 
        a: 'Asia', 
        b: 'Australia',
        c: 'Arctic',
        d: 'Africa',
        correct: 'b'
    }
]
let arr = ['a', 'b', 'c', 'd'];
let counter = 0;
let correct = 0;
function newQuestion(){
    if(counter < 4){
        question.innerText = `${counter+1}.${questionSet[counter].ques}?`
        let index = 0;
        options.forEach(option=>{
            option.innerText = `${questionSet[counter][arr[index]]}`
            option.style.backgroundColor = 'white';
            option.disabled = false;
            index++;
        })
        nextBtn.style.display = 'none';

        question.style.marginLeft = question.style.marginRight = '0px';
        question.style.fontSize = '18px';
        options.forEach(option=>{
            option.style.display = 'block';
        })
        document.querySelector('h4').style.display = 'none';
    }else{
        showEnd();
    }
}
function showEnd(){
    question.innerText = `:(  Sorry, this is the end of the quiz. Score: (${correct}/4)`;
    question.style.fontSize = '30px';
    question.style.marginLeft = 'auto'; 
    question.style.marginRight = 'auto'; 
    options.forEach(options=>{
        options.style.display = 'none';
    })
    document.querySelector('h4').style.display = 'block';
    nextBtn.innerText = 'Play Again';
    counter = 0;
    correct = 0;
}
function verify(e){
    if(!e.target.disabled){
        let correctOpt = questionSet[counter].correct;
        let correctElem = options[arr.indexOf(correctOpt)];
        if(e.target.innerText == questionSet[counter][correctOpt]){
            e.target.style.backgroundColor = '#9ee0bb';
            correct = correct + 1;
        }
        else{
            correctElem.style.backgroundColor = '#9ee0bb';
            e.target.style.backgroundColor = '#ff9b91';
        }
        nextBtn.style.display = 'block';
        options.forEach(option=>{
            option.disabled = true;
        })
        counter++;
    }
}
window.addEventListener('load', newQuestion);
options.forEach(option => {
    option.addEventListener('click', verify);
});
nextBtn.addEventListener('click', newQuestion);
nextBtn.addEventListener('click', ()=>{

})