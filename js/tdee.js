function convertHeight(feet, inch) {
    var heightInInches = parseFloat((feet * 12) + inch);
    var heightInCm = parseFloat(heightInInches * 2.54);

    return heightInCm;
}

function convertWeight(lbs) {
    var kilos = parseFloat(lbs * .454);

    return kilos;
}

//takes in a person
function calculateTdee(x) {
    var bmr;
    var tdee;

    if(this.x == "male") {
        bmr = 66 + (13.7 * x.weight) + (5 * x.height) - (6.8 * age);
    } else if(this.x == "female") {
        bmr = 655 + (9.6 * x.weight) + (1.8 * x.height) - (4.7 * x.age);
    }

    if(x.activity == "sedentary") {
        tdee = bmr * 1.2;
    } else if(x.activity == "light") {
        tdee = bmr * 1.375;
    } else if(x.activity == "moderate") {
        tdee = bmr * 1.55;
    } else if(x.activity == "very") {
        tdee = bmr * 1.725;
    }

    return tdee;
}

function Person(sex, feet, inch, weight, age, activity) {
    this.sex = sex;
    this.height = convertHeight(feet, inch);
    this.weight = convertWeight(weight);
    this.age = age;
    this.activity = activity;
}

$(document).ready(function() {
    $("#buttonP").click(function() {
        var sex = $("#sexSelect option:selected").text();
        
    })
})