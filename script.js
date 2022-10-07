var vmObject=[{cloud:"AWS",size:"Small",types:{CPU:["1CPU"],Memory:[".5GB","1GB","3.5GB"],Disk:["50GB","100GB","200GB"]}},{cloud:"AWS",size:"Small",types:{CPU:["1CPU"],Memory:[".5GB","1GB","3.5GB"],Disk:["50GB","100GB","200GB"]}},{cloud:"AWS",size:"Medium",types:{CPU:["1CPU"],Memory:["8GB","16GB"],Disk:["50GB","100GB","200GB"]}},{cloud:"AWS",size:"Large",types:{CPU:["1CPU"],Memory:["7GB","8GB","14GB","16GB","28GB"],Disk:["50GB","100GB","200GB"]}},{cloud:"Azure",size:"X-Large",types:{CPU:["1CPU"],Memory:[".5GB","1GB","3.5GB"],Disk:["50GB","100GB","200GB"]}},{cloud:"Azure",size:"XX-Large",types:{CPU:["1CPU"],Memory:[".5GB","1GB","3.5GB"],Disk:["50GB","100GB","200GB"]}},{cloud:"Onprem",size:"X-Large",types:{CPU:["1CPU"],Memory:["5GB","10GB","13.5GB"],Disk:["50GB","100GB","200GB"]}}],clouds=["AWS","Azure","Onprem"],sizes=["Small","Medium","Large","X-Large","XX-Large"],regions=["West","East"],carts=[],cartId=1;function getCloudTypes(){let e=vmObject.map(e=>e.cloud);return[...new Set(e)]}function getVMSizes(e){let t=vmObject.filter(t=>t.cloud===e).map(e=>e.size);return[...new Set(t)]}function getVMObject(e,t){return vmObject.find(i=>i.cloud===e&&i.size===t)}function generateOptionHTML(e){let t="";if(!e)return t;for(let i=0;i<e.length;i++){let o=e[i];t+=`<option value="${o}">${o}</option>`}return t}function getSelectedObject(){let e=$("#cloud").val(),t=$("#size").val(),i=$("#region").val(),o=parseInt($("#count").val()),n=$("#cpu").val(),r=$("#memory").val(),c=$("#disk").val();return{cloud:e,size:t,count:o,cpu:n,memory:r,disk:c,region:i}}function initRegion(){let e='<option value="">Select Region</option>'+generateOptionHTML(regions);$("#region").html(e)}function initCloudSelect(){let e='<option value="">Select Cloud Provider</option>'+generateOptionHTML(clouds);$("#cloud").html(e)}function initVMSize(){let e='<option value="">Select VM Size</option>'+generateOptionHTML(sizes);$("#size").html(e)}function initRegionActive(){let e=$("#cloud").val();"onprem"===e.toLocaleLowerCase()?($("#region").val(""),$("#region").attr("disabled",!0)):$("#region").attr("disabled",!1)}function initComponents(){let e=$("#cloud").val(),t=$("#size").val(),i=["CPU","Memory","Disk"];["cpu","memory","disk"].forEach((o,n)=>{let r=`<option value="">Select ${i[n]}</option>`,c=getVMObject(e,t);if(c){let l=c.types[i[n]];r+=generateOptionHTML(l)}$(`#${o}`).html(r)})}function validateInfo(e,t=!1){let i=["cloud","size","memory","disk","cpu","count","region"],o=!0;for(let n=0;n<i.length;n++){let r=i[n];if("region"===r&&"onprem"===e.cloud.toLocaleLowerCase()){$("#"+r+"-error").removeClass("show");continue}"count"!==r&&e[r]||"count"===r&&e[r]>0?$("#"+r+"-error").removeClass("show"):(t&&$("#"+r+"-error").addClass("show"),o=!1)}return o}function getPrice(e){let t=0;if(validateInfo(e)){let i=regions.indexOf(e.region),o=parseInt(e.cpu)||0,n=parseInt(e.memory)||0,r=parseInt(e.disk)||0;t=(200*o+20*n+3*r)*(i+2)*e.count}return t}function updatePrice(){let e=getSelectedObject(),t=getPrice(e);$("#price").html("$"+t)}function changedInput(e){let t=$("#"+e).val();switch(t?$("#"+e+"-error").removeClass("show"):$("#"+e+"-error").addClass("show"),e){case"cloud":initRegionActive(),initComponents();break;case"size":initComponents()}updatePrice()}function updateCarts(){let e="";for(let t=0;t<carts.length;t++){let i=carts[t];e+=`<tr class="cart-item">
        <td class="item">
            <div class="d-flex align-items-start">
                <img src="./img/${i.cloud}.png" alt="">
                <div class="item-cloud">
                    ${i.cloud}
                </div>
            </div>
        </td>
        <td>${i.size}</td>
        <td>${i.region}</td>
        <td>${i.cpu}</td>
        <td>${i.memory}</td>
        <td>${i.disk}</td>
        <td>
            <div class="d-flex align-items-start justify-content-center">
                <div class="decrease-count" onclick="decreaseCount(${i.id})">-</div>
                <div class="count">${i.count}</div>
                <div class="increase-count" onclick="increaseCount(${i.id})">+</div>
            </div>
        </td>
        <td class="font-weight-bold close-container">
            $${i.price}
            <div class="cart-remove close" onclick="removeCart(${i.id})">&times;</div>
        </td>
    </tr>`}carts.length||(e='<tr><td colspan=7><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'),$("#carts").html(e),$("#total-count").html(carts.length),$("#total-price").html("$"+carts.reduce((e,t)=>e+t.price,0))}function removeCart(e){let t=carts.findIndex(t=>t.id==e);return t>-1&&carts.splice(t,1),updateCarts(),!1}function increaseCount(e){let t=carts.findIndex(t=>t.id==e);return -1===t?-1:(carts[t].count++,carts[t].price=getPrice(carts[t]),updateCarts(),!1)}function decreaseCount(e){let t=carts.findIndex(t=>t.id==e);return -1===t||carts[t].count<=0?-1:(carts[t].count--,carts[t].price=getPrice(carts[t]),updateCarts(),!1)}function modalBtnClicked(){let e=getSelectedObject();if(!validateInfo(e,!0))return;let t=getPrice(e);carts.push({id:cartId++,price:t,...e}),updateCarts(),$("#cart-modal").modal("hide")}$(function(){$("#add-cart").click(()=>openModal("add")),$("#add-btn").click(()=>modalBtnClicked()),initRegion(),initCloudSelect(),initVMSize(),initComponents(),updatePrice(),updateCarts()});