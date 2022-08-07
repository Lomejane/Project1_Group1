const lens = document.querySelector('.magnifier-lens');
const product_img = document.querySelector('.product-img img');
const magnified_img = document.querySelector('.magnified-img');

function magnify(product_imgf, magnified_img) {
    product_img.addEventListener('mousemove', moveLens)

}

function moveLens() {
    console.log("X : " + e.pageX +" Y:" + e.pageY);
    let x, y, cx, cy;
}

magnify (
    product_img, magnified_img
)