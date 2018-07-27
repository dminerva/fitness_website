function convertHeight(feet, inch) {
    var currFeet = parseInt(feet);
    var currInch = parseInt(inch);

    var feetInInches = parseInt(currFeet * 12);
    var heightInInches = parseInt(feetInInches + currInch);

    var heightInCm = parseFloat(heightInInches * 2.54)

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

    if(x.sex == "male") {
        bmr = (66 + (13.7 * Number(x.weight)) + (5 * Number(x.height)) - (6.8 * Number(x.age)));
    } else if(x.sex == "female") {
        bmr = (655 + (9.6 * x.weight) + (1.8 * x.height) - (4.7 * x.age));
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

    return parseInt(tdee);
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
        var feet = $("#heightFeet").val();
        var inch = $("#heightInch").val();
        var weight = $("#weight").val();
        var age = $("#age").val();
        var activity = $("#activity").val();
        var goal = $("#goal").val();

        var currUser = new Person(sex, feet, inch, weight, age, activity);
        var tdee = calculateTdee(currUser);

        if(goal == "looseOne") {
            tdee -= 500;
        } else if(goal == "looseHalf") {
            tdee -= 250;
        } else if(goal == "gainHalf") {
            tdee += 250;
        } else if(goal == "gainOne") {
            tdee += 500;
        }

        $("#tester").text("You need to eat " + tdee + " calories a day");
    })
})