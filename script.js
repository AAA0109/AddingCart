// Resource types depend on VM Size
var vmObject = {
    "Small": {
        "CPU": ["1CPU"],
        "Memory": [".5GB", "1GB", "3.5GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    },

    "Medium": {
        "CPU": ["2CPU"],
        "Memory": ["8GB", "16GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    },

    "Large": {
        "CPU": ["4CPU"],
        "Memory": ["7GB", "8GB", "14GB", "16GB", "28GB"],
        "Disk": ["50GB", "100GB", "200GB"]  
    },
    
    "X-Large": {
        "CPU": ["8CPU"],
        "Memory": ["16GB", "28GB", "32GB", "64GB"],
        "Disk": ["50GB", "100GB", "200GB"]
      },

    "XX-Large": {
      "CPU": ["16CPU"],
      "Memory": ["32GB", "64GB"],
      "Disk": ["50GB", "100GB", "200GB"]
    }
}

// Static Resource Prices per cloud provider and Region
/*

*/
var prices = {
    "AWS": [{           // AWS-West Region
        cpu: 5000,
        memory: 300,
        disk: 20
    }, {                // AWS-East Region
        cpu: 8000,
        memory: 500,
        disk: 40
    }],
    "Azure": [{         // Azure-West Region
        cpu: 3500,
        memory: 250,
        disk: 15
    }, {                // Azure-East Region
        cpu: 6000,
        memory: 400,
        disk: 20
    }],
    "Onprem": [{        // Onprem Region
        cpu: 12000,
        memory: 1100,
        disk: 70
    }]
}
var clouds = ['AWS', 'Azure', 'Onprem'];                            // Cloud provider types
var sizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large'];    // VM Size types
var regions = ['West', 'East'];                                     // Region types

var carts = [];         // Saved Shopping Carts list
var cartId = 1;         // Unique ID (this is increased each time you add a cart to shopping carts)

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
    const cloud = $('#cloud').val();
    const size = $('#size').val();
    const region = $('#region').val();
    const count = parseInt($('#count').val());
    const cpu = $('#cpu').val();
    const memory = $('#memory').val();
    const disk = $('#disk').val();

    return { cloud, size, count, cpu, memory, disk, region };
}

// This function is used to initialize Region Select HTML DOM.
function initRegion() {
    let html = '<option value="">Select Region</option>' + generateOptionHTML(regions);
    $('#region').html(html);
}

// This function is used to initialize Cloud Select HTML DOM.
function initCloudSelect () {
    let html = '<option value="">Select Cloud Provider</option>' + generateOptionHTML(clouds);
    $('#cloud').html(html);
}

// This function is used to initialize VM Size Select HTML DOM.
function initVMSize () {
    let html = '<option value="">Select VM Size</option>' + generateOptionHTML(sizes);
    $('#size').html(html);
}

// This function checks cloud provider and if it is 'onprem', then disable the region Select HTML DOM.
function initRegionActive() {
    const cloud = $('#cloud').val();
    if (cloud.toLocaleLowerCase() === 'onprem') {
        $('#region').val('');
        $('#region').attr('disabled', true);
    } else {
        $('#region').attr('disabled', false);
    }
}

// This function is used to initialize Recourses Select HTML DOM (CPU, Memory, Disk)
function initComponents () {
    const cloud = $('#cloud').val(), size = $('#size').val();
    const keys = ['cpu', 'memory', 'disk']
    const labels = ['CPU', 'Memory', 'Disk']
    keys.forEach((key, idx) => {
        let html = `<option value="">Select ${labels[idx]}</option>`
        const obj = getVMObject(size);
        if (obj) {
            const items = obj[labels[idx]];
            html += generateOptionHTML(items);
        }        
        $(`#${key}`).html(html);
    })
}

// This function checks if you select all infos
// Also validate the quantity of the carts.
function validateInfo (info, show_error = false) {
    const keys = ['cloud', 'size', 'memory', 'disk', 'cpu', 'count', 'region'];
    let flag = true;
    for (let i = 0; i < keys.length; i ++) {
        const key = keys[i];
        if (key === 'region') {
            if (info.cloud.toLocaleLowerCase() === 'onprem') {
                $('#' + key + '-error').removeClass('show');
                continue;
            }
        }
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

// Estimate the sub price for selected resources.
function getPrice(info) {
    let price = 0;
    
    if (validateInfo(info)) {
        let idx = regions.indexOf(info.region);
        if(idx === -1) idx = 0;
        const cloud = info.cloud;
        const cpu = parseFloat(info.cpu) || 0;
        const memory = parseFloat(info.memory) || 0;
        const disk = parseFloat(info.disk) || 0;
        price = ((cpu * prices[cloud][idx].cpu) + (memory * prices[cloud][idx].memory) + (disk * prices[cloud][idx].disk)) * info.count;
    }
    return price;
}

// Update price HTML DOM which you can see on the website.
function updatePrice () {
    const info = getSelectedObject();
    const price = getPrice(info);
    $('#price').html('$' + price);
}

// This function is event trigger.
// This is handled when any resource type changed (Cloud, VM Size, CPU, Memory, Disk, Count)
function changedInput(type) {
    const value = $('#' + type).val();
    if (!value) $('#' + type + '-error').addClass('show');
    else $('#' + type + '-error').removeClass('show');

    switch (type) {
        case 'cloud':
            initRegionActive();
            break;
        case 'size':
            initComponents();
            break;
    }
    updatePrice();
}

// This function is used to update shopping cart table
// Generate HTML Code and replace DOM.
function updateCarts() {
    let html = '';
    for(let i = 0; i < carts.length; i ++) {
        const cart = carts[i];
        html += `<tr class="cart-item">
        <td class="item">
            <div class="d-flex align-items-start">
                <img src="./img/${cart.cloud}.png" alt="">
                <div class="item-cloud">
                    ${cart.cloud}
                </div>
            </div>
        </td>
        <td>${cart.size}</td>
        <td>${cart.region}</td>
        <td>${cart.cpu}</td>
        <td>${cart.memory}</td>
        <td>${cart.disk}</td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td class="font-weight-bold close-container">
            $${cart.price}
            <div class="cart-remove close" onclick="removeCart(${cart.id})">&times;</div>
        </td>
    </tr>`
    }
    if (!carts.length) {
        html = '<tr><td colspan=8><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#carts').html(html);
    $('#total-count').html(carts.length);
    $('#total-price').html('$' + carts.reduce((sum, itm) => sum + itm.price, 0));
}

// This is event trigger.
// Called when you click remove button
function removeCart(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx > -1) carts.splice(idx, 1);
    updateCarts();
    return false;
}

// Increate button clicked
function increaseCount(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1) return -1;
    carts[idx].count ++;
    carts[idx].price = getPrice(carts[idx]);
    updateCarts();
    return false;
}

// Decrease button clicked
function decreaseCount(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].count <= 0) return -1;
    carts[idx].count --;
    carts[idx].price = getPrice(carts[idx]);
    updateCarts();
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
        ...info
    });

    updateCarts();
}

// Initializing function
// equals document.ready
$(function() {
    $('#add-btn').click(() => addBtnClicked());

    initRegion();
    initCloudSelect();
    initVMSize();
    initComponents();

    updatePrice();
    updateCarts();
})