var item_array = ["item1", "item2", "item3", "item4","item5", "item6", "item7", "item8"];

var cardval = ["url(apple.gif)", "url(bell.gif)", "url(crown.gif)", "url(diamond.gif)"];

var apple = [];
var bell = [];
var crown = [];
var diamond = [];

var last = "";

var click_count = 0;

var clicked = [];

var checkclick = false;

var start = false;

document.getElementById('item1').addEventListener("click", function() {
    tiles("item1");
});
document.getElementById('item2').addEventListener("click", function() {
    tiles("item2");
});
document.getElementById('item3').addEventListener("click", function() {
    tiles("item3");
});
document.getElementById('item4').addEventListener("click", function() {
    tiles("item4");
});
document.getElementById('item5').addEventListener("click", function() {
    tiles("item5");
});
document.getElementById('item6').addEventListener("click", function() {
    tiles("item6");
});
document.getElementById('item7').addEventListener("click", function() {
    tiles("item7");
});
document.getElementById('item8').addEventListener("click", function() {
    tiles("item8");
});

function reset_deep() {
    var appler = 0, 
    bellr = 0, 
    crownr = 0, 
    diamondr = 0;

    apple = [];
    bell = [];
    crown = [];
    diamond = [];

    for (let i = 0; i < 8; i++) {
        var num = Math.floor(Math.random() * 4);

        if (num === 0) {
            if (appler < 2) {
                appler++;
                apple.push(item_array[i]);
            } else {
                i--;
            }
        } else if (num === 1) {
            if (bellr < 2) {
                bellr++;
                bell.push(item_array[i]);
            } else {
                i--;
            }
        } else if (num === 2) {
            if (crownr < 2) {
                crownr++;
                crown.push(item_array[i]);
            } else {
                i--;
            }
        } else if (num === 3) {
            if (diamondr < 2) {
                diamondr++;
                diamond.push(item_array[i]);
            } else {
                i--;
            }
        }
    }
}
window.onload = function() {
    reset_deep();


}

function reset_shallow() {
    last = "";
    click_count = 0;
    clicked = [];
    checkclick = false;

    start = true;
    for (i = 1; i < 9; i++) {
        var element = "item" + i;
        document.getElementById(element).style.backgroundColor = "blue";
    }
}

function startCard() {
    reset_shallow();
}
function tiles(tile) {

    for (let i =0; i < clicked.length; i++) {
        if (tile == clicked[i]) {
            checkclick = true;
            console.log("Repeat");
        }
    }

    if (!checkclick) {
        clicked.push(tile);

        if (tile == apple[0] || tile == apple[1]) {
            if (last.length > 2) {
                if (last == "apple") {
                    document.getElementById(tile).style.backgroundImage = cardval[0];
                    last = "";
                } else {
                    document.getElementById(tile).style.backgroundImage = cardval[0];
                    start = false;
                    setTimeout(location.reload(), 2000);
                }
            } else {
                document.getElementById(tile).style.backgroundImage = cardval[0];
                last = "apple";
            }
        } else if (tile == bell[0] || tile == bell[1]) {
            if (last.length > 2) {
                if (last == "bell") {
                    document.getElementById(tile).style.backgroundImage = cardval[1];
                    last = "";
                } else {
                    document.getElementById(tile).style.backgroundImage = cardval[1];
                    start = false;
                    setTimeout(location.reload(), 2000);
                }
            } else {
                document.getElementById(tile).style.backgroundImage = cardval[1];
                last = "bell";
            }
        } else if (tile == crown[0] || tile == crown[1]) {
            if (last.length > 2) {
                if (last == "crown") {
                    document.getElementById(tile).style.backgroundImage = cardval[2];
                    last = "";
                } else {
                    document.getElementById(tile).style.backgroundImage = cardval[2];
                    start = false;
                    setTimeout(location.reload(), 2000);
                }
            } else {
                document.getElementById(tile).style.backgroundImage = cardval[2];
                last = "crown";
            }
        } else if (tile == diamond[0] || tile == diamond[1]) {
            if (last.length > 2) {
                if (last == "diamond") {
                    document.getElementById(tile).style.backgroundImage = cardval[3];
                    last = "";
                } else {
                    document.getElementById(tile).style.backgroundImage = cardval[3];
                    start = false;
                    setTimeout(location.reload(), 2000);
                }
            } else {
                document.getElementById(tile).style.backgroundImage = cardval[3];
                last = "diamond";
            }
        }
        click_count++;
    }

    checkclick = false;
}
