const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const getUrl = (product_id) => `https://www.amazon.in/Google-pixel-6-Pixel-Cover/dp/${product_id}/crid=3QFN6IHJYBB26&keywords=google+pixel&qid=1663351894&sprefix=google+p%2Caps%2C556&sr=8-1`

async function prices(product_id){
    const url = getUrl(product_id);
    const {data} = await axios.get(url);

    const dom = new JSDOM(data);
    const product=dom.window.document.querySelector('#productTitle').textContent.trim();
    const price=dom.window.document.querySelector('.a-offscreen').textContent;
    const seller = dom.window.document.querySelector('#shipsFromSoldByInsideBuyBox_feature_div .a-link-normal').textContent;
    const rating = dom.window.document.querySelector('i .a-icon-alt').textContent;

    console.log("Product name:",product);
    console.log("Price:",price);
    console.log("Seller:",seller);
    console.log("Average Rating:",rating );

    
    // console.log(data);
}
prices(`B09G9BL5CP`);