//Gera um Código aleatorio (apenas números)

function random(Tcollun, min=0, max=10) {//caso não seja especificado o valor do parâmetro, eles recebem 1 e 10.
	let codigoAle = []
	for(let i = 0; i < Tcollun; i++) {
		const nAle = Math.floor(Math.random()*(max-min)+min)
		 codigoAle += [nAle]
	}
	console.log(codigoAle)
}

function codigo(tcoluna=10, linha=1,min,max) {
	for(let i = 0; i < linha; i++) {
		random(tcoluna,min,max)
	}
 }

/*!!Sequencias dos parâmetros da Função codigo!!
1 => n° Colunas (quantidade de caracteres de cada código)
2 => n° Linhas (quantidade de códigos a serem gerados)
3/4 =>  Dois últimos parâmetros: possíveis números gerados {
gerar  codigo usando números entre..[x]
até.... [y-1] visão do parametro:(x,y) }
*/

codigo() 

//!!FUNCIONANDO!!