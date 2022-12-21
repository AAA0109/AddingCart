function showCloud(cloud) {
    const clouds = ['onprem', 'azure', 'aws', 'gcp'];
    for (let i = 0; i < clouds.length; i ++) {
        const c = clouds[i];
        if (c === cloud) $(`[target=${c}]`).removeClass('d-none')
        else $(`[target=${c}]`).addClass('d-none')
    }
}

$(function() {
    onprem.init();
    gcp.init();
    aws.init();
    azure.init();
    showCloud('onprem');
})