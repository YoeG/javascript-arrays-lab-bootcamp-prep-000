const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
console.log(kittens[0]);


///////////////////////////////////////////////////////////////////////////////
function destructivelyAppendKitten (name)
{kittens.push(name)}

destructivelyAppendKitten("Yoe")
console.log(kittens[3]);

///////////////////////////////////////////////////////////////////////////////

function destructivelyPrependKitten (name)
{kittens.unshift(name)}
var aName = "Juan"
destructivelyPrependKitten (aName)
console.log(kittens[0])


////////////////////////////////////////////////////////////////////////////////

function destructivelyRemoveLastKitten ()
{kittens.pop()}


/////////////////////////////////////////////////////////////////////////////////

function destructivelyRemoveFirstKitten()
{kittens.shift()}

/////////////////////////////////////////////////////////////////////////////////

function appendKitten(name)
{ var newKittens; newKittens = kittens.concat(name)}

appendKitten ('Broom')
