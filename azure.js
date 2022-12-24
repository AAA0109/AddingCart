const azure = {
  // Resource types depend on VM Size
  vmObject: [{ type: 'General Purpose', skuName: 'D2s v4', sku: 'Standard_D2s_v4', cpu: 2, memory: 8 }, 
  { type: 'General Purpose', skuName: 'D4s v4', sku: 'Standard_D4s_v4', cpu: 4, memory: 16 },
  { type: 'General Purpose', skuName: 'D8s v4', sku: 'Standard_D8s_v4', cpu: 8, memory: 32 },
  { type: 'General Purpose', skuName: 'D16s v4', sku: 'Standard_D16s_v4', cpu: 16, memory: 64 },
  { type: 'Memory Optimized', skuName: 'E2s v4', sku: 'Standard_E2s_v4', cpu: 2, memory: 16 },
  { type: 'Memory Optimized', skuName: 'E4s v4', sku: 'Standard_E4s_v4', cpu: 4, memory: 32 },
  { type: 'Memory Optimized', skuName: 'E8s v4', sku: 'Standard_E8s_v4', cpu: 8, memory: 64 },
  { type: 'Memory Optimized', skuName: 'E16s v4', sku: 'Standard_E16s_v4', cpu: 16, memory: 128 },
  { type: 'Compute Optimized', skuName: 'F2s v2', sku: 'Standard_F2s_v2', cpu: 2, memory: 4 },
  { type: 'Compute Optimized', skuName: 'F4s v2', sku: 'Standard_F4s_v2', cpu: 4, memory: 8 },
  { type: 'Compute Optimized', skuName: 'F8s v2', sku: 'Standard_F8s_v2', cpu: 8, memory: 16 },
  { type: 'Compute Optimized', skuName: 'F16s v2', sku: 'Standard_F16s_v2', cpu: 16, memory: 32 },
  { type: 'General Purpose - Test  / Dev / Entry Level', skuName: 'A1 v2', sku: 'Standard_A1_v2', cpu: 1, memory: 2 },
  { type: 'General Purpose - Test  / Dev / Entry Level', skuName: 'B1s', sku: 'Standard_B1s', cpu: 1, memory: 1 },
  { type: 'General Purpose - Test  / Dev / Entry Level', skuName: 'D2s v4', sku: 'Standard_D2s_v4', cpu: 2, memory: 8 }, 
  { type: 'General Purpose - Test  / Dev / Entry Level', skuName: 'D4s v4', sku: 'Standard_D4s_v4', cpu: 4, memory: 16 },
  { type: 'General Purpose - Test  / Dev / Entry Level', skuName: 'D8s v4', sku: 'Standard_D8s_v4', cpu: 8, memory: 32 },
  { type: 'General Purpose - Test  / Dev / Entry Level', skuName: 'D16s v4', sku: 'Standard_D16s_v4', cpu: 16, memory: 64 }],

  regions: [{region: 'West US2', key: 'westus2'}, {region: 'Central US', key: 'centralus'}, {region: 'North Europe', key: 'northeurope'}, {region: 'Germany West Central', key: 'germanywestcentral'}, {region: 'South India', key: 'southindia'}],
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
      const _sku = this.priceRes[$('#azure-sku').val()] || '';
      const cloud = 'azure';
      const region = $('#azure-region').val();
      const type = $('#azure-type').val();
      const sku = _sku.armSkuName;
      const cpu = parseFloat($('#azure-cpu').val()) || 0;
      const memory = parseFloat($('#azure-memory').val()) || 0;
      const count = parseInt($('#azure-count').val()) || 0;
      const year = 1;
      let price_per_hr = 0;
      if (region && sku && _sku) price_per_hr = _sku.unitPrice;
    
      return { cloud, count, cpu, type, sku, memory, region, year, price_per_hr };
    },
  
  getSelectedDiskObject() {
    const region = $('#azure-disk_region').val();
    const type = $('#azure-disk_type').val();
    const disk = parseFloat($('#azure-disk').val()) || 0;
    const count = parseInt($('#azure-disk_count').val()) || 0;
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
    $('#azure-region').html(html);
    $('#azure-disk_region').html(html);
  },

  async getPriceRes() {
    const region = $('#azure-region').val();
    const type = $('#azure-type').val();
    if (!region || !type) {
      this.priceRes = [];
      this.initSku();
      return;
    }
    const key = this.regions.find(itm => itm.region === region).key;
    const priceType = (type === 'General Purpose - Test  / Dev / Entry Level') ? 'DevTestConsumption' : 'Consumption';
    const skus = this.vmObject.filter(itm => itm.type === type).map(obj => obj.sku);
    $.ajax({
      url: API_URL + 'getRetailPricesWithSku',
      method: 'POST',
      data: { filter: { armRegionName: key, serviceName: "Virtual Machines", priceType }, skus}
    })
      .done((msg) => {
        console.log('Not reservation', msg);
        if (msg.success) {
          this.priceRes = msg.data.filter(itm => {
            const idx = this.vmObject.findIndex(obj => obj.sku === itm.armSkuName && obj.skuName === itm.skuName);
            if (idx === -1) return false;
            return true;
          });
          console.log('mid result', this.priceRes);
          this.priceRes = this.priceRes.filter(itm => {
            const ct = this.priceRes.filter(ii => ii.armSkuName === itm.armSkuName).length;
            if (ct === 1) return true;
            if (!itm.productName.endsWith('Series')) return false;
            return true;
          })
          console.log('result', this.priceRes);
          this.initSku();
        }
      })
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
    $('#azure-type').html(html);
    this.initSku();
  },
  
  initSku() {
    const region = $('#azure-region').val();
    let html = '<option value="">Select Region first</option>';
  if (region) {
    const type = $('#azure-type').val();
    html = '<option value="">Select Type first</option>';
    if (type) {
      html = '<option value="">Select Sku</option>'
      for (let i = 0; i < this.priceRes.length; i ++) {
          const sku = this.priceRes[i].armSkuName;
          html += `<option value="${i}">${sku}</option>`;
      }
    }
  }
    $('#azure-sku').html(html);
    this.initCPU();
    this.initMemory();
  },

  initCPU() {
    const sku = (this.priceRes[$('#azure-sku').val()] || '').armSkuName;
    let html = '<option value="">Select Sku first</option>';
    const s_obj = this.vmObject.find(itm => itm.sku === sku);
    if (s_obj) {
        html = '<option value="">Select CPU</option>';
        html += `<option value="${s_obj.cpu}">${s_obj.cpu}</option>`;
    }
    $('#azure-cpu').html(html);
  },

  initMemory() {
    const sku = (this.priceRes[$('#azure-sku').val()] || '').armSkuName;
    let html = '<option value="">Select Sku first</option>';
    const s_obj = this.vmObject.find(itm => itm.sku === sku);
    if (s_obj) {
        html = '<option value="">Select Memory</option>';
        html += `<option value="${s_obj.memory}">${s_obj.memory}</option>`;
    }
    $('#azure-memory').html(html);
  },
  
  initDiskType() {
    let html = `<option value="">Select Type</option>`;
    for (let i = 0; i < this.disks.length; i ++) {
        const type = this.disks[i].type;
        html += `<option value="${type}">${type}</option>`;
    }
    $('#azure-disk_type').html(html);
  
    this.initDisk();
  },
  
  initDisk() {
    const type = $('#azure-disk_type').val();
    let html = `<option value="">Select Type first</option>`;
    const disk = this.disks.find(itm => itm.type === type);
    if (disk) {
      html = `<option value="">Select Size</option>`;
      for (let i = 0; i < disk.sizes.length; i ++) {
          const size = disk.sizes[i].size;
          html += `<option value="${size}">${size} GB</option>`;
      }
    }
    $('#azure-disk').html(html);
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
            $('#azure-' + key + '-error').removeClass('show');
        }
        else {
            if(show_error)
                $('#azure-' + key + '-error').addClass('show');
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
            $('#azure-' + id + '-error').removeClass('show');
        }
        else {
            if(show_error)
                $('#azure-' + id + '-error').addClass('show');
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
        $('#azure-price').html('$' + (price.total).toFixed(2) + ' / year');
    }
  },
  
  updateDiskPrice () {
    const info = this.getSelectedDiskObject();
    const price = this.getDiskPrice(info);
    console.log(info, price);
    if(price){
        $('#azure-disk_price').html('$' + price.total.toFixed(2) + ' / year');
    }
  },
  
  // This is event trigger.
  // This is handled when any resource type changed (Cloud, VM Size, CPU, Memory, Disk, Count)
  async changedInput(type) {
    const value = $('#azure-' + type).val();
    if (!value) $('#azure-' + type + '-error').addClass('show');
    else $('#azure-' + type + '-error').removeClass('show');
  
    switch (type) {
      case 'region':
        await this.getPriceRes();
        break;
      case 'type':
        await this.getPriceRes();
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
                <div class="decrease-count" onclick="azure.decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="azure.increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="azure.decreaseYear(${cart.id})">-</div>
                <div class="count">${cart.year}</div>
                <div class="increase-count" onclick="azure.increaseYear(${cart.id})">+</div>
            </div>
        </td>
        <td>$${cart.price.total_discount.toFixed(2)}</td>
        <td class="font-weight-bold close-container">
            $${cart.price.total.toFixed(2)}
            <div class="cart-remove close" onclick="azure.removeCart(${cart.id})">&times;</div>
        </td>
        </tr>`
    }
    if (!_carts.length) {
        html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#azure-carts').html(html);
    $('#azure-total-count').html(_carts.length);
    $('#azure-total-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total), 0).toFixed(2));
    $('#azure-total-price-discount').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total_discount), 0).toFixed(2));
  
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
                <div class="decrease-count" onclick="azure.decreaseCount(${cart.id})">-</div>
                <div class="count">${cart.count}</div>
                <div class="increase-count" onclick="azure.increaseCount(${cart.id})">+</div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="azure.decreaseYear(${cart.id})">-</div>
                <div class="count">${cart.year}</div>
                <div class="increase-count" onclick="azure.increaseYear(${cart.id})">+</div>
            </div>
        </td>
        <td>$${cart.price.total_discount.toFixed(2)}</td>
        <td class="font-weight-bold close-container">
            $${cart.price.total.toFixed(2)}
            <div class="cart-remove close" onclick="azure.removeCart(${cart.id})">&times;</div>
        </td>
        </tr>`
    }
    if (!_carts.length) {
        html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
    }
    $('#azure-disk_carts').html(html);
    $('#azure-total-disk-count').html(_carts.length);
    $('#azure-total-disk-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total), 0).toFixed(2));
    $('#azure-total-disk-price-discount').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total_discount), 0).toFixed(2));
    
    this.updateRealTotalPrice();
  },
  
  updateRealTotalPrice() {
    $('#azure-total-real-price').html('$' + this.carts.reduce((sum, itm) => sum + (parseFloat(itm.price.total_discount) || parseFloat(itm.price)), 0).toFixed(2));
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
    $('#azure-add-btn').click(() => this.addBtnClicked());
    $('#azure-add-disk-btn').click(() => this.addDiskBtnClicked());
    
    this.initComponents();
  
    this.updatePrice();
    this.updateDiskPrice();
    this.updateCarts();
    this.updateDiskCarts();
  }
}