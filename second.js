const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
]; 

var arrname = new Array(12);
for (var i = 0;i<12;i++){
	arrname[i] = "";
}
var count = new Array(12);
for (var i = 0;i<12;i++){
	count[i] = 1;
}
var tail = 0;
for (var i = 0; i <= factories.length - 1; i++) {
	for (var j = 0; j <= factories[i].employees.length - 1; j++) {
		var k = 0;
		while (k<12){
			if (arrname[k] == factories[i].employees[j]){
				count[k] = count[k] + 1;
				break;
			}
			else{
				k = k + 1;
			}
		}
		if (k==12) {
			arrname[tail] = factories[i].employees[j];
			count[tail] = 1;
			tail = tail + 1;
		}
	}
}
for (var i = 0; i <= arrname.length - 1; i++) {
	if (arrname[i] != ""){
		console.log("employee: '%s', count: %d",arrname[i],count[i]);
	}
}

/*
arrname儲存employee姓名
count紀錄employee的factories數量
檢查employee是否在arrname中
	是:count++
	否:將employee寫到arrname中
*/
