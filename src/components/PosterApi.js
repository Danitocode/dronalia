class PosterAPI {




	// Get json file where we can find films and series data. After that, it print HTML cards
	static getPosterJSON() {
		fetch('./data/poster.json')
			.then(result => result.json())
			.then(data => {
				let posterJSON = data.poster;
				PosterAPI.populateFilms(posterJSON.films);
				PosterAPI.populateSeries(posterJSON.series);
			});
	}

	// Populate the film container with the list param 
	static populateFilms(listFilms) {
		// Inicialitza el contenidor de films
		document.querySelector('#list-films').innerHTML = "";

		// Recorrer cada Film i afegeix la seva maquetació html al contenidor
		listFilms.forEach(oFilm => {
			console.log("info:" + oFilm.id + " " + oFilm.name);
			let card = `
			<div id="film-${oFilm.id}" class="card mb-4 shadow-sm" style="width: 14rem;">
				<img src="./img/film/${oFilm.cover}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${oFilm.name}</h5>
					<p class="card-text">${PosterAPI.sumary(oFilm.sinopsis)}</p>
					<p class="card-text"><span class="text-info">Duración:</span>${oFilm.duration}</p>
					<p class="card-text"><span class="text-info">Director:</span>${oFilm.director}</p>
					<p class="card-text"><span class="text-info bold">Género:</span>${oFilm.genre}</p>
					<p class="card-text price">${oFilm.price}</p>
				</div>
				<div class="card-header">Stars</div>
				<ul class="list-group list-group-flush">
				${PosterAPI.printStars(oFilm.stars)}
				</ul>
        	
				<div class="text-center" data-toggle="modal" data-target="#pedido">
					<button data-idOrder="${oFilm.id}" type="button" class="btn btn-primary btn-buy" 
							data-toggle="tooltip" data-placement="top" title="Pago sólo con paypal">
						Comprar
					</button>
				</div>
			</div>`;

			document.querySelector('#list-films').innerHTML += card;
		});

		PosterAPI.handleButtonOrder();
	}


	// Search a film into poster json file
	static searchFilm() {
		fetch('./data/poster.json')
			.then(result => result.json())
			.then(data => {
				let txtSearch = document.querySelector("#txt-search").value;
				txtSearch = txtSearch.toLowerCase();
				let listFilms = data.poster.films;
				let films = listFilms.filter(
					// If the condition returns true, return the current item
					// Check if there is a film width the same name (or more than one) 
					(item) => (item.name.toLowerCase().indexOf(txtSearch) > -1)
				);
				if (films.length > 0) {
					PosterAPI.populateFilms(films);
				} else {
					document.querySelector("#list-films").innerHTML = `
						<p>Ninguna película coincide con los datos de búsqueda</p>
					`;
				}

			});
	}

}
export default PosterAPI;