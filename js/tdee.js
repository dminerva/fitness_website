function person(sex, heightF, heightI, weight, age, activity) {
    this.sex = sex;
    this.heightF = heightF;
    this.heightI = heightI;
    this.weight = weight;
    this.age = age;
    this.activity = activity;
}

function convertHeight(feet, inches) {
    feet = parseFloat(feet);
    inches = parseFloat(inches);
    var feetInInch = 0;
    var heightInCm;
   
    if(feet > 0 ) {
        feetInInch = feet * 12;
    }

    if(feetInInch > 0) {
        inches = feetInInch + inches;
    }

    heightInCm = inches * 2.54;
    return heightInCm;
}