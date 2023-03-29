var i = 0;
var t;

function fNext() {
    i++;
    if (i > 5) i = 0;
    var pageBanner = document.getElementById("page-banner");
    pageBanner.style.backgroundImage = "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(34,193,195,0) 50%, rgba(0,0,0,0.25) 100%), url('assets/image/banner/banner" + i + ".jpg')";
}

function start() {
    t = setInterval(fNext, 3500);
}
