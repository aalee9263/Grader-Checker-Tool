function gradeCheck(event) {
    event.preventDefault();
    let gradeInput = document.querySelector("#gradeInput").value;
    gradeInput = Number(gradeInput)

    console.log(gradeInput);

    let message = "";

 
    if (gradeInput > 100){
        message = "put number between 0-100"
    } else if (gradeInput >= 80){
        message = "A+"
    } else if (gradeInput >= 70){
        message = "A"
    } else if (gradeInput >= 60){
        message = "B"
    } else if (gradeInput >= 50){
        message = "C"
    } else if (gradeInput >= 0) {
        message = "F"
    } else {
        message = "put number between 0-100"
    }

document.querySelector("#resultWindow").innerHTML = message
} 
