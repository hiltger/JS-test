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

function howManyEmployeeByTime(time){
  var worked_arr = new Array(employees.length);
  for (var i = 0;i<=employees.length - 1;i++){
    if (employees[i].type == 1){
      if (parseInt(time) > parseInt(employeeType[0].work_begin)) {
        worked_arr[i] = parseInt(time) - parseInt(employeeType[0].work_begin);
      }
      else
        worked_arr[i] = 0;
    }
    else if (employees[i].type == 2){
       if (parseInt(time) > parseInt(employeeType[1].work_begin)) {
        worked_arr[i] = parseInt(time) - parseInt(employeeType[1].work_begin);
      }
      else
        worked_arr[i] = 0;
    }
    else{
       if (parseInt(time) > parseInt(employeeType[2].work_begin)) {
        worked_arr[i] = parseInt(time) - parseInt(employeeType[2].work_begin);
      }
      else
        worked_arr[i] = 0;
    }
  }
  for (var j = 0;j<=employees.length - 1;j++){
    console.log("employee: '%s' , working hour: %d",employees[j].name,worked_arr[j]);
  }
}
//example
howManyEmployeeByTime(17);

/*
利用parseInt()將字串轉為Int方便計算
若Time大於work_begin:
  計算工作時數
  用worked_arr儲存
否則worked_arr = 0
*/