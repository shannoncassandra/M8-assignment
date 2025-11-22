//STEP 1
let favmovies = ['The Prestige', 'Emperors New Groove', 'Paranormal Activity', 'Hot Rod', 'Wicked']
console.log(favmovies[1])

//STEP 2
let movies = new Array(5)
movies[0] = 'The Prestige'
movies[1] = 'Emperors New Groove'
movies[2] = 'Paranormal Activity'
movies[3] = 'Hot Rod'
movies[4] = 'Wicked'
console.log(movies[0])

//STEP 3
movies.splice(3, 0, 'Finding Nemo')
console.log(movies.length)

//STEP 4
let moviesa = ['The Prestige', 'Emperors New Groove', 'Paranormal Activity', 'Hot Rod', 'Wicked']
moviesa.shift()               
console.log(moviesa)

//STEP 5
let moviesb = ['The Prestige', 'Emperors New Groove', 'Paranormal Activity', 'Hot Rod', 'Wicked', 'La La Land', 'Toy Story']
for (let movies in moviesb) {
	console.log(moviesb[movies])
}

//STEP 6
Array.prototype.myname = () => {}

let moviesc = ['The Prestige', 'Emperors New Groove', 'Paranormal Activity', 'Hot Rod', 'Wicked', 'La La Land', 'Toy Story']
for (let i of moviesc) {
	console.log(i)					
}

//STEP 7
let moviesd = ['The Prestige', 'Emperors New Groove', 'Paranormal Activity', 'Hot Rod', 'Wicked', 'La La Land', 'Toy Story']
moviesd.sort()
for (let i in moviesd) {
	if (moviesd.hasOwnProperty(i)) {
		console.log(moviesd[i])}}

//STEP 8

//STEP 9

//STEP 10

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17