var test = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period',
    dinosaur = 'triceratops',
    dinosaurUpperCased = dinosaur.toUpperCase(),
    testCharsAfter = test.replace('Velociraptor', dinosaurUpperCased),
    halfOftest = testCharsAfter.slice(0, testCharsAfter.length/2);

console.log(halfOftest);
