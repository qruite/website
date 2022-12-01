const date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;

var monthCheck = checkTheMonth(month);

function checkTheMonth(month) {
    if(month == 12){
        return true;
    } else {
        return false;
    }
};

console.log("is it December: " + monthCheck);

changeTheEffect(monthCheck, day);

function changeTheEffect(isBool, day) {
    if(isBool) {
        let idName = "day" + day;
        document.getElementById(idName).className = "current";

        for(let i = 1; i < day; i++) {
            idName = "day" + i
            document.getElementById(idName).className = "opened";
        }
    }
};

