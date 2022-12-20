// Resource types depend on VM Size
var vmObject = [{
    CPU: 1,
    Memory: 4,
    Disk: [
        { type: '30GB Disk, 20GB Ephemeral disk', size: 50 },
        { type: '20GB Disk, 10GB Ephemeral disk', size: 30 },
    ]
}, {
    CPU: 2,
    Memory: 8,
    Disk: [
        { type: '30GB Disk, 40GB Ephemeral disk', size: 70 },
        { type: '20GB Disk, 30GB Ephemeral disk', size: 50 },
        { type: '40GB Disk, 5GB Ephemeral disk', size: 45 },
        { type: '50GB Disk, 0GB Ephemeral disk', size: 50 },
    ]
}, {
    CPU: 4,
    Memory: 16,
    Disk: [
        { type: '30GB Disk, 60GB Ephemeral disk', size: 90 },
        { type: '20GB Disk, 50GB Ephemeral disk', size: 70 },
        { type: '20GB Disk, 50GB Ephemeral disk', size: 70 },
    ]
}, {
    CPU: 8,
    Memory: 32,
    Disk: [
        { type: '30GB Disk, 100GB Ephemeral disk', size: 130 },
        { type: '20GB Disk, 90GB Ephemeral disk', size: 110 },
    ]
}];

var regions = ['WJU', 'PHX'];                                     // Region types

// This function returns selected resources (Which Cpu type is selected, Which Disk type is selected, Which Cloud Provider ...)
// return type is object.
function getSelectedObject() {
    const cloud = 'onprem';
    const region = $('#region').val();
    const cpu = parseFloat($('#cpu').val()) || 0;
    const memory = parseFloat($('#memory').val()) || 0;
    const count = parseInt($('#count').val()) || 0;
    const year = 1;

    return { cloud, count, cpu, memory, region, year };
}

function getSelectedDiskObject() {
    const region = $('#disk_region').val();
    const disk = parseFloat($('#disk').val()) || 0;
    const count = parseInt($('#disk_count').val()) || 0;
    const year = 1;
    
    const disk_dom = document.getElementById('disk');
    const type = disk_dom.options[disk_dom.selectedIndex].text;

    return { type, count, disk, region, year };
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
            html += `<option value="${disk.size}">${disk.type}</option>`;
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
                
        price = (0.0007 * disk * year * 8760) * info.count;
    }
    return price;
}

// Update price HTML DOM which you can see on the website.
function updatePrice () {
    const info = getSelectedObject();
    const price = getPrice(info);
    console.log(info, price);
    if(price){
        $('#price').html('$' + (price).toFixed(2) + ' / year');
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
    const _carts = carts.filter(cart => cart.cart === 'shopping')
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
    const _carts = carts.filter(cart => cart.cart === 'disk');
    for(let i = 0; i < _carts.length; i ++) {
        const cart = _carts[i];
        html += `<tr class="cart-item">
        <td>${cart.type}</td>
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