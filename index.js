const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
console.log(kittens[0]);


///////////////////////////////////////////////////////////////////////////////
function destructivelyAppendKitten (name)
{kittens.push(name)}


///////////////////////////////////////////////////////////////////////////////

function destructivelyPrependKitten (name)
{kittens.unshift(name)}



////////////////////////////////////////////////////////////////////////////////

function destructivelyRemoveLastKitten ()
{kittens.pop()}


/////////////////////////////////////////////////////////////////////////////////

function destructivelyRemoveFirstKitten()
{kittens.shift()}

/////////////////////////////////////////////////////////////////////////////////
var newKittens;
function appendKitten(name)
{ newKittens = kittens.concat(name)}

appendKitten ('Broom')
console.log(newKittens[3])
