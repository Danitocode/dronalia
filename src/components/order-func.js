
// Save an order of user in the object storage 
export function saveOrderInStorage() {

	let postId = document.querySelector("#order_id").value;
	let postName = document.querySelector("#order_name").innerHTML;
	let postQuantity = document.querySelector("#order_quantity") .value;
    let postPrice = document.querySelector("#order_price").value;
    let postSize = document.querySelector("input[name='order_size']:checked").value;

	// A simple object order
	let order = {
		"id": postId,
		"posterName": postName,
		"quantity": postQuantity,
		"price": postPrice,
		"size": postSize
	};

	// Hide the modal window
	document.getElementById('pedido').modal('hide');

	// Order is a JSON object, but we need to save it like a string in the local storage
	localStorage.setItem("order", JSON.stringify(order));

	console.info("Comanda desada correctament:" + order);
	window.location.href = "order.html";

}
