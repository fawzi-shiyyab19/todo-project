let userName = prompt("Enter his/her name");
let gender = prompt("Enter your gender male/female");
let age;
let showWelcomeMessage = "yes";
if (gender !== "male" && gender !== "female"){
  gender = prompt("Please enter a valid gender");
} else {
  age=prompt("Please enter his/her age")
  if (age > 0){
    showWelcomeMessage = prompt("Do you need to shown the welcome message please answer yes or no?");
    if (showWelcomeMessage === "yes"){
      alert(`Welcome ${gender === "male" ? "Mr" : gender === "female" ? "Ms" : ""} ${userName}`)
    }
  } else {
    alert(`Hey ${userName}, you entered invalid age.`);
  }
}

let answer = [];
alert("Please answer all these questions used Yes or No");
let questionAboutArabianFood = prompt("Are you like arabian food?");
if (questionAboutArabianFood !== ""){
  answer.push(questionAboutArabianFood);
} else {
  alert("Invalid");
}
let questionAboutSwimming = prompt("Are you love swimming?");
if (questionAboutSwimming !== ""){
  answer.push(questionAboutSwimming)
} else {
  alert("Invalid");
}
let questionAboutJob = prompt("Are you software engineering?");
if (questionAboutJob !== ""){
  answer.push(questionAboutJob)
} else {
  alert("Invalid");
}

console.log(answer)

function introduceYourSelf(name, age, unversityName, bacholreDegree){
    console.log(`I'm ${name}, I've ${age} and I graduated from ${unversityName} specially in ${bacholreDegree}`)
  }
  
  introduceYourSelf("Fawzi Shiyyab", "23 years old", "Yarmouk University", "Computer Information System");
  function squarAreaSize(length){
    console.log(length * length);
  }
  
  squarAreaSize(4);
  