var friends = ['Sabina', 'Trevor', 'Blake', 'Cassie', 'Ben']
var locations = ['Basement', 'Attic', 'Garage', 'Bathroom', 'Back Yard', 'Drive Way', 'Kitchen', 'Bedroom', 'Guest House', 'Car']
var weapon = ['Baseball Bat', 'Brick', 'Golf Club', 'Lead Pipe', 'TV Remote', 'Pillow', 'Beer Bottle', 'Paper Clip', 'Guitar Pick', 'USB Cable', 'Toothbrush', 'Boot', 'Bike Lock', 'Dog Leash', 'Glass Shard', 'Statue', 'Musket', 'Knife', 'Crossbow', 'Chainsaw']



for (var i = 0; i < 100; i++) {
    var h3 = document.createElement("h3");
    document.body.appendChild(h3)
    h3.innerText = 'Accusation ' + i + ':';

    h3.addEventListener("click", getItems(i)) ;  
    
}


function getItems (i) {
    var friendsAll = friends[i%5]
    var locationsAll = locations[i%10]
    var weaponAll = weapon[i%20]
    return getAlert;

    function getAlert() {
        alert('I accuse ' + friends[i%5] + ', with the ' + weapon[i%20] + ' in the ' + locations[i%10] + '!');
    }
}


