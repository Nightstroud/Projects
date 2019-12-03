

let activeItem;

function addBox () {
    document.getElementById("boxes").innerHTML += `<div class="box" style="position: absolute"></div>`;
    createBox();
}
function createBox () {
    $(".box").draggable({
        containment: "parent",
        position: "absolute",
        start: function(event, ui) {
            activeItem = $(this);
        },
        stop: function (event, ui) {
            $(".optionspanel").show();
            let newy = $(activeitem).css("top");
            newy = newy.split("p")[0];
            newy - newy - 30;
            let newx = $(activeItem).css("left");
            $("optionspanel").css("top", `${newy}px`);
            $("optionspanel").css("left", `${newx}`);
        }
    });
    $(".box").resizable({
            handles: "n, e, s, w, ne, nw, se, sw"
    }
    );
}

function delitem() {
    $(activeItem).remove();
    $("optionspanel").hide();
}


function bringToFront () {
    let childrins = $(".main").children();
    let numa = childrins.length + 1;
    let zarray = [];
    for ( let i = 0; i < childrins.length; i++) {
        let myz = $(childrins[i]).css("z-index");
        zarray.push(myz);
    }
    let highnum = Math.max(zarray);
    $(activeItem).css("z-index", `${numa}`);
}













