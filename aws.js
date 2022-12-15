const API = 'http://localhost:7285/api/'
// Resource types depend on VM Size
var vmObject = [{ type: 'General Purpose', sku: 'm4.large', cpu: 2, memory: 8 }, 
  { type: 'General Purpose', sku: 'm4.xlarge', cpu: 4, memory: 16 },
  { type: 'General Purpose', sku: 'm4.2xlarge', cpu: 8, memory: 32 },
  { type: 'General Purpose', sku: 'm4.4xlarge', cpu: 16, memory: 64 },
  { type: 'General Purpose', sku: 'm4.10xlarge', cpu: 40, memory: 160 },
  { type: 'General Purpose', sku: 'm4.16xlarge', cpu: 64, memory: 256 },
  { type: 'Memory Optimized', sku: 'c4.large', cpu: 2, memory: 3.75 },
  { type: 'Memory Optimized', sku: 'c4.xlarge', cpu: 4, memory: 7.5 },
  { type: 'Memory Optimized', sku: 'c4.2xlarge', cpu: 8, memory: 15 },
  { type: 'Memory Optimized', sku: 'c4.4xlarge', cpu: 16, memory: 30 },
  { type: 'Memory Optimized', sku: 'c4.8xlarge', cpu: 36, memory: 60 },
  { type: 'Compute Optimized', sku: 'r5.large', cpu: 2, memory: 16 },
  { type: 'Compute Optimized', sku: 'r5.xlarge', cpu: 4, memory: 32 },
  { type: 'Compute Optimized', sku: 'r5.2xlarge', cpu: 8, memory: 64 },
  { type: 'Compute Optimized', sku: 'r5.4xlarge', cpu: 16, memory: 128 }];
var regions = [{region: 'US West', key: 'westus'}, {region: 'US East', key: 'eastus'}];
var disks = [{
  type: 'Ultra',
  sizes: [
    { size: 4 },
    { size: 8 },
    { size: 16 },
    { size: 32 },
    { size: 64 },
    { size: 128 },
    { size: 256 },
    { size: 512 },
    { size: 1024 },
    { size: 2048 },
    { size: 4096 },
    { size: 8192 },
    { size: 16384 },
    { size: 32768 },
    { size: 65536 }],
  price: 0.11972
}, {
  type: 'Premium SSD v2',
  sizes: [
    { size: 4 },
    { size: 8 },
    { size: 16 },
    { size: 32 },
    { size: 64 },
    { size: 128 },
    { size: 256 },
    { size: 512 },
    { size: 1024 },
    { size: 2048 },
    { size: 4096 },
    { size: 8192 },
    { size: 16384 },
    { size: 32767 }
  ],
  price: 0.081
}, {
  type: 'Premium SSD',
  sizes: [
    { size: 4, price: 0.6 },
    { size: 8, price: 1.2 },
    { size: 16, price: 2.4 },
    { size: 32, price: 4.81 },
    { size: 64, price: 9.29 },
    { size: 128, price: 17.92 },
    { size: 256, price: 34.56 },
    { size: 512, price: 66.56 },
    { size: 1024, price: 122.88 },
    { size: 2048, price: 235.52 },
    { size: 4096, price: 450.56 },
    { size: 8192, price: 860.16 },
    { size: 16384, price: 1638.40 },
    { size: 32767, price: 3276.80 }
  ]
}, {
  type: 'Standard SSD',
  sizes: [
    { size: 4, price: 0.3 },
    { size: 8, price: 0.6 },
    { size: 16, price: 1.2 },
    { size: 32, price: 2.4 },
    { size: 64, price: 4.8 },
    { size: 128, price: 9.6 },
    { size: 256, price: 19.2 },
    { size: 512, price: 38.4 },
    { size: 1024, price: 76.8 },
    { size: 2048, price: 153.6 },
    { size: 4096, price: 307.2 },
    { size: 8192, price: 614.4 },
    { size: 16384, price: 1228.8 },
    { size: 32767, price: 2457.6 }
  ]
}, {
  type: 'Standard HDD',
  sizes: [
    { size: 32, price: 1.54 },
    { size: 64, price: 3.01 },
    { size: 128, price: 5.89 },
    { size: 256, price: 11.33 },
    { size: 512, price: 21.76 },
    { size: 1024, price: 40.96 },
    { size: 2048, price: 77.83 },
    { size: 4096, price: 143.56 },
    { size: 8192, price: 262.14 },
    { size: 16384, price: 491.52 },
    { size: 32767, price: 953.55 }
  ]
}];

let priceRes = [];

// This function returns selected resources (Which Cpu type is selected, Which Disk type is selected, Which Cloud Provider ...)
// return type is object.
function getSelectedObject() {
  const _sku = priceRes[$('#sku').val()] || '';
  const cloud = 'azure';
  const region = $('#region').val();
  const type = $('#type').val();
  const sku = _sku.armSkuName;
  const cpu = parseInt($('#cpu').val()) || 0;
  const memory = parseInt($('#memory').val()) || 0;
  const count = parseInt($('#count').val()) || 0;
  const year = 1;
  let price_per_hr = 0;
  if (region && sku && _sku) price_per_hr = _sku.unitPrice;

  return { cloud, count, cpu, type, sku, memory, region, year, price_per_hr };
}

function getSelectedDiskObject() {
  const region = $('#disk_region').val();
  const type = $('#disk_type').val();
  const disk = parseInt($('#disk').val()) || 0;
  const count = parseInt($('#disk_count').val()) || 0;
  let price_per_month = 0;
  if (region && type && disk) {
    let obj = disks.find(itm => itm.type === type);
    if (obj.price) price_per_month = obj.price;
    else price_per_month = obj.sizes.find(itm => itm.size == disk).price;
  }
  const year = 1;

  return { type, count, disk, region, year, price_per_month };
}

// This function is used to initialize Region Select HTML DOM.
function initRegion() {
  let html = '<option value="">Select Region</option>' + generateOptionHTML(regions.map(obj => obj.region));
  $('#region').html(html);
  $('#disk_region').html(html);
}

async function getPriceRes() {
  const region = $('#region').val();
  const type = $('#type').val();
  if (!region || !type) {
    priceRes = [];
    initSku();
    return;
  }
  const key = regions.find(itm => itm.region === region).key;
  const priceType = (type === 'General Purpose - Test  / Dev / Entry Level') ? 'DevTestConsumption' : 'Consumption';
  const skus = vmObject.filter(itm => itm.type === type).map(obj => obj.sku);
  $.ajax({
    url: API + 'getRetailPricesWithSku',
    method: 'POST',
    data: { filter: { armRegionName: key, serviceName: "Virtual Machines", priceType }, skus}
  })
    .done(function(msg) {
      console.log(msg);
      if (msg.success) {
        priceRes = msg.data.filter(itm => {
          const idx = vmObject.findIndex(obj => obj.sku === itm.armSkuName);
          if (idx === -1) return false;
          return true;
        });
        initSku();
      }
    })
  // const res = await fetch(API + 'getRetailPrices', {
  //   method: 'POST',
  //   body: JSON.stringify({ filter: { location: key }})
  // });
  // console.log(res.json());
}

function getTypes () {
  const types = vmObject.map(itm => itm.type);
  return types.filter((itm, idx) => types.indexOf(itm) === idx);
}

function initType() {
  let html = '<option value="">Select Type</option>'
  const types = getTypes();
  for (let i = 0; i < types.length; i ++) {
      const type = types[i];
      html += `<option value="${type}">${type}</option>`;
  }
  $('#type').html(html);
  initSku();
}

function initSku() {
  const region = $('#region').val();
  let html = '<option value="">Select Region first</option>';
  if (region) {
    const type = $('#type').val();
    html = '<option value="">Select Type first</option>';
    if (type) {
      html = '<option value="">Select Sku</option>'
      for (let i = 0; i < priceRes.length; i ++) {
          const sku = priceRes[i].armSkuName;
          html += `<option value="${i}">${sku}</option>`;
      }
    }
  }
  $('#sku').html(html);
  initCPU();
  initMemory();
}

function initCPU() {
  const sku = (priceRes[$('#sku').val()] || '').armSkuName;
  let html = '<option value="">Select Sku first</option>';
  const s_obj = vmObject.find(itm => itm.sku === sku);
  if (s_obj) {
      html = '<option value="">Select CPU</option>';
      html += `<option value="${s_obj.cpu}">${s_obj.cpu}</option>`;
  }
  $('#cpu').html(html);
}

function initMemory() {
  const sku = (priceRes[$('#sku').val()] || '').armSkuName;
  let html = '<option value="">Select Sku first</option>';
  const s_obj = vmObject.find(itm => itm.sku === sku);
  if (s_obj) {
      html = '<option value="">Select Memory</option>';
      html += `<option value="${s_obj.memory}">${s_obj.memory}</option>`;
  }
  $('#memory').html(html);
}

function initDiskType() {
  let html = `<option value="">Select Type</option>`;
  for (let i = 0; i < disks.length; i ++) {
      const type = disks[i].type;
      html += `<option value="${type}">${type}</option>`;
  }
  $('#disk_type').html(html);

  initDisk();
}

function initDisk() {
  const type = $('#disk_type').val();
  let html = `<option value="">Select Type first</option>`;
  const disk = disks.find(itm => itm.type === type);
  if (disk) {
    html = `<option value="">Select Size</option>`;
    for (let i = 0; i < disk.sizes.length; i ++) {
        const size = disk.sizes[i].size;
        html += `<option value="${size}">${size} GB</option>`;
    }
  }
  $('#disk').html(html);
}


// This function is used to initialize Recourses Select HTML DOM (CPU, Memory, Disk)
function initComponents () {
  initRegion();
  initType();
  initDiskType();
}

// This function checks if you select all infos
// Also validate the quantity of the carts.
function validateInfo (info, show_error = false) {
  const keys = ['cloud', 'type', 'cpu', 'memory', 'count', 'region', 'sku'];
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
  const keys = ['disk', 'type', 'count', 'region'];    
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
  let price = {
      total: 0,
      total_discount: 0
  };
  if (validateInfo(info)) {
      const cpu = parseFloat(info.cpu) || 0;
      const year = info.year;
              
      price.total = (info.price_per_hr * cpu * year * 8760) * info.count;
      price.total_discount = price.total * 0.525;
  }
  return price;
}

// Estimate the sub price for selected resources.
function getDiskPrice(info) {
  let price = 0;
  if (validateDiskInfo(info)) {
      const disk = parseFloat(info.disk) || 0;
      const year = info.year;
              
      price = (disk * year * 12 * info.price_per_month) * info.count;
  }
  return price;
}


// Update price HTML DOM which you can see on the website.
function updatePrice () {
  const info = getSelectedObject();
  const price = getPrice(info);
  console.log(info, price);
  if(price.total){
      $('#price').html('$' + (price.total).toFixed(2) + ' / year');
  }
}

// This function is event trigger.
// This is handled when any resource type changed (Cloud, VM Size, CPU, Memory, Disk, Count)
async function changedInput(type) {
  const value = $('#' + type).val();
  if (!value) $('#' + type + '-error').addClass('show');
  else $('#' + type + '-error').removeClass('show');

  switch (type) {
    case 'region':
      await getPriceRes();
      break;
    case 'type':
      await getPriceRes();
      break;
    case 'sku':
      initCPU();
      initMemory();
      break;
    case 'disk_type':
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
      <td>${cart.type}</td>
      <td>${cart.sku}</td>
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
      <td>$${cart.price.total_discount.toFixed(2)}</td>
      <td class="font-weight-bold close-container">
          $${cart.price.total.toFixed(2)}
          <div class="cart-remove close" onclick="removeCart(${cart.id})">&times;</div>
      </td>
      </tr>`
  }
  if (!_carts.length) {
      html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
  }
  $('#carts').html(html);
  $('#total-count').html(_carts.length);
  $('#total-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total), 0).toFixed(2));
  $('#total-price-discount').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total_discount), 0).toFixed(2));

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
      <td>${cart.region}</td>
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
  $('#total-real-price').html('$' + carts.reduce((sum, itm) => sum + (parseFloat(itm.price.total_discount) || parseFloat(itm.price)), 0).toFixed(2));
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