
var carts = [];         // Saved Shopping Carts list
var cartId = 1;         // Unique ID (this is increased each time you add a cart to shopping carts)

// Generage Select Options
// This function is used to initialize Select HTML Dom of Resources(Cloud, VM Size, CPU, Memory, Disk, Region).
function generateOptionHTML(items) {
  let html = '';
  if (!items) return html;
  for (let i = 0; i < items.length; i ++) {
      const itm = items[i];
      html += `<option value="${itm}">${itm}</option>`
  }
  return html;
}


// Update price HTML DOM which you can see on the website.
function updateDiskPrice () {
  const info = getSelectedDiskObject();
  const price = getDiskPrice(info);
  console.log(info, price);
  if(price){
      $('#disk_price').html('$' + price.toFixed(2) + ' / year');
  }
}

// This is event trigger.
// Called when you click remove button
function removeCart(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx > -1) carts.splice(idx, 1);
    updateCarts();
    updateDiskCarts();
    return false;
}

// Increate button clicked
function increaseCount(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1) return -1;
    carts[idx].count ++;
    if (carts[idx].cart === 'shopping') {
        carts[idx].price = getPrice(carts[idx]);
        updateCarts();
    }
    if (carts[idx].cart === 'disk') {
        carts[idx].price = getDiskPrice(carts[idx]);
        updateDiskCarts();
    }
    return false;
}

// Decrease button clicked
function decreaseYear(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].year <= 1) return -1;
    carts[idx].year --;
    if (carts[idx].cart === 'shopping') {
        carts[idx].price = getPrice(carts[idx]);
        updateCarts();
    }
    if (carts[idx].cart === 'disk') {
        carts[idx].price = getDiskPrice(carts[idx]);
        updateDiskCarts();
    }
    return false;
}

// Increate button clicked
function increaseYear(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].year >= 3) return -1;
    carts[idx].year ++;
    if (carts[idx].cart === 'shopping') {
        carts[idx].price = getPrice(carts[idx]);
        updateCarts();
    }
    if (carts[idx].cart === 'disk') {
        carts[idx].price = getDiskPrice(carts[idx]);
        updateDiskCarts();
    }
    return false;
}

// Decrease button clicked
function decreaseCount(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].count <= 0) return -1;
    carts[idx].count --;
    if (carts[idx].cart === 'shopping') {
        carts[idx].price = getPrice(carts[idx]);
        updateCarts();
    }
    if (carts[idx].cart === 'disk') {
        carts[idx].price = getDiskPrice(carts[idx]);
        updateDiskCarts();
    }
    return false;
}

// Add Cart button clicked
function addBtnClicked() {
    const info = getSelectedObject();
    if (!validateInfo(info, true)) return;
    const price = getPrice(info);
    
    carts.push({
        id: cartId ++,
        price,
        cart: 'shopping',
        ...info
    });

    updateCarts();
}

function addDiskBtnClicked() {
    const info = getSelectedDiskObject();
    if (!validateDiskInfo(info, true)) return;
    const price = getDiskPrice(info);
    
    carts.push({
        id: cartId ++,
        price,
        cart: 'disk',
        ...info
    });

    updateDiskCarts();
}
