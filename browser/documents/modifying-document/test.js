
let data = {
    /* when i pick the key, should be automatically be the ul */
    // try to find a way to loop inside the value and if it is a key it is <ul> and if it is a value it is <li>
    //working with loop and objects.
    //by using object.keys, values , entries will return an array.
    //can i loop on the array ? and check if it is a new array then get the key else the values.
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

console.log(Object.entries(data));

// in a loop if it has a key it turns into a <ul>element.