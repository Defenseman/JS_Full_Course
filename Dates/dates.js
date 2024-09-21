// Date = objects that contain the values and represent dates and times
//        these date objects can be changed and formatted

const date = new Date(2020, 4, 24, 12, 0, 0, 0);
console.log(date)

const date1 = new Date('2024-05-24T12:00:00.000Z');
console.log(date1);

const date2 = new Date(1700000000000);
console.log(date2);

//get fullValue
const curDate = new Date();
const fullYear = curDate.getFullYear();
const month = curDate.getMonth()+1;
console.log(curDate)
console.log(fullYear)
console.log(month)

//set value

curDate.setFullYear(2020);
curDate.setMonth(0);
curDate.setDate(1);
console.log(curDate);

// Comparing

const date3 = new Date('2024-12-31T23:59:00.000Z');
const date4 = new Date('2025-01-01T00:00:00.000Z');
if(date4 > date3) {
    console.log(`Happy new ${date4.getFullYear()} year!!!`);
}



