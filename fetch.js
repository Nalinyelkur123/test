// api url
const api_url = "https://dummyjson.com/products";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = 
  `<tr>
		<th>id</th>
		<th>title</th>
		
		
	</tr>`;

  // Loop to access all rows
  for (let r of products.list) {
    tab += `<tr>
	<td>${r.id} </td>
	<td>${r.title}</td>
	
			
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}

// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
