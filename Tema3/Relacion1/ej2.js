function lanzamiento() {
	return Math.floor(Math.random()*(6)) + 1
};

document.write(`<h1>${lanzamiento()}</h1>`)