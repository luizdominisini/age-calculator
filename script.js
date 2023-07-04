//saídas
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

//entrada
let isValid = false;
const input_year = document.querySelector("#input-year");
const input_month = document.querySelector("#input-month");
const input_day = document.querySelector("#input-day");

//error elements
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");


submit_btn.addEventListener("click", calculateDate);


input_day.addEventListener("input", () => {
    if (input_day.value > 31 || input_day.value < 0) {
        error_day.textContent = "Data inválida"
        isValid = false;
    } else {
        error_day.textContent = "";
        isValid = true;
    }
});

input_month.addEventListener("input", () => {
    if (input_month.value > 12 || input_month.value < 0) {
        error_month.textContent = "Data inválida"
        isValid = false;
    } else {
        error_month.textContent = "";
        isValid = true;
    }
});

input_year.addEventListener("input", () => {
    if (input_year.value > 2023 || input_year.value < 0) {
        error_year.textContent = "Data inválida"
        isValid = false
    } else {
        error_year.textContent = "";
        isValid = true;
    }


});

function calculateDate(){
    if (isValid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday)
        let birthdayObj = new Date(birthday)
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;
        output_day.textContent = ageDay + "  ";
        output_month.textContent = ageMonth + "  ";
        output_year.textContent = ageYears + "  ";
    } else{
        alert("error");
    }
};
