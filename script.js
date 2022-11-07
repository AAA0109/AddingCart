// Resource types depend on VM Size
var vmObject = {
    "Small": {
        "CPU": [2,4,8,16,32],
        "Memory": [8,16,32,64,128],
        "CPU_yr" :[57.90, 59.16],
        "Memory_yr" :[50.30, 51.79],
        "CPU_ct" : [0.0199,0.0142],
        "Memory_ct" : [0.0027,0.0019],
    },

    "Medium": {
        "CPU": [4,8,16,30,60],
        "Memory": [16,32,64,120,240],
        "CPU_yr" :[57.90, 59.16],
        "Memory_yr" :[50.30, 51.79],
        "CPU_ct" : [0.0199,0.0142],
        "Memory_ct" : [0.0027,0.0019],
    },

    "Large": {
        "CPU": [1,2,4,8,16,32,64,96],
        "Memory": [4,7,15,30,60,120,240,360],
        "CPU_yr" :[57.90, 59.16],
        "Memory_yr" :[50.30, 51.79],
        "CPU_ct" : [0.0214,0.0136],
        "Memory_ct" : [0.0029,0.0018],
    },
    
    "X-Large": {
        "CPU": [2,4,8,16,32,48,64,80,96,128],
        "Memory": [8,16,32,64,128,192,156,320,384,512],
        "CPU_yr" :[57.90, 59.16],
        "Memory_yr" :[50.30, 51.79],
        "CPU_ct" : [0.0206,0.0105],
        "Memory_ct" : [0.003,0.0015],
      },

    "XX-Large": {
        "CPU": [40,80,96,160],
        "Memory": [961,1922,1434,3844],
        "CPU_yr" :[57.90, 59.16],
        "Memory_yr" :[50.30, 51.79],
        "CPU_ct" : [0.0137,0.0098],
        "Memory_ct" : [0.0018,0.0013],
  },
}


// Static Resource Prices per cloud provider and Region
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
var disks = ["HDD","SSD"];
var disk_size = ["100G","150G","200G"] ;
var disk_count = [1,2,3] ;
var disk_price = 0.02 ;

var years = [1,2,3];
var clouds = ['AWS', 'Azure','GCP' , 'Onprem'];                            // Cloud provider types
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
    const weekly = parseInt($('#weekly').val());
    const cpu_index = parseInt($('#cpu').val());
    const obj = getVMObject(size);
    let cpu = 0;
    let memory = 0;    
    if(obj && cpu_index >= 0){
        cpu = obj["CPU"][cpu_index];        
        memory = obj["Memory"][cpu_index];    
    }
    const year = $('#year').val();
    const disk = $('#disk').val();
    const disk_count = $('#disk_count').val();
    const disk_size = $('#disk_size').val();

    return { cloud, size, count, cpu, memory, cpu_index, disk, disk_count, disk_size, region, weekly, year };
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

function initDisk() {
    let html = '<option value="">Select Disk</option>' + generateOptionHTML(disks);
    $('#disk').html(html);

    let html_size = '<option value="">Select Disk Size</option>' + generateOptionHTML(disk_size);
    $('#disk_size').html(html_size);

    let html_count = '<option value="">Select Disk Count</option>' + generateOptionHTML(disk_count);
    $('#disk_count').html(html_count);

}

function initYear() {
    let html = '<option value="">Select Year</option>' ;
    for(let i=0; i<years.length; i++){
        html += `<option value="${years[i]}">${years[i]}</option>`
    }
    $('#year').html(html);
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
    let html;
    let html_memory;
    if (!size) {
        html = `<option value="">Please select VM size first</option>`
        html_memory = `<option value="">Please select VM size first</option>`
    }
    else if (!cloud){
        html = `<option value="">Please select Cloud Provider first</option>`
        html_memory = `<option value="">Please select Cloud Provider first</option>`
    } 
    else {
        html = `<option value="">Select CPU</option>`
        html_memory = `<option value="">Select Memory</option>`
    }
    const obj = getVMObject(size);
    if (cloud && obj) {
        for(let i=0; i<obj["CPU"].length; i++){
            const cpu = obj["CPU"][i];
            const memory = obj["Memory"][i];
            html += `<option value=${i}>${cpu}</option>`;
        }
    }        
    $(`#cpu`).html(html);

    if (cloud && obj) {
        for(let i=0; i<obj["CPU"].length; i++){
            const memory = obj["Memory"][i];
            html_memory += `<option value=${i}>${memory}</option>`;
        }
    } 
    $(`#memory`).html(html_memory);
}

// This function checks if you select all infos
// Also validate the quantity of the carts.
function validateInfo (info, show_error = false) {
    const keys = ['cloud', 'size', 'cpu', 'memory', 'count', 'region', 'year'];    
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
    if((info["disk"])!="") {
        const keys_disk = ['disk_count', 'disk_size'];
        for (let i = 0; i < keys_disk.length; i ++) {
            const key_disk = keys_disk[i];
            if (key_disk === 'region') {
                if (info.cloud.toLocaleLowerCase() === 'onprem') {
                    $('#' + key_disk + '-error').removeClass('show');
                    continue;
                }
            }
            if((key_disk !== 'count' && info[key_disk]) || (key_disk === 'count' && info[key_disk] > 0)) {
                $('#' + key_disk + '-error').removeClass('show');
            }
            else {
                if(show_error)
                    $('#' + key_disk + '-error').addClass('show');
                flag = false;
            }
        }    
    }
    return flag;
}

// Estimate the sub price for selected resources.
function getPrice(info) {
    let price = 0;
    let discount_price = ["-","-","-"] ;
    if (validateInfo(info)) {
        let idx = regions.indexOf(info.region);
        if(idx === -1) idx = 0;
        const cloud = info.cloud;
        const cpu = parseFloat(info.cpu) || 0;
        const memory = parseFloat(info.memory) || 0;
        const disk = parseFloat(info.disk) || 0;
        const weekly = info.weekly;
        const year = info.year;        
        const obj = getVMObject(info.size);

        const year_hours = 52 * weekly;

        price = 0;
        

        for(let i=0; i<year; i++){
            const year_n = i==2?1:0 ;
            let cpu_yr = obj["CPU_yr"][year_n];
            let memory_yr = obj["Memory_yr"][year_n];

            let cpu_ct = obj["CPU_ct"][year_n];
            let memory_ct = obj["Memory_ct"][year_n];
            if(cloud=="Onprem"){
                cpu_yr = 0 ;
                memory_yr = 0 ;
            }    
            
            let year_price = cpu_ct*year_hours*(100-cpu_yr)/100 + memory_ct*year_hours*(100-memory_yr)/100 //((cpu * prices[cloud][idx].cpu) + (memory * prices[cloud][idx].memory) + (disk * prices[cloud][idx].disk)) * info.count;
            year_price  = year_price*info.count * (info.cpu_index+1);
            year_price = parseFloat(year_price.toFixed(2));

            let year_discount = cpu_ct*year_hours*(cpu_yr)/100 + memory_ct*year_hours*(memory_yr)/100;
            year_discount  = year_discount*info.count * (info.cpu_index+1);
            discount_price[i]='$'+year_discount.toFixed(2) ;
            price+= year_price;
        }

    }
    return {price, discount_price};
}

// Update price HTML DOM which you can see on the website.Rafael H
function updatePrice () {
    const info = getSelectedObject();
    const price = getPrice(info);
    $('#price').html('$' + price.price.toFixed(2));
    const yearly = info.weekly * 52;
    $('#hours').html(yearly + "hr");
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
            initComponents();
            break;
        case 'size':
            initComponents();
            break;
        case 'cpu':
            $('#memory').val($('#cpu').val());
            break;
        case 'memory':
            $('#cpu').val($('#memory').val());
            break;
    
    }
    updatePrice();
}


// This function is used to update shopping cart table
// Generate HTML Code and replace DOM.
function updateCarts() {
    let html = '';
    let html_disk = '';
    let total_disk_count = 0 ;
    let total_dist_size = 0;
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
        <td>${cart.year}</td>
        <td>${cart.price.discount_price[0]}</td>
        <td>${cart.price.discount_price[1]}</td>
        <td>${cart.price.discount_price[2]}</td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td class="font-weight-bold close-container">
            $${cart.price.price.toFixed(2)}
            <div class="cart-remove close" onclick="removeCart(${cart.id})">&times;</div>
        </td>
        </tr>`

        if(cart.disk!=""){
            total_disk_count += parseInt(cart.disk_count);
            let disk_p = parseInt(cart.disk_size.replace("G",""))*parseInt(cart.year)*parseInt(cart.weekly)*52*disk_price*parseInt(cart.disk_count);
            total_dist_size += disk_p;
            html_disk += `<tr class="cart-item">
            <td class="item">
                <div class="d-flex align-items-center">
                    <img src="./img/disk.jpg" alt="">
                    <div class="item-cloud">
                        ${cart.disk}
                    </div>
                </div>
            </td>
            <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseDiskCount(${cart.id})">-</div>
                <div class="count">${cart.disk_count}</div>
                <div class="increase-count" onclick="increaseDiskCount(${cart.id})">+</div>
            </div>
            </td>
            <td class="font-weight-bold close-container">
                ${cart.disk_size}
            </td>
            <td class="font-weight-bold close-container">
                $${disk_p}
                <div class="cart-remove close" onclick="removeDisk(${cart.id})">&times;</div>
            </td>
            </tr>`
        }
    }
    if (!carts.length) {
        html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
        html_disk = '<tr><td colspan=4> <hr class="mt-0">No disks<hr class="mb-0"> </td></tr>'
    }
    $('#carts').html(html);
    $('#disks').html(html_disk);
    $('#total-count').html(carts.length);
    $('#total-price').html('$' + carts.reduce((sum, itm) => sum + itm.price.price, 0).toFixed(2));

    $('#total-disk-count').html(total_disk_count);
    $('#total-disk-price').html("$"+total_dist_size);

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
function decreaseDiskCount(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].disk_count <= 0) return -1;
    carts[idx].disk_count --;
    updateCarts();
    return false;
}

function removeDisk(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1 || carts[idx].disk_count <= 0) return -1;
    carts[idx].disk = "";
    carts[idx].disk_count = 0;    
    updateCarts();
    return false;
}

// Increate button clicked
function increaseDiskCount(id) {
    const idx = carts.findIndex(itm => itm.id == id);
    if (idx === -1) return -1;
    carts[idx].disk_count ++;
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
    initDisk();
    initYear();
    initCloudSelect();
    initVMSize();
    initComponents();

    updatePrice();
    updateCarts();
})