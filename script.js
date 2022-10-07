var vmObject = [{
    cloud: "AWS",
    size: "Small",
    types: {
        "CPU": ["1CPU"],
        "Memory": [".5GB", "1GB", "3.5GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    }
}, {
    cloud: "AWS",
    size: "Small",
    types: {
        "CPU": ["1CPU"],
        "Memory": [".5GB", "1GB", "3.5GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    }
}, {
    cloud: "AWS",
    size: "Medium",
    types: {
        "CPU": ["1CPU"],
        "Memory": ["8GB", "16GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    }
}, {
    cloud: "AWS",
    size: "Large",
    types: {
        "CPU": ["1CPU"],
        "Memory": ["7GB", "8GB", "14GB", "16GB", "28GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    }
}, {
    cloud: "Azure",
    size: "X-Large",
    types: {
        "CPU": ["1CPU"],
        "Memory": [".5GB", "1GB", "3.5GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    }
}, {
    cloud: "Azure",
    size: "XX-Large",
    types: {
        "CPU": ["1CPU"],
        "Memory": [".5GB", "1GB", "3.5GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    }
}, {
    cloud: "Onprem",
    size: "X-Large",
    types: {
        "CPU": ["1CPU"],
        "Memory": ["5GB", "10GB", "13.5GB"],
        "Disk": ["50GB", "100GB", "200GB"]
    }
}];
var regions = ['West', 'East']

var carts = [];
var cartId = 1;
var selectedId = -1;

function getCloudTypes () {
    const items = vmObject.map(itm => itm.cloud);
    return [...new Set(items)];
}

function getVMSizes (cloud) {
    const items = vmObject.filter(itm => itm.cloud === cloud).map(itm => itm.size);
    return [...new Set(items)];
}

function getVMObject (cloud, size) {
    return vmObject.find(itm => itm.cloud === cloud && itm.size === size);
}

function generateOptionHTML(items) {
    let html = '';
    if (!items) return html;
    for (let i = 0; i < items.length; i ++) {
        const itm = items[i];
        html += `<option value="${itm}">${itm}</option>`
    }
    return html;
}

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

function initRegion() {
    let html = '<option value="">Select Region</option>' + generateOptionHTML(regions);
    $('#region').html(html);
}

function initCloudSelect () {
    const clouds = getCloudTypes();
    let html = '<option value="">Select Cloud Provider</option>' + generateOptionHTML(clouds);
    $('#cloud').html(html);
}

function initVMSize () {
    const cloud = $('#cloud').val();
    const VMSizes = getVMSizes(cloud);
    let html = '<option value="">Select VM Size</option>' + generateOptionHTML(VMSizes);
    $('#size').html(html);

    initComponents();
}

function initRegionActive() {
    const cloud = $('#cloud').val();
    if (cloud.toLocaleLowerCase() === 'onprem') {
        $('#region').val('');
        $('#region').attr('disabled', true);
    } else {
        $('#region').attr('disabled', false);
    }
}

function initComponents () {
    const cloud = $('#cloud').val(), size = $('#size').val();
    const keys = ['cpu', 'memory', 'disk']
    const labels = ['CPU', 'Memory', 'Disk']
    keys.forEach((key, idx) => {
        let html = `<option value="">Select ${labels[idx]}</option>`
        const obj = getVMObject(cloud, size);
        if (obj) {
            const items = obj.types[labels[idx]];
            html += generateOptionHTML(items);
        }        
        $(`#${key}`).html(html);
    })
}

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

function getPrice(info) {
    let price = 0;
    
    if (validateInfo(info)) {
        const idx = regions.indexOf(info.region);
        const cpu = parseInt(info.cpu) || 0;
        const memory = parseInt(info.memory) || 0;
        const disk = parseInt(info.disk) || 0;
        price = ((cpu * 200) + (memory * 20) + (disk * 3)) * (idx + 2) * info.count;
    }
    return price;
}

function updatePrice () {
    const info = getSelectedObject();
    const price = getPrice(info);
    $('#price').html('$' + price);
}

function changedInput(type) {
    const value = $('#' + type).val();
    if (!value) $('#' + type + '-error').addClass('show');
    else $('#' + type + '-error').removeClass('show');

    switch (type) {
        case 'cloud':
            initVMSize();
            initRegionActive();
            break;
        case 'size':
            initComponents();
            break;
    }
    updatePrice();
}

function openModal(type, id) {
    if (type === 'add') {
        $('#modal-btn').html('Add Cart');        
    } else {
        const cart = carts.find(itm => itm.id == id);
        if (!cart) return;
        selectedId = id;

        $('#cloud').val(cart.cloud);
        initVMSize();
        initRegionActive();
        $('#size').val(cart.size);
        initComponents();
        $('#cpu').val(cart.cpu);
        $('#memory').val(cart.memory);
        $('#disk').val(cart.disk);
        $('#quantity').val(cart.quantity);
        $('#count').val(cart.count);
        $('#region').val(cart.region);
        updatePrice();

        $('#modal-btn').html('Update Cart');
    }
    $('#cart-modal').modal();
}

function updateCarts() {
    let html = '';
    for(let i = 0; i < carts.length; i ++) {
        const cart = carts[i];
        html += `<tr onclick="openModal('edit', ${cart.id})">
        <td class="item">
            <div class="d-flex align-items-start">
                <img src="./img/itm.webp" alt="">
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
        <td>${cart.count}</td>
        <td class="font-weight-bold">
            $${cart.price}
            <div class="cart-remove close" onclick="removeCart(${cart.id})">&times;</div>
        </td>
    </tr>`
    }
    if (!carts.length) {
        html = '<tr><td colspan=7><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#carts').html(html);
    $('#total-count').html(carts.length);
    $('#total-price').html('$' + carts.reduce((sum, itm) => sum + itm.price, 0));
}

function removeCart(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx > -1) carts.splice(idx, 1);
    updateCarts();
    return false;
}

function modalBtnClicked() {
    const label = $('#modal-btn').html();
    const info = getSelectedObject();
    if (!validateInfo(info, true)) return;
    const price = getPrice(info);
    if (label === 'Add Cart') {
        carts.push({
            id: cartId ++,
            price,
            ...info
        });
    } else {
        const idx = carts.findIndex(itm => itm.id == selectedId);
        if (idx > -1) {
            carts[idx] = {
                ...carts[idx],
                price,
                ...info
            }
        }
    }
    updateCarts();
    $('#cart-modal').modal('hide');
}

$(function() {
    $('#add-cart').click(() => openModal('add'));
    $('#modal-btn').click(() => modalBtnClicked());

    initRegion();
    initCloudSelect();
    initVMSize();
    updatePrice();
    updateCarts();
})