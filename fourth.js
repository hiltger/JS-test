const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
      {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];

var time = new Array(3);
for (var j = 0;j<3;j++){
  if (parseInt(employeeType[j].work_end)!=0) {
    time[j] = parseInt(employeeType[j].work_end) - parseInt(employeeType[j].work_begin);
  }
  else
    time[j] = 24 - parseInt(employeeType[j].work_begin);
}


var sum = 0;
for (var i = 0; i <= employees.length - 1; i++) {
    if (employees[i].type == 1){
      sum = sum + time[0];
    }
    else if (employees[i].type == 2){
      sum = sum + time[1];
    }
    else{
      sum = sum + time[2];
    }
}

console.log(sum);

/*
Time[]儲存三種工作類型的上班時數
判斷employee的工作類型
用sum儲存所有員工的總工作時數
*/