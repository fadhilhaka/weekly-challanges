//hitung-karakter
function count() {
    array_elements = ["2", "1", "2", "2", "3", "4", "3", "3", "3", "5"];

    array_elements.sort(function(value1, value2) {return value1 > value2 });

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                console.log(current);
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current);
    }
}