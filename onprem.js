const onprem = {
    // Resource types depend on VM Size
    vmObject: [{
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
    }],

    regions: ['WJU', 'PHX'],
    carts: [],
    cartId: 1,

    // This function returns selected resources (Which Cpu type is selected, Which Disk type is selected, Which Cloud Provider ...)
    // return type is object.
    getSelectedObject() {
        const cloud = 'onprem';
        const region = $('#onprem-region').val();
        const cpu = parseFloat($('#onprem-cpu').val()) || 0;
        const memory = parseFloat($('#onprem-memory').val()) || 0;
        const count = parseInt($('#onprem-count').val()) || 0;
        const year = 1;

        return { cloud, count, cpu, memory, region, year };
    },

    getSelectedDiskObject() {
        const region = $('#onprem-disk_region').val();
        const disk = parseFloat($('#onprem-disk').val()) || 0;
        const count = parseInt($('#onprem-disk_count').val()) || 0;
        const year = 1;
        
        const disk_dom = document.getElementById('onprem-disk');
        const type = disk_dom.options[disk_dom.selectedIndex].text;

        return { type, count, disk, region, year };
    },

    // This function is used to initialize Region Select HTML DOM.
    initRegion() {
        let html = '<option value="">Select Region</option>' + this.generateOptionHTML(this.regions);
        $('#onprem-region').html(html);
        $('#onprem-disk_region').html(html);
    },

    initCPU() {
        let html = '<option value="">Select CPU</option>';
        for (let i = 0; i < this.vmObject.length; i ++) {
            const cpu = this.vmObject[i].CPU;
            html += `<option value="${cpu}">${cpu} Cores</option>`;
        }
        $('#onprem-cpu').html(html);
        this.initMemory();
    },

    initMemory() {
        const cpu = $('#onprem-cpu').val();
        const obj = this.vmObject.find(itm => itm.CPU == cpu);
        let html = `<option value="">Select CPU first</option>`;
        if(obj) {
            html = '<option value="">Select Memory</option>';
            html += `<option value="${obj.Memory}">${obj.Memory} GB</option>`;
        }
        $('#onprem-memory').html(html);
        this.initDisk();
    },

    initDisk() {
        const cpu = $('#onprem-cpu').val();
        const obj = this.vmObject.find(itm => itm.CPU == cpu);
        let html = `<option value="">Select CPU first</option>`;
        if(obj) {
            html = '<option value="">Select Disk</option>';
            for (let i = 0; i < obj.Disk.length; i ++) {
                const disk = obj.Disk[i];
                html += `<option value="${disk.size}">${disk.type}</option>`;
            }
        }
        $('#onprem-disk').html(html);
    },

    // This function is used to initialize Recourses Select HTML DOM (CPU, Memory, Disk)
    initComponents () {
        this.initRegion();
        this.initCPU();
    },

    // This function checks if you select all infos
    // Also validate the quantity of the this.carts.
    validateInfo (info, show_error = false) {
        const keys = ['cloud', 'cpu', 'memory', 'count', 'region'];    
        let flag = true;
        for (let i = 0; i < keys.length; i ++) {
            const key = keys[i];
            if((key !== 'count' && info[key]) || (key === 'count' && info[key] > 0)) {
                $('#onprem-' + key + '-error').removeClass('show');
            }
            else {
                if(show_error)
                    $('#onprem-' + key + '-error').addClass('show');
                flag = false;
            }
        }
        return flag;
    },

    validateDiskInfo (info, show_error = false) {
        const keys = ['disk', 'count', 'region'];    
        let flag = true;
        for (let i = 0; i < keys.length; i ++) {
            const key = keys[i];
            let id = key;
            if (id !== 'disk') id = 'disk_' + id;
            if((key !== 'count' && info[key]) || (key === 'count' && info[key] > 0)) {
                $('#onprem-' + id + '-error').removeClass('show');
            }
            else {
                if(show_error)
                    $('#onprem-' + id + '-error').addClass('show');
                flag = false;
            }
        }
        return flag;
    },

    // Estimate the sub price for selected resources.
    getPrice(info) {
        let price = 0;
        if (this.validateInfo(info)) {
            const cpu = parseFloat(info.cpu) || 0;
            const year = info.year;
                    
            price = (0.0667 * cpu * year * 8760) * info.count;
        }
        return price;
    },

    // Estimate the sub price for selected resources.
    getDiskPrice(info) {
        let price = 0;
        if (this.validateDiskInfo(info)) {
            const disk = parseFloat(info.disk) || 0;
            const year = info.year;
                    
            price = (0.0007 * disk * year * 8760) * info.count;
        }
        return price;
    },

    // Update price HTML DOM which you can see on the website.
    updatePrice () {
        const info = this.getSelectedObject();
        const price = this.getPrice(info);
        console.log(info, price);
        if(price){
            $('#onprem-price').html('$' + (price).toFixed(2) + ' / year');
        }
    },

    // Update price HTML DOM which you can see on the website.
    updateDiskPrice () {
        const info = this.getSelectedDiskObject();
        const price = this.getDiskPrice(info);
        console.log(info, price);
        if(price){
            $('#onprem-disk_price').html('$' + price.toFixed(2) + ' / year');
        }
    },

    // This function is event trigger.
    // This is handled when any resource type changed (Cloud, VM Size, CPU, Memory, Disk, Count)
    changedInput(type) {
        const value = $('#onprem-' + type).val();
        if (!value) $('#onprem-' + type + '-error').addClass('show');
        else $('#onprem-' + type + '-error').removeClass('show');

        switch (type) {
            case 'cpu':
                this.initMemory();
                break;
            case 'memory':
                this.initDisk();
                break;    
        }
        this.updatePrice();
        this.updateDiskPrice();
    },

    // This function is used to update shopping cart table
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
            <td>${cart.cpu} Cores / ${cart.memory}GB</td>
            <td>
                <div class="d-flex align-items-start justify-content-center">
                    <div class="decrease-count" onclick="onprem.decreaseCount(${cart.id})">-</div>
                    <div class="count">${cart.count}</div>
                    <div class="increase-count" onclick="onprem.increaseCount(${cart.id})">+</div>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-start justify-content-center">
                    <div class="decrease-count" onclick="onprem.decreaseYear(${cart.id})">-</div>
                    <div class="count">${cart.year}</div>
                    <div class="increase-count" onclick="onprem.increaseYear(${cart.id})">+</div>
                </div>
            </td>
            <td class="font-weight-bold close-container">
                $${cart.price.toFixed(2)}
                <div class="cart-remove close" onclick="onprem.removeCart(${cart.id})">&times;</div>
            </td>
            </tr>`
        }
        if (!_carts.length) {
            html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
        }
        $('#onprem-carts').html(html);
        $('#onprem-total-count').html(_carts.length);
        $('#onprem-total-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price), 0).toFixed(2));

        this.updateRealTotalPrice();
    },

    updateDiskCarts() {
        let html = '';
        const _carts = this.carts.filter(cart => cart.cart === 'disk');
        for(let i = 0; i < _carts.length; i ++) {
            const cart = _carts[i];
            html += `<tr class="cart-item">
            <td>${cart.type}</td>
            <td>${cart.region}</td>
            <td>${cart.disk}GB</td>
            <td>
                <div class="d-flex align-items-start justify-content-center">
                    <div class="decrease-count" onclick="onprem.decreaseCount(${cart.id})">-</div>
                    <div class="count">${cart.count}</div>
                    <div class="increase-count" onclick="onprem.increaseCount(${cart.id})">+</div>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-start justify-content-center">
                    <div class="decrease-count" onclick="onprem.decreaseYear(${cart.id})">-</div>
                    <div class="count">${cart.year}</div>
                    <div class="increase-count" onclick="onprem.increaseYear(${cart.id})">+</div>
                </div>
            </td>
            <td class="font-weight-bold close-container">
                $${cart.price.toFixed(2)}
                <div class="cart-remove close" onclick="onprem.removeCart(${cart.id})">&times;</div>
            </td>
            </tr>`
        }
        if (!_carts.length) {
            html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
        }
        $('#onprem-disk_carts').html(html);
        $('#onprem-total-disk-count').html(_carts.length);
        $('#onprem-total-disk-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price), 0).toFixed(2));
        
        this.updateRealTotalPrice();
    },

    updateRealTotalPrice() {
        $('#onprem-total-real-price').html('$' + this.carts.reduce((sum, itm) => sum + parseFloat(itm.price), 0).toFixed(2))
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
        $('#onprem-add-btn').click(() => this.addBtnClicked());
        $('#onprem-add-disk-btn').click(() => this.addDiskBtnClicked());
        
        this.initComponents();

        this.updatePrice();
        this.updateDiskPrice();
        this.updateCarts();
        this.updateDiskCarts();
    }
}