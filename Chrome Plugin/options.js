let page = document.getElementById("buttonDiv");
const kButtonColors = ["#3AA757", "#000000", "#ffffff"];

function ConstructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement("buttons");
        button.style.backgroundColor = item;
        button.addEventListener('click', function(){
            chrome.storage.sync.set({color: item}, function () {
                console.log("color is " + item);
            });
        });
        page.appendChild(button);
    }
}
ConstructOptions(kButtonColors);