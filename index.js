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
{ newKittens = kittens.concat(name); return newKittens}
appendKitten ('Broom')

/////////////////////////////////////////////////////////////////////////////////

function prependKitten (name)
{newKittens = [name, ...kittens]; return newKittens}

/////////////////////////////////////////////////////////////////////////////////

function removeLastKitten()
{newKittens = kittens.slice(0,2); return newKittens}

/////////////////////////////////////////////////////////////////////////////////

function removeFirstKitten ()
{newKittens = kittens.slice(1,3); return newKittens}



