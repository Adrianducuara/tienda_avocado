/* 
Author: Adrian Ducuara
Update: 2021/04/15
*/

const BASE_URL = `https://platzi-avo.vercel.app`;
const formatPrice = (price) => {
    return price
}


fetch(`${BASE_URL}/api/avo`)
.then(response => response.json())
.then(responseJson => {
    responseJson.data.forEach(item => {
        const target = document.createElement('div')
        target.className = 'target'

        const img = document.createElement('img')
        img.src = `${BASE_URL}${item.image}`

        const target_footer = document.createElement('div')
        target_footer.className = 'target-footer'

        const name_product = document.createElement('h3')
        name_product.textContent = item.name

        const price_product = document.createElement('small')
        price_product.textContent = formatPrice(item.price)

        const main = document.querySelector('.container-products')
        
        main.appendChild(target)
        target.append(img, target_footer)
        target_footer.append(name_product, price_product)
    });
})