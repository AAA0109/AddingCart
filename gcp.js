// Resource types depend on VM Size
var vmObject = [{
    CPU: 1,
    Memory: 4,
    Disk: [
        { label: '30GB Disk, 20GB Ephemeral disk', size: 50 },
        { label: '20GB Disk, 10GB Ephemeral disk', size: 30 },
    ]
}, {
    CPU: 2,
    Memory: 8,
    Disk: [
        { label: '30GB Disk, 40GB Ephemeral disk', size: 70 },
        { label: '20GB Disk, 30GB Ephemeral disk', size: 50 },
        { label: '40GB Disk, 5GB Ephemeral disk', size: 45 },
        { label: '50GB Disk, 0GB Ephemeral disk', size: 50 },
    ]
}, {
    CPU: 4,
    Memory: 16,
    Disk: [
        { label: '30GB Disk, 60GB Ephemeral disk', size: 90 },
        { label: '20GB Disk, 50GB Ephemeral disk', size: 70 },
        { label: '20GB Disk, 50GB Ephemeral disk', size: 70 },
    ]
}, {
    CPU: 8,
    Memory: 32,
    Disk: [
        { label: '30GB Disk, 100GB Ephemeral disk', size: 130 },
        { label: '20GB Disk, 90GB Ephemeral disk', size: 110 },
    ]
}];

var years = [1, 2, 3];
var regions = ['WJU', 'PHX'];                                     // Region types

var carts = [];         // Saved Shopping Carts list
var cartId = 1;         // Unique ID (this is increased each time you add a cart to shopping carts)

var totalCartPrice = 0;

// Get Resource types by the given VM Size
function getVMObject (size) {
    return vmObject[size];
}

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

// This function returns selected resources (Which Cpu type is selected, Which Disk type is selected, Which Cloud Provider ...)
// return type is object.
function getSelectedObject() {
    const cloud = 'onprem';
    const region = $('#region').val();
    const cpu = parseInt($('#cpu').val()) || 0;
    const memory = parseInt($('#memory').val()) || 0;
    const disk = parseInt($('#disk').val()) || 0;
    const count = parseInt($('#count').val()) || 0;
    const year = 1;

    return { cloud, count, cpu, memory, disk, region, year };
}

function getSelectedDiskObject() {
    const cloud = 'onprem';
    const region = $('#disk_region').val();
    const disk = parseInt($('#disk').val()) || 0;
    const count = parseInt($('#disk_count').val()) || 0;
    const year = 1;
    
    const disk_dom = document.getElementById('disk');
    const label = disk_dom.options[disk_dom.selectedIndex].text;

    return { cloud, label, count, disk, region, year };
}

// This function is used to initialize Region Select HTML DOM.
function initRegion() {
    let html = '<option value="">Select Region</option>' + generateOptionHTML(regions);
    $('#region').html(html);
    $('#disk_region').html(html);
}

function initCPU() {
    let html = '<option value="">Select CPU</option>';
    for (let i = 0; i < vmObject.length; i ++) {
        const cpu = vmObject[i].CPU;
        html += `<option value="${cpu}">${cpu} Cores</option>`;
    }
    $('#cpu').html(html);
    initMemory();
}

function initMemory() {
    const cpu = $('#cpu').val();
    const obj = vmObject.find(itm => itm.CPU == cpu);
    let html = `<option value="">Select CPU first</option>`;
    if(obj) {
        html = '<option value="">Select Memory</option>';
        html += `<option value="${obj.Memory}">${obj.Memory} GB</option>`;
    }
    $('#memory').html(html);
    initDisk();
}

function initDisk() {
    const cpu = $('#cpu').val();
    const obj = vmObject.find(itm => itm.CPU == cpu);
    let html = `<option value="">Select CPU first</option>`;
    if(obj) {
        html = '<option value="">Select Disk</option>';
        for (let i = 0; i < obj.Disk.length; i ++) {
            const disk = obj.Disk[i];
            html += `<option value="${disk.size}">${disk.label}</option>`;
        }
    }
    $('#disk').html(html);
}


// This function is used to initialize Recourses Select HTML DOM (CPU, Memory, Disk)
function initComponents () {
    initRegion();
    initCPU();
}

// This function checks if you select all infos
// Also validate the quantity of the carts.
function validateInfo (info, show_error = false) {
    const keys = ['cloud', 'cpu', 'memory', 'count', 'region'];    
    let flag = true;
    for (let i = 0; i < keys.length; i ++) {
        const key = keys[i];
        if((key !== 'count' && info[key]) || (key === 'count' && info[key] > 0)) {
            $('#' + key + '-error').removeClass('show');
        }
        else {
            if(show_error)
                $('#' + key + '-error').addClass('show');
            flag = false;
        }
    }
    return flag;
}

function validateDiskInfo (info, show_error = false) {
    const keys = ['disk', 'count', 'region'];    
    let flag = true;
    for (let i = 0; i < keys.length; i ++) {
        const key = keys[i];
        let id = key;
        if (id !== 'disk') id = 'disk_' + id;
        if((key !== 'count' && info[key]) || (key === 'count' && info[key] > 0)) {
            $('#' + id + '-error').removeClass('show');
        }
        else {
            if(show_error)
                $('#' + id + '-error').addClass('show');
            flag = false;
        }
    }
    return flag;
}

// Estimate the sub price for selected resources.
function getPrice(info) {
    let price = 0;
    if (validateInfo(info)) {
        const cpu = parseFloat(info.cpu) || 0;
        const year = info.year;
                
        price = (0.0667 * cpu * year * 8760) * info.count;
    }
    return price;
}

// Estimate the sub price for selected resources.
function getDiskPrice(info) {
    let price = 0;
    if (validateDiskInfo(info)) {
        const disk = parseFloat(info.disk) || 0;
        const year = info.year;
                
        price = (0.0667 * disk * year * 8760) * info.count;
    }
    return price;
}

// Update price HTML DOM which you can see on the website.
function updatePrice () {
    const info = getSelectedObject();
    const price = getPrice(info);
    console.log(info, price);
    if(price){
        $('#price').html('$' + price.toFixed(2) + ' / year');
    }
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

// This function is event trigger.
// This is handled when any resource type changed (Cloud, VM Size, CPU, Memory, Disk, Count)
function changedInput(type) {
    const value = $('#' + type).val();
    if (!value) $('#' + type + '-error').addClass('show');
    else $('#' + type + '-error').removeClass('show');

    switch (type) {
        case 'cpu':
            initMemory();
            break;
        case 'memory':
            initDisk();
            break;    
    }
    updatePrice();
    updateDiskPrice();
}

// This function is used to update shopping cart table
// Generate HTML Code and replace DOM.
function updateCarts() {
    let html = '';
    const _carts = carts.filter(cart => cart.type === 'shopping')
    for(let i = 0; i < _carts.length; i ++) {
        const cart = _carts[i];
        html += `<tr class="cart-item">
        <td class="item">
            <div class="d-flex align-items-start">
                <img src="./img/${cart.cloud}.png" alt="">
                <div class="item-cloud">
                    ${cart.cloud}
                </div>
            </div>
        </td>
        <td>${cart.region}</td>
        <td>${cart.cpu} Cores / ${cart.memory}GB</td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseYear(${cart.id})">-</div>
                <div class="count">${cart.year}</div>
                <div class="increase-count" onclick="increaseYear(${cart.id})">+</div>
            </div>
        </td>
        <td class="font-weight-bold close-container">
            $${cart.price.toFixed(2)}
            <div class="cart-remove close" onclick="removeCart(${cart.id})">&times;</div>
        </td>
        </tr>`
    }
    if (!_carts.length) {
        html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#carts').html(html);
    $('#total-count').html(_carts.length);
    $('#total-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price), 0).toFixed(2));

    updateRealTotalPrice();
}

function updateDiskCarts() {
    let html = '';
    const _carts = carts.filter(cart => cart.type === 'disk');
    for(let i = 0; i < _carts.length; i ++) {
        const cart = _carts[i];
        html += `<tr class="cart-item">
        <td>${cart.label}</td>
        <td>${cart.disk}GB</td>
        <td>${cart.region}GB</td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseYear(${cart.id})">-</div>
                <div class="count">${cart.year}</div>
                <div class="increase-count" onclick="increaseYear(${cart.id})">+</div>
            </div>
        </td>
        <td class="font-weight-bold close-container">
            $${cart.price.toFixed(2)}
            <div class="cart-remove close" onclick="removeCart(${cart.id})">&times;</div>
        </td>
        </tr>`
    }
    if (!_carts.length) {
        html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#disk_carts').html(html);
    $('#total-disk-count').html(_carts.length);
    $('#total-disk-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price), 0).toFixed(2));
    
    updateRealTotalPrice();
}

function updateRealTotalPrice() {
    $('#total-real-price').html('$' + carts.reduce((sum, itm) => sum + parseFloat(itm.price), 0).toFixed(2))
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
    if (carts[idx].type === 'shopping') carts[idx].price = getPrice(carts[idx]);
    if (carts[idx].type === 'disk') carts[idx].price = getDiskPrice(carts[idx]);
    updateCarts();
    updateDiskCarts();
    return false;
}

// Decrease button clicked
function decreaseYear(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].year <= 1) return -1;
    carts[idx].year --;
    if (carts[idx].type === 'shopping') carts[idx].price = getPrice(carts[idx]);
    if (carts[idx].type === 'disk') carts[idx].price = getDiskPrice(carts[idx]);
    updateCarts();
    updateDiskCarts();
    return false;
}

// Increate button clicked
function increaseYear(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].year >= 3) return -1;
    carts[idx].year ++;
    if (carts[idx].type === 'shopping') carts[idx].price = getPrice(carts[idx]);
    if (carts[idx].type === 'disk') carts[idx].price = getDiskPrice(carts[idx]);
    updateCarts();
    updateDiskCarts();
    return false;
}

// Decrease button clicked
function decreaseCount(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].count <= 0) return -1;
    carts[idx].count --;
    if (carts[idx].type === 'shopping') carts[idx].price = getPrice(carts[idx]);
    if (carts[idx].type === 'disk') carts[idx].price = getDiskPrice(carts[idx]);
    updateCarts();
    updateDiskCarts();
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
        type: 'shopping',
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
        type: 'disk',
        ...info
    });

    updateDiskCarts();
}

// Initializing function
// equals document.ready
$(function() {
    $('#add-btn').click(() => addBtnClicked());
    $('#add-disk-btn').click(() => addDiskBtnClicked());
    
    initComponents();

    updatePrice();
    updateDiskPrice();
    updateCarts();
    updateDiskCarts();
})