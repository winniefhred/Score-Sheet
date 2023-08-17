
'use strict';
const btnResult = document.querySelector('.btn-result');
const btnReset = document.querySelector('.btn-reset')
const subjectInput  = document.querySelectorAll('.subject-input');

const result = document.querySelectorAll('.result');
const averageTotalScore = document.querySelector('.average-score');
const remarks = document.querySelector('.remarks');
const displayTotalScore = document.querySelector('.total-score');
const input = document.querySelector('input')



let score, averageScore;
let totalScore = 0;

    // const optionloop = function (options) {
    // for (let index = 0; index < options.length; index++) {
    //   totalScore += Number(options[index].value) ;
    //   score =  options[index].value;
    // }
    // }
  
  for (let index = 0; index < subjectInput.length; index++) {
    subjectInput[index].addEventListener('input', function () {
      score =  subjectInput[index].value;
      result[index].textContent = result[index].value = score;  

      if (score < 0 || score > 100 || score === NaN ) {
        alert('Invalid score, please input only valid scores')
        subjectInput[index].value = ''
        result[index].textContent = result[index].value = '';
      }
      else if (score < 40) {
        result[index].textContent = result[index].value = 'f';
      } else if (score >= 40 && score < 45) {
        result[index].textContent = result[index].value = 'E';
      } else if(score >= 45 && score < 50){
        result[index].textContent = result[index].value = 'D';
      }
      else if(score >= 50 && score < 60){
        result[index].textContent = result[index].value = 'C';
      }
      else if(score >= 60 && score <= 69){
        result[index].textContent = result[index].value = 'B';
      }
      else if(score >=70){
        result[index].textContent = result[index].value = 'A';
      } else{

      }
    })
  }
  
  btnResult.addEventListener('click', function (params) {
    for (let index = 0; index < subjectInput.length; index++) {
      totalScore += Number(subjectInput[index].value) ;
      score = subjectInput[index].value
    }
    if (score === '') {
      alert('All scores fields must be filled');
    } else {
      displayTotalScore.textContent =`Total Score: ${totalScore}`; 
      averageScore = totalScore / subjectInput.length;
      averageTotalScore.textContent = `Average Score: ${averageScore}`;
      remarks.textContent = averageScore < 50 ? `Remarks: You failed, work harder next time 😢` : `Remarks: You passed, super proud of you 🎉`
    }
  })

  btnReset.addEventListener('click', function (params) {
    remarks.textContent = 'Remarks';
    displayTotalScore.textContent= `Total Score`;
    averageTotalScore.textContent= 'Average Score';
    for (let index = 0; index < subjectInput.length; index++) {
      subjectInput[index].value = '';
      result[index].value =''
    }
  })
