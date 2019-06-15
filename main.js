document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "Hey there! My name is Renita Edward.";
}
function mySchool() {
    document.getElementById("school").innerHTML = "I'm going to Mcneil High School and I will be a freshman there this upcoming school year.";
}
function myCareer() {
    document.getElementById("career").innerHTML = "I want to be a pediatrician in the future because I love working with kids and I like science.";
}
function myHobbies() {
    document.getElementById("hobbies").innerHTML = "In my free time, I enjoy reading, painting, and playing sports for fun with my friends.";
}
