const API = 'http://localhost:7285/api/'
// Resource types depend on VM Size
var vmObject = [{ sku: 'Standard_D2s_v4', cpu: 2, memory: 8 }, 
  { sku: 'Standard_D4s_v4', cpu: 4, memory: 16 },
  { sku: 'Standard_D8s_v4', cpu: 8, memory: 32 },
  { sku: 'Standard_D16s_v4', cpu: 16, memory: 64 },
  { sku: 'Standard_E2s_v4', cpu: 2, memory: 16 },
  { sku: 'Standard_E4s_v4', cpu: 4, memory: 32 },
  { sku: 'Standard_E8s_v4', cpu: 8, memory: 64 },
  { sku: 'Standard_E16s_v4', cpu: 16, memory: 128 },
  { sku: 'Standard_F2s_v2', cpu: 2, memory: 4 },
  { sku: 'Standard_F4s_v4', cpu: 4, memory: 8 },
  { sku: 'Standard_F8s_v4', cpu: 8, memory: 16 },
  { sku: 'Standard_F16s_v4', cpu: 16, memory: 32 },
  { sku: 'Standard_A1_v2', cpu: 1, memory: 2 },
  { sku: 'Standard_B1s', cpu: 1, memory: 1 }];
var regions = [{region: 'West US2', key: 'westus2'}, {region: 'Central US', key: 'centralus'}, {region: 'North Europe', key: 'northeurope'}, {region: 'Germany West Central', key: 'germanywestcentral'}, {region: 'South India', key: 'southindia'}];
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
  const _type = priceRes[$('#type').val()] || '';
  const cloud = 'azure';
  const region = $('#region').val();
  const type = _type.armSkuName;
  const cpu = parseInt($('#cpu').val()) || 0;
  const memory = parseInt($('#memory').val()) || 0;
  const count = parseInt($('#count').val()) || 0;
  const year = 1;
  let price_per_hr = 0;
  if (region && type && _type) price_per_hr = _type.unitPrice;

  return { cloud, count, cpu, type, memory, region, year, price_per_hr };
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
  initType();
}

async function regionChanged() {
  const region = $('#region').val();
  if (!region) return;
  const key = regions.find(itm => itm.region === region).key;
  $.ajax({
    url: API + 'getRetailPrices',
    method: 'POST',
    data: { filter: { armRegionName: key, serviceName: "Virtual Machines", priceType: "Reservation" }}
  })
    .done(function(msg) {
      console.log(msg);
      if (msg.success) {
        priceRes = msg.data.filter(itm => {
          const idx = vmObject.findIndex(obj => obj.sku === itm.armSkuName);
          if (idx === -1) return false;
          return true;
        });
        initType();
      }
    })
  // const res = await fetch(API + 'getRetailPrices', {
  //   method: 'POST',
  //   body: JSON.stringify({ filter: { location: key }})
  // });
  // console.log(res.json());
}

function initType() {
  const region = $('#region').val();
  let html = '<option value="">Select Region first</option>';
  if (region) {
      html = '<option value="">Select Type</option>'
      for (let i = 0; i < priceRes.length; i ++) {
          const type = priceRes[i].armSkuName;
          html += `<option value="${i}">${type} Cores</option>`;
      }    
  }
  $('#type').html(html);
  initCPU();
  initMemory();
}

function initCPU() {
  const type = (priceRes[$('#type').val()] || '').armSkuName;
  let html = '<option value="">Select Type first</option>';
  const s_obj = vmObject.find(itm => itm.sku === type);
  if (s_obj) {
      html = '<option value="">Select CPU</option>';
      html += `<option value="${s_obj.cpu}">${s_obj.cpu}</option>`;
  }
  $('#cpu').html(html);
}

function initMemory() {
  const type = (priceRes[$('#type').val()] || '').armSkuName;
  let html = '<option value="">Select Type first</option>';
  const s_obj = vmObject.find(itm => itm.sku === type);
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
  initDiskType();
}

// This function checks if you select all infos
// Also validate the quantity of the carts.
function validateInfo (info, show_error = false) {
  const keys = ['cloud', 'cpu', 'memory', 'count', 'region', 'type'];
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
      await regionChanged();
      break;
    case 'type':
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