const API_URL = 'https://api.github.com/users/Kabil0211';

async function promiseHandler() {
	const val = await fetch(API_URL);

	// fetch will provide the ResponseHandler and the body will have a ReadableStream in it.
	// To get the value from the ReadableStream we should convert to json();
	// Again the json() will be a promise, we should use await before it.

	const convertedJSON = await val.json();

	// Which is equivalent to
	fetch(API_URL)
		.then((res) => res.json())
		.then((val) => console.log(val));

	console.log(convertedJSON);

	// To handle errors we should use try and catch block
}

promiseHandler();
