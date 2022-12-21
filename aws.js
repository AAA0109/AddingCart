const aws = {
  API: 'http://localhost:7285/api/',
  // Resource types depend on VM Size
  vmObject: [{ type: 'General purpose', sku: 'm4.large', cpu: 2, memory: 8 }, 
    { type: 'General purpose', sku: 'm4.xlarge', cpu: 4, memory: 16 },
    { type: 'General purpose', sku: 'm4.2xlarge', cpu: 8, memory: 32 },
    { type: 'General purpose', sku: 'm4.4xlarge', cpu: 16, memory: 64 },
    { type: 'General purpose', sku: 'm4.10xlarge', cpu: 40, memory: 160 },
    { type: 'General purpose', sku: 'm4.16xlarge', cpu: 64, memory: 256 },
    { type: 'Memory optimized', sku: 'c4.large', cpu: 2, memory: 3.75 },
    { type: 'Memory optimized', sku: 'c4.xlarge', cpu: 4, memory: 7.5 },
    { type: 'Memory optimized', sku: 'c4.2xlarge', cpu: 8, memory: 15 },
    { type: 'Memory optimized', sku: 'c4.4xlarge', cpu: 16, memory: 30 },
    { type: 'Memory optimized', sku: 'c4.8xlarge', cpu: 36, memory: 60 },
    { type: 'Compute optimized', sku: 'r5.large', cpu: 2, memory: 16 },
    { type: 'Compute optimized', sku: 'r5.xlarge', cpu: 4, memory: 32 },
    { type: 'Compute optimized', sku: 'r5.2xlarge', cpu: 8, memory: 64 },
    { type: 'Compute optimized', sku: 'r5.4xlarge', cpu: 16, memory: 128 }],
  regions: [{region: 'US West', key: 'west'}, {region: 'US East', key: 'east'}],
  priceRes: {},
  disks: [{
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
  }],
  carts: [],
  cartId: 1,
  
  // This returns selected resources (Which Cpu type is selected, Which Disk type is selected, Which Cloud Provider ...)
  // return type is object.
  getSelectedObject() {
    const cloud = 'azure';
    const region = $('#aws-region').val();
    const _sku = this.priceRes[region] ? this.priceRes[region][$('#aws-sku').val()] || '' : '';
    const type = $('#aws-type').val();
    const sku = (_sku.attributes || '').instanceType;
    const cpu = parseFloat($('#aws-cpu').val()) || 0;
    const memory = parseFloat($('#aws-memory').val()) || 0;
    const count = parseInt($('#aws-count').val()) || 0;
    const year = 1;
    let price_per_hr = 0;
    if (region && sku && _sku) {
      const term = _sku.term;
      const term_keys = Object.keys(term);
      if (term_keys.length) {
        const t = term[term_keys[0]].priceDimensions;
        const t_keys = Object.keys(t);
        if (t_keys.length)
          price_per_hr = parseFloat(t[t_keys[0]].pricePerUnit.USD) || 0;
      }
    }
  
    return { cloud, count, cpu, type, sku, memory, region, year, price_per_hr };
  },
  
  getSelectedDiskObject() {
    const region = $('#aws-disk_region').val();
    const type = $('#aws-disk_type').val();
    const disk = parseFloat($('#aws-disk').val()) || 0;
    const count = parseInt($('#aws-disk_count').val()) || 0;
    let price_per_month = 0;
    if (region && type && disk) {
      let obj = this.disks.find(itm => itm.type === type);
      if (obj.price) price_per_month = obj.price;
      else price_per_month = obj.sizes.find(itm => itm.size == disk).price;
    }
    const year = 1;
  
    return { type, count, disk, region, year, price_per_month };
  },
  
  // This is used to initialize Region Select HTML DOM.
  initRegion() {
    let html = '<option value="">Select Region</option>' + this.generateOptionHTML(this.regions.map(obj => obj.region));
    $('#aws-region').html(html);
    $('#aws-disk_region').html(html);
  },
  
  initPrices () {
    for (let i = 1; i < this.regions.length; i ++) {
      $.ajax({
        url: this.API + 'getAWSPrice',
        method: 'POST'
      })
        .done((msg) => {
          console.log('response', msg);
          if (msg.success) {
            this.priceRes = msg.data;
          }
        })
    }
  },
  
  getTypes () {
    const types = this.vmObject.map(itm => itm.type);
    return types.filter((itm, idx) => types.indexOf(itm) === idx);
  },
  
  initType() {
    let html = '<option value="">Select Type</option>'
    const types = this.getTypes();
    for (let i = 0; i < types.length; i ++) {
        const type = types[i];
        html += `<option value="${type}">${type}</option>`;
    }
    $('#aws-type').html(html);
    this.initSku();
  },
  
  initSku() {
    const region = $('#aws-region').val();
    let html = '<option value="">Select Region first</option>';
    if (region) {
      const type = $('#aws-type').val();
      html = '<option value="">Select Type first</option>';
      if (type) {
        html = '<option value="">Select Sku</option>'
        for (let i = 0; this.priceRes[region] && (i < this.priceRes[region].length); i ++) {
            const p = this.priceRes[region][i];
            if (this.vmObject.findIndex(itm => itm.sku === p.attributes.instanceType && itm.type === type) === -1) continue;
            html += `<option value="${i}">${p.attributes.instanceType}</option>`;
        }
      }
    }
    $('#aws-sku').html(html);
    this.initCPU();
    this.initMemory();
  },
  
  initCPU() {
    const sku_c = this.priceRes[$('#aws-region').val()] || '';
    const p = sku_c[$('#aws-sku').val()] || '';
    let sku = '';
    if (p && p.attributes) sku = p.attributes.instanceType;
    let html = '<option value="">Select Sku first</option>';
    const s_obj = this.vmObject.find(itm => itm.sku === sku);
    if (s_obj) {
        html = '<option value="">Select CPU</option>';
        html += `<option value="${s_obj.cpu}">${s_obj.cpu}</option>`;
    }
    $('#aws-cpu').html(html);
  },
  
  initMemory() {
    const sku_c = this.priceRes[$('#aws-region').val()] || '';
    const p = sku_c[$('#aws-sku').val()] || '';
    let sku = '';
    if (p && p.attributes) sku = p.attributes.instanceType;
    let html = '<option value="">Select Sku first</option>';
    const s_obj = this.vmObject.find(itm => itm.sku === sku);
    if (s_obj) {
        html = '<option value="">Select Memory</option>';
        html += `<option value="${s_obj.memory}">${s_obj.memory}</option>`;
    }
    $('#aws-memory').html(html);
  },
  
  initDiskType() {
    let html = `<option value="">Select Type</option>`;
    for (let i = 0; i < this.disks.length; i ++) {
        const type = this.disks[i].type;
        html += `<option value="${type}">${type}</option>`;
    }
    $('#aws-disk_type').html(html);
  
    this.initDisk();
  },
  
  initDisk() {
    const type = $('#aws-disk_type').val();
    let html = `<option value="">Select Type first</option>`;
    const disk = this.disks.find(itm => itm.type === type);
    if (disk) {
      html = `<option value="">Select Size</option>`;
      for (let i = 0; i < disk.sizes.length; i ++) {
          const size = disk.sizes[i].size;
          html += `<option value="${size}">${size} GB</option>`;
      }
    }
    $('#aws-disk').html(html);
  },
  
  
  // This is used to initialize Recourses Select HTML DOM (CPU, Memory, Disk)
  initComponents () {
    this.initRegion();
    this.initType();
    this.initDiskType();
  },
  
  // This checks if you select all infos
  // Also validate the quantity of the carts.
  validateInfo (info, show_error = false) {
    const keys = ['cloud', 'type', 'cpu', 'memory', 'count', 'region', 'sku'];
    let flag = true;
    for (let i = 0; i < keys.length; i ++) {
        const key = keys[i];
        if((key !== 'count' && info[key]) || (key === 'count' && info[key] > 0)) {
            $('#aws-' + key + '-error').removeClass('show');
        }
        else {
            if(show_error)
                $('#aws-' + key + '-error').addClass('show');
            flag = false;
        }
    }
    return flag;
  },
  
  validateDiskInfo (info, show_error = false) {
    const keys = ['disk', 'type', 'count', 'region'];    
    let flag = true;
    for (let i = 0; i < keys.length; i ++) {
        const key = keys[i];
        let id = key;
        if (id !== 'disk') id = 'disk_' + id;
        if((key !== 'count' && info[key]) || (key === 'count' && info[key] > 0)) {
            $('#aws-' + id + '-error').removeClass('show');
        }
        else {
            if(show_error)
                $('#aws-' + id + '-error').addClass('show');
            flag = false;
        }
    }
    return flag;
  },
  
  // Estimate the sub price for selected resources.
  getPrice(info) {
    let price = {
        total: 0,
        total_discount: 0
    };
    if (this.validateInfo(info)) {
        const cpu = parseFloat(info.cpu) || 0;
        const year = info.year;
                
        price.total = (info.price_per_hr * cpu * year * 8760) * info.count;
        price.total_discount = price.total * 0.84;
    }
    return price;
  },
  
  // Estimate the sub price for selected resources.
  getDiskPrice(info) {
    let price = {
      total: 0,
      total_discount: 0
    };
    if (this.validateDiskInfo(info)) {
        const year = info.year;
                
        price.total = (year * 12 * info.price_per_month) * info.count;
        price.total_discount = price.total * 0.84;
    }
    return price;
  },
  
  
  // Update price HTML DOM which you can see on the website.
  updatePrice () {
    const info = this.getSelectedObject();
    const price = this.getPrice(info);
    console.log(info, price);
    if(price.total){
        $('#aws-price').html('$' + (price.total).toFixed(2) + ' / year');
    }
  },
  
  updateDiskPrice () {
    const info = this.getSelectedDiskObject();
    const price = this.getDiskPrice(info);
    console.log(info, price);
    if(price){
        $('#aws-disk_price').html('$' + price.total.toFixed(2) + ' / year');
    }
  },
  
  // This is event trigger.
  // This is handled when any resource type changed (Cloud, VM Size, CPU, Memory, Disk, Count)
  async changedInput(type) {
    const value = $('#aws-' + type).val();
    if (!value) $('#aws-' + type + '-error').addClass('show');
    else $('#aws-' + type + '-error').removeClass('show');
  
    switch (type) {
      case 'region':
        break;
      case 'type':
        this.initSku();
        break;
      case 'sku':
        this.initCPU();
        this.initMemory();
        break;
      case 'disk_type':
        this.initDisk();
        break;
    }
    this.updatePrice();
    this.updateDiskPrice();
  },
  
  // This is used to update shopping cart table
  // Generate HTML Code and replace DOM.
  updateCarts() {
    let html = '';
    const _carts = this.carts.filter(cart => cart.cart === 'shopping')
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
                <div class="decrease-count" onclick="aws.decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="aws.increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="aws.decreaseYear(${cart.id})">-</div>
                <div class="count">${cart.year}</div>
                <div class="increase-count" onclick="aws.increaseYear(${cart.id})">+</div>
            </div>
        </td>
        <td>$${cart.price.total_discount.toFixed(2)}</td>
        <td class="font-weight-bold close-container">
            $${cart.price.total.toFixed(2)}
            <div class="cart-remove close" onclick="aws.removeCart(${cart.id})">&times;</div>
        </td>
        </tr>`
    }
    if (!_carts.length) {
        html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#aws-carts').html(html);
    $('#aws-total-count').html(_carts.length);
    $('#aws-total-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total), 0).toFixed(2));
    $('#aws-total-price-discount').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total_discount), 0).toFixed(2));
  
    this.updateRealTotalPrice();
  },
  
  updateDiskCarts() {
    let html = '';
    const _carts = this.carts.filter(cart => cart.cart === 'disk');
    for(let i = 0; i < _carts.length; i ++) {
        const cart = _carts[i];
        html += `<tr class="cart-item">
        <td>${cart.type}</td>
        <td>${cart.disk}GB</td>
        <td>${cart.region}</td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="aws.decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="aws.increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="aws.decreaseYear(${cart.id})">-</div>
                <div class="count">${cart.year}</div>
                <div class="increase-count" onclick="aws.increaseYear(${cart.id})">+</div>
            </div>
        </td>
        <td>$${cart.price.total_discount.toFixed(2)}</td>
        <td class="font-weight-bold close-container">
            $${cart.price.total.toFixed(2)}
            <div class="cart-remove close" onclick="aws.removeCart(${cart.id})">&times;</div>
        </td>
        </tr>`
    }
    if (!_carts.length) {
        html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#aws-disk_carts').html(html);
    $('#aws-total-disk-count').html(_carts.length);
    $('#aws-total-disk-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total), 0).toFixed(2));
    $('#aws-total-disk-price-discount').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total_discount), 0).toFixed(2));
    
    this.updateRealTotalPrice();
  },
  
  updateRealTotalPrice() {
    $('#aws-total-real-price').html('$' + this.carts.reduce((sum, itm) => sum + (parseFloat(itm.price.total_discount) || parseFloat(itm.price)), 0).toFixed(2));
  },

  // Generage Select Options
  // This function is used to initialize Select HTML Dom of Resources(Cloud, VM Size, CPU, Memory, Disk, Region).
  generateOptionHTML(items) {
    let html = '';
    if (!items) return html;
    for (let i = 0; i < items.length; i ++) {
      const itm = items[i];
      html += `<option value="${itm}">${itm}</option>`
    }
    return html;
  },    
  
  // This is event trigger.
  // Called when you click remove button
  removeCart(id) {
    const idx = this.carts.findIndex(itm => itm.id == id);
    if (idx > -1) this.carts.splice(idx, 1);
    this.updateCarts();
    this.updateDiskCarts();
    return false;
  },
  
  // Increate button clicked
  increaseCount(id) {
    const idx = this.carts.findIndex(itm => itm.id == id);
    if (idx === -1) return -1;
      this.carts[idx].count ++;
    if ( this.carts[idx].cart === 'shopping') {
      this.carts[idx].price = this.getPrice( this.carts[idx]);
      this.updateCarts();
    }
    if ( this.carts[idx].cart === 'disk') {
      this.carts[idx].price = this.getDiskPrice( this.carts[idx]);
      this.updateDiskCarts();
    }
    return false;
  },
  
  // Decrease button clicked
  decreaseYear(id) {
    const idx = this.carts.findIndex(itm => itm.id == id);
    if (idx === -1 ||  this.carts[idx].year <= 1) return -1;
      this.carts[idx].year --;
    if ( this.carts[idx].cart === 'shopping') {
      this.carts[idx].price = this.getPrice( this.carts[idx]);
      this.updateCarts();
    }
    if ( this.carts[idx].cart === 'disk') {
      this.carts[idx].price = this.getDiskPrice( this.carts[idx]);
      this.updateDiskCarts();
    }
    return false;
  },
  
  // Increate button clicked
  increaseYear(id) {
    const idx = this.carts.findIndex(itm => itm.id == id);
    if (idx === -1 ||  this.carts[idx].year >= 3) return -1;
      this.carts[idx].year ++;
    if ( this.carts[idx].cart === 'shopping') {
      this.carts[idx].price = this.getPrice( this.carts[idx]);
      this.updateCarts();
    }
    if ( this.carts[idx].cart === 'disk') {
      this.carts[idx].price = this.getDiskPrice( this.carts[idx]);
      this.updateDiskCarts();
    }
    return false;
  },
  
  // Decrease button clicked
  decreaseCount(id) {
    const idx = this.carts.findIndex(itm => itm.id == id);
    if (idx === -1 ||  this.carts[idx].count <= 0) return -1;
      this.carts[idx].count --;
    if ( this.carts[idx].cart === 'shopping') {
      this.carts[idx].price = this.getPrice( this.carts[idx]);
      this.updateCarts();
    }
    if ( this.carts[idx].cart === 'disk') {
      this.carts[idx].price = this.getDiskPrice( this.carts[idx]);
      this.updateDiskCarts();
    }
    return false;
  },
  
  // Add Cart button clicked
  addBtnClicked() {
    const info = this.getSelectedObject();
    if (!this.validateInfo(info, true)) return;
    const price = this.getPrice(info);
    
    this.carts.push({
        id: this.cartId ++,
        price,
        cart: 'shopping',
        ...info
    });

    this.updateCarts();
  },
  
  addDiskBtnClicked() {
    const info = this.getSelectedDiskObject();
    if (!this.validateDiskInfo(info, true)) return;
    const price = this.getDiskPrice(info);
    
    this.carts.push({
        id: this.cartId ++,
        price,
        cart: 'disk',
        ...info
    });

    this.updateDiskCarts();
  },
  
  // Initializing function
  // equals document.ready
  init() {
    $('#aws-add-btn').click(() => this.addBtnClicked());
    $('#aws-add-disk-btn').click(() => this.addDiskBtnClicked());
    
    this.initPrices();
    this.initComponents();
  
    this.updatePrice();
    this.updateDiskPrice();
    this.updateCarts();
    this.updateDiskCarts();
  }
}