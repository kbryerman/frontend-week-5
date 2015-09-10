/*

  Your Javascript here

*/

var bearUrls = ["http://www.ecoplum.com/shop/images/wetpaint/bears.jpg", "http://www.wesh.com/image/view/-/5857112/medRes/2/-/maxh/460/maxw/620/-/bfploqz/-/Black-bear-blurb-jpg.jpg", "http://thesecretbookclub.org/wp-content/uploads/2015/02/Power-Pet-Bears.jpg"];

function placeBear() {
    var bearImg = document.getElementsByClassName("bear-holding-area");
    console.log(bearImg[0]);
    console.log(bearUrls[0]);
    bearImg[0].src = bearUrls[0];
    bearShift();
}

function bearShift() {
    var shuffledBear = bearUrls.shift(1);
    bearUrls.push(shuffledBear);
}
