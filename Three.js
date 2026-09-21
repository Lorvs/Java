document.getElementById("firstName").onblur = function() {
    this.value = this.value.toUpperCase();
};

document.getElementById("lastName").onblur = function() {
    this.value = this.value.toUpperCase();
};

document.getElementById("section").onblur = function() {
    this.value = this.value.toUpperCase();
};

function addRow() {
    var table = document.getElementById("table");
    var row = table.insertRow();
    row.insertCell(0).innerHTML = "ACTIVITY 3";
    row.insertCell(1).innerHTML = "NUMBER3";
}

function removeItem() {
    var items = document.getElementById("items");
    items.remove(items.selectedIndex);
}

function zoom(image) {
    if (image.style.width == "300px") {
        image.style.width = "180px";
    } else {
        image.style.width = "300px";
    }
}

function changeBackground() {
    var colors = ["lightgreen", "lightblue", "pink"];
    var number = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[number];
}