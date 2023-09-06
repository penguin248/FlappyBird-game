var hole = document.getElementById ("hole");
var game = document.getElementById ("game");

hole.addEventListener ("animationiteration", RanHole)
function RanHole () {
    var random = -((Math.random()*350)+150)
    hole.style.top = random+"px";
}