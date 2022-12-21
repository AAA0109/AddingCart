
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
        const idx = carts.findIndex(itm => itm.id == id);
        if (idx > -1) carts.splice(idx, 1);
        this.updateCarts();
        this.updateDiskCarts();
        return false;
    },
    
    // Increate button clicked
    increaseCount(id) {
        const idx = carts.findIndex(itm => itm.id == id);
        if (idx === -1) return -1;
        carts[idx].count ++;
        if (carts[idx].cart === 'shopping') {
            carts[idx].price = this.getPrice(carts[idx]);
            this.updateCarts();
        }
        if (carts[idx].cart === 'disk') {
            carts[idx].price = this.getDiskPrice(carts[idx]);
            this.updateDiskCarts();
        }
        return false;
    },
    
    // Decrease button clicked
    decreaseYear(id) {
        const idx = carts.findIndex(itm => itm.id == id);
        if (idx === -1 || carts[idx].year <= 1) return -1;
        carts[idx].year --;
        if (carts[idx].cart === 'shopping') {
            carts[idx].price = this.getPrice(carts[idx]);
            this.updateCarts();
        }
        if (carts[idx].cart === 'disk') {
            carts[idx].price = this.getDiskPrice(carts[idx]);
            this.updateDiskCarts();
        }
        return false;
    },
    
    // Increate button clicked
    increaseYear(id) {
        const idx = carts.findIndex(itm => itm.id == id);
        if (idx === -1 || carts[idx].year >= 3) return -1;
        carts[idx].year ++;
        if (carts[idx].cart === 'shopping') {
            carts[idx].price = this.getPrice(carts[idx]);
            this.updateCarts();
        }
        if (carts[idx].cart === 'disk') {
            carts[idx].price = this.getDiskPrice(carts[idx]);
            this.updateDiskCarts();
        }
        return false;
    },
    
    // Decrease button clicked
    decreaseCount(id) {
        const idx = carts.findIndex(itm => itm.id == id);
        if (idx === -1 || carts[idx].count <= 0) return -1;
        carts[idx].count --;
        if (carts[idx].cart === 'shopping') {
            carts[idx].price = this.getPrice(carts[idx]);
            this.updateCarts();
        }
        if (carts[idx].cart === 'disk') {
            carts[idx].price = this.getDiskPrice(carts[idx]);
            this.updateDiskCarts();
        }
        return false;
    },
    
    // Add Cart button clicked
    addBtnClicked() {
        const info = this.getSelectedObject();
        if (!this.validateInfo(info, true)) return;
        const price = this.getPrice(info);
        
        carts.push({
            id: cartId ++,
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
        
        carts.push({
            id: cartId ++,
            price,
            cart: 'disk',
            ...info
        });
    
        this.updateDiskCarts();
    },