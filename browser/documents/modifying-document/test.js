
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
//create a map for the first one.
//create a map for the second one.

let map = new Map(Object.entries(data));

//here i can create <ul> for value


for (key of map.keys()) {
    console.log(key);
}

for (val of map.values()) {
    if (typeof val == 'object') {
        let map2 = new Map(Object.entries(val));
        for (key of map2.keys())
        {
            console.log(key);
        }
        for (val of map2.values())
        {
            console.log(val);
        }
        // console.log(map2);
    }
    console.log(val);


}
