const API_URL = 'http://localhost:7285/api/';

function showCloud(cloud) {
    const clouds = ['onprem', 'azure', 'aws', 'gcp'];
    for (let i = 0; i < clouds.length; i ++) {
        const c = clouds[i];
        if (c === cloud) $(`[target=${c}]`).removeClass('d-none')
        else $(`[target=${c}]`).addClass('d-none')
    }
}

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
  

function sendPDF() {
    const email = $('#email').val() || '';
    if (!validateEmail(email)) {
        alert('Input valid email address');
        return;
    }
    $.ajax({
        url: API_URL + 'sendPDF',
        method: 'POST',
        data: { data: { azure: azure.carts, aws: aws.carts, onprem: onprem.carts, gcp: gcp.carts }, email }
    })
        .done((msg) => {
            console.log(msg);
        })
}

$(function() {
    onprem.init();
    gcp.init();
    aws.init();
    azure.init();
    showCloud('onprem');
})