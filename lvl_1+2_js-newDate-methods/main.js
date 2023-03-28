console.log("Auf ein Neues!");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-1_date new Date() ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈


// let date1 = new Date('September 2, 2019 09:00:00')
// document.write(date1 + " = new Date('September 2, 2019 09:00:00')" );

// let date2 = (new Date(0))
// document.write("<br><br>" + date2 + " = new Date(0)");

// let date3 = (new Date(31556908800))
// document.write("<br><br>" + date3 + " = new Date(31556908800)");

// let date4 = (new Date(86400000))
// document.write("<br><br>" + date3 + " = new Date(86400000)");


// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-2_Date Methods ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

// ==================

// let date = new Date(); 

// document.write(date);

// document.write("<br><br>" + date.getFullYear());
// document.write("<br><br>" + (date.getMonth()+1) + ". Monat");
// document.write("<br><br>" + date.getDate() + ". Tag");
// document.write("<br><br>" + date.getHours() + " Stunden");
// document.write("<br><br>" + date.getMinutes() + " Minuten");
// document.write("<br><br>" + wochenTag[date.getDay()]);
// document.write("<br><br>" + monate[date.getMonth()]);

// let showDay = wochenTag[date.getDay()];
// let showHours = date.getHours();
// let showMinutes = date.getMinutes();
// let showSeconds = date.getSeconds();

// let showPeriod = () => {
//     if (showHours >= 12)
// }
// document.body.div.innerHTML = `<br><br> ${}`

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-3_SET Date Methods ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ ????

// let datum = new Date();

// datum.setFullYear(2222);
// console.log(datum);
// document.write("<br><br>" + datum);

// datum.
// console.log(datum);
// document.write("<br><br>" + datum);



// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_1-5 Monatsnamen ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

// let monatsname1 = new Date("2001,3,4");
// console.log(list[monatsname1.getMonth()]);

// let monatsname2 = new Date("2019,12,24");
// console.log(list[monatsname2.getMonth()]);

// let monatsname3 = new Date("1410,07,15");
// console.log(list[monatsname3.getMonth()]);



// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-1 Tag Monat Jahr ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const displayDate = document.querySelector('.output_div');

let d = new Date();

const showFunction = () => {
    let showDate = d.getDate();
    let showMonth = d.getMonth() + 1;
    let showYear = d.getFullYear();
    // console.log(showDate + "/" + showMonth + "/" + showYear);
    displayDate.innerHTML = `${showDate}/${showMonth}/${showYear}`
}

showFunction();









