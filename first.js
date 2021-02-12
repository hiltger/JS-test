const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
]; 


for (var i = 0; i <= factories.length - 1; i++) {
	var count = 0;
	for (var j = 0; j <= factories[i].employees.length - 1; j++) {
		count = count +1;
	}
	console.log("name: '%s', count: %d",factories[i].name,count);
}

//用count計算employee數量