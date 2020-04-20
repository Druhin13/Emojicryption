const api_url = 'emoji.json';

async function getData() {
	const response = await fetch(api_url);

	const data = await response.json();

	//	document.getElementById("h1").innerHTML = (data);

	//	console.log(data);

	//	console.log(data.a);
	//	console.log(data.b);


	console.log(data.a[" ".charCodeAt(0)]);
	console.log(data.b[" ".charCodeAt(0)]);


}

getData();