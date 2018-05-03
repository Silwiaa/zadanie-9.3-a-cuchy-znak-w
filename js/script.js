var test = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period',
    dinosaur = 'triceratops',
    dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var testCharsAfter = test.replace('Velociraptor', dinosaurUpperCased);

console.log(testCharsAfter);

var halfOftest = testCharsAfter.slice(0,72);

console.log(halfOftest);