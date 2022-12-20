// Resource types depend on VM Size
var vmObject = [{
    region: 'US-Central',
    types: [{
        sku: 'N1 cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0199
    }, {
        sku: 'N1 cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0142
    }, {
        sku: 'N1 cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0027
    }, {
        sku: 'N1 cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0019
    }, {
        sku: 'N1 cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0332
    }, {
        sku: 'N1 cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0044
    }, {
        sku: 'N2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0199
    }, {
        sku: 'N2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0142
    }, {
        sku: 'N2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0027
    }, {
        sku: 'N2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0019
    }, {
        sku: 'N2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0332
    }, {
        sku: 'N2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0044
    }, {
        sku: 'C2 cost per vCPU, per Hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0214
    }, {
        sku: 'C2 cost per vCPU, per Hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0136
    }, {
        sku: 'C2 cost per RAM GB hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0029
    }, {
        sku: 'C2 cost per RAM GB hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0018
    }, {
        sku: 'C2 cost per vCPU, per Hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0340
    }, {
        sku: 'C2 cost per RAM GB hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0046
    }, {
        sku: 'M1 cost per vCPU, per Hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0206
    }, {
        sku: 'M1 cost per vCPU, per Hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0105
    }, {
        sku: 'M1 cost per RAM GB hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0030
    }, {
        sku: 'M1 cost per RAM GB hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0015
    }, {
        sku: 'M1 cost per vCPU, per Hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0348
    }, {
        sku: 'M1 cost per RAM GB hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0051
    }, {
        sku: 'E2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0137
    }, {
        sku: 'E2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0098
    }, {
        sku: 'E2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0018
    }, {
        sku: 'E2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0013
    }, {
        sku: 'E2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0218
    }, {
        sku: 'E2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0029
    }, {
        sku: 'T2D cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0137
    }, {
        sku: 'T2D cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0098
    }, {
        sku: 'T2D cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0018
    }, {
        sku: 'T2D cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0013
    }, {
        sku: 'T2D cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0218
    }, {
        sku: 'T2D cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0029
    }]
}, {
    region: 'US-West3',
    types: [{
        sku: 'N1 cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0239
    }, {
        sku: 'N1 cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0171
    }, {
        sku: 'N1 cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0032
    }, {
        sku: 'N1 cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0023
    }, {
        sku: 'N1 cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0380
    }, {
        sku: 'N1 cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0051
    }, {
        sku: 'N2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0239
    }, {
        sku: 'N2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0171
    }, {
        sku: 'N2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0032
    }, {
        sku: 'N2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0023
    }, {
        sku: 'N2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0380
    }, {
        sku: 'N2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0051
    }, {
        sku: 'C2 cost per vCPU, per Hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0257
    }, {
        sku: 'C2 cost per vCPU, per Hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0163
    }, {
        sku: 'C2 cost per RAM GB hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0034
    }, {
        sku: 'C2 cost per RAM GB hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0022
    }, {
        sku: 'C2 cost per vCPU, per Hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0408
    }, {
        sku: 'C2 cost per RAM GB hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0055
    }, {
        sku: 'M1 cost per vCPU, per Hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0247
    }, {
        sku: 'M1 cost per vCPU, per Hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0125
    }, {
        sku: 'M1 cost per RAM GB hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0036
    }, {
        sku: 'M1 cost per RAM GB hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0018
    }, {
        sku: 'M1 cost per vCPU, per Hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0399
    }, {
        sku: 'M1 cost per RAM GB hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0059
    }, {
        sku: 'E2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0165
    }, {
        sku: 'E2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0118
    }, {
        sku: 'E2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0022
    }, {
        sku: 'E2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0016
    }, {
        sku: 'E2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0262
    }, {
        sku: 'E2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0035
    }, {
        sku: 'T2D cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0208
    }, {
        sku: 'T2D cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0149
    }, {
        sku: 'T2D cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0028
    }, {
        sku: 'T2D cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0020
    }, {
        sku: 'T2D cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0330
    }, {
        sku: 'T2D cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0044
    }]
}, {
    region: 'US-West4',
    types: [{
        sku: 'N1 cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0213
    }, {
        sku: 'N1 cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0152
    }, {
        sku: 'N1 cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0029
    }, {
        sku: 'N1 cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0020
    }, {
        sku: 'N1 cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0374
    }, {
        sku: 'N1 cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0050
    }, {
        sku: 'N2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0213
    }, {
        sku: 'N2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0152
    }, {
        sku: 'N2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0029
    }, {
        sku: 'N2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0020
    }, {
        sku: 'N2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0374
    }, {
        sku: 'N2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0050
    }, {
        sku: 'C2 cost per vCPU, per Hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0229
    }, {
        sku: 'C2 cost per vCPU, per Hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0175
    }, {
        sku: 'C2 cost per RAM GB hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0031
    }, {
        sku: 'C2 cost per RAM GB hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0021
    }, {
        sku: 'C2 cost per vCPU, per Hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0438
    }, {
        sku: 'C2 cost per RAM GB hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0051
    }, {
        sku: 'M1 cost per vCPU, per Hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0232
    }, {
        sku: 'M1 cost per vCPU, per Hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0118
    }, {
        sku: 'M1 cost per RAM GB hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0034
    }, {
        sku: 'M1 cost per RAM GB hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0017
    }, {
        sku: 'M1 cost per vCPU, per Hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0392
    }, {
        sku: 'M1 cost per RAM GB hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0058
    }, {
        sku: 'E2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0155
    }, {
        sku: 'E2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0111
    }, {
        sku: 'E2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0021
    }, {
        sku: 'E2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0015
    }, {
        sku: 'E2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0262
    }, {
        sku: 'E2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0033
    }]
}, {
    region: 'US-East1',
    types: [{
        sku: 'N1 cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0199
    }, {
        sku: 'N1 cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0142
    }, {
        sku: 'N1 cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0027
    }, {
        sku: 'N1 cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0019
    }, {
        sku: 'N1 cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0332
    }, {
        sku: 'N1 cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0044
    }, {
        sku: 'N2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0199
    }, {
        sku: 'N2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0142
    }, {
        sku: 'N2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0027
    }, {
        sku: 'N2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0019
    }, {
        sku: 'N2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0332
    }, {
        sku: 'N2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0044
    }, {
        sku: 'C2 cost per vCPU, per Hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0214
    }, {
        sku: 'C2 cost per vCPU, per Hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0136
    }, {
        sku: 'C2 cost per RAM GB hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0029
    }, {
        sku: 'C2 cost per RAM GB hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0018
    }, {
        sku: 'C2 cost per vCPU, per Hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0340
    }, {
        sku: 'C2 cost per RAM GB hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0046
    }, {
        sku: 'M1 cost per vCPU, per Hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0206
    }, {
        sku: 'M1 cost per vCPU, per Hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0105
    }, {
        sku: 'M1 cost per RAM GB hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0030
    }, {
        sku: 'M1 cost per RAM GB hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0015
    }, {
        sku: 'M1 cost per vCPU, per Hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0348
    }, {
        sku: 'M1 cost per RAM GB hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0051
    }, {
        sku: 'E2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0137
    }, {
        sku: 'E2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0098
    }, {
        sku: 'E2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0018
    }, {
        sku: 'E2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0013
    }, {
        sku: 'E2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0218
    }, {
        sku: 'E2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0029
    }, {
        sku: 'T2D cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0173
    }, {
        sku: 'T2D cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0124
    }, {
        sku: 'T2D cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0023
    }, {
        sku: 'T2D cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0017
    }, {
        sku: 'T2D cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0275
    }, {
        sku: 'T2D cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0037
    }]
}, {
    region: 'US-West1',
    types: [{
        sku: 'N1 cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0199
    }, {
        sku: 'N1 cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0142
    }, {
        sku: 'N1 cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0027
    }, {
        sku: 'N1 cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0019
    }, {
        sku: 'N1 cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0332
    }, {
        sku: 'N1 cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0044
    }, {
        sku: 'N2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0199
    }, {
        sku: 'N2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0142
    }, {
        sku: 'N2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0027
    }, {
        sku: 'N2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0019
    }, {
        sku: 'N2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0332
    }, {
        sku: 'N2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0044
    }, {
        sku: 'C2 cost per vCPU, per Hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0214
    }, {
        sku: 'C2 cost per vCPU, per Hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0136
    }, {
        sku: 'C2 cost per RAM GB hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0029
    }, {
        sku: 'C2 cost per RAM GB hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0018
    }, {
        sku: 'C2 cost per vCPU, per Hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0340
    }, {
        sku: 'C2 cost per RAM GB hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0046
    }, {
        sku: 'M1 cost per vCPU, per Hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0206
    }, {
        sku: 'M1 cost per vCPU, per Hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0105
    }, {
        sku: 'M1 cost per RAM GB hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0030
    }, {
        sku: 'M1 cost per RAM GB hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0015
    }, {
        sku: 'M1 cost per vCPU, per Hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0348
    }, {
        sku: 'M1 cost per RAM GB hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0051
    }, {
        sku: 'E2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0137
    }, {
        sku: 'E2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0098
    }, {
        sku: 'E2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0018
    }, {
        sku: 'E2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0013
    }, {
        sku: 'E2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0218
    }, {
        sku: 'E2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0029
    }, {
        sku: 'T2D cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0173
    }, {
        sku: 'T2D cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0124
    }, {
        sku: 'T2D cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0023
    }, {
        sku: 'T2D cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0017
    }, {
        sku: 'T2D cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0275
    }, {
        sku: 'T2D cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0037
    }]
}, {
    region: 'Europe-west3',
    types: [{
        sku: 'N1 cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0199
    }, {
        sku: 'N1 cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0142
    }, {
        sku: 'N1 cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0027
    }, {
        sku: 'N1 cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0019
    }, {
        sku: 'N1 cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0332
    }, {
        sku: 'N1 cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 7], [4, 15], [8, 30], [16, 60], [32, 120], [64, 240], [96, 360]],
        price: 0.0044
    }, {
        sku: 'N2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0199
    }, {
        sku: 'N2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0142
    }, {
        sku: 'N2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0027
    }, {
        sku: 'N2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0019
    }, {
        sku: 'N2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0332
    }, {
        sku: 'N2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [64, 156], [80, 320], [96, 384], [128, 512]],
        price: 0.0044
    }, {
        sku: 'C2 cost per vCPU, per Hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0214
    }, {
        sku: 'C2 cost per vCPU, per Hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0136
    }, {
        sku: 'C2 cost per RAM GB hour, 1-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0029
    }, {
        sku: 'C2 cost per RAM GB hour, 3-year',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0018
    }, {
        sku: 'C2 cost per vCPU, per Hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0340
    }, {
        sku: 'C2 cost per RAM GB hr, on-demand',
        sizes: [[4, 16], [8, 32], [16, 64], [30, 120], [60, 240]],
        price: 0.0046
    }, {
        sku: 'M1 cost per vCPU, per Hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0206
    }, {
        sku: 'M1 cost per vCPU, per Hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0105
    }, {
        sku: 'M1 cost per RAM GB hour, 1-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0030
    }, {
        sku: 'M1 cost per RAM GB hour, 3-year',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0015
    }, {
        sku: 'M1 cost per vCPU, per Hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0348
    }, {
        sku: 'M1 cost per RAM GB hr, on-demand',
        sizes: [[40, 961], [80, 1992], [96, 1434], [160, 3844]],
        price: 0.0051
    }, {
        sku: 'E2 cost per vCPU, per Hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0137
    }, {
        sku: 'E2 cost per vCPU, per Hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0098
    }, {
        sku: 'E2 cost per RAM GB hour, 1-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0018
    }, {
        sku: 'E2 cost per RAM GB hour, 3-year',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0013
    }, {
        sku: 'E2 cost per vCPU, per Hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0218
    }, {
        sku: 'E2 cost per RAM GB hr, on-demand',
        sizes: [[2, 8], [4, 16], [8, 32], [16, 64], [32, 128]],
        price: 0.0029
    }, {
        sku: 'T2D cost per vCPU, per Hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0173
    }, {
        sku: 'T2D cost per vCPU, per Hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0124
    }, {
        sku: 'T2D cost per RAM GB hour, 1-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0023
    }, {
        sku: 'T2D cost per RAM GB hour, 3-year',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0017
    }, {
        sku: 'T2D cost per vCPU, per Hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0275
    }, {
        sku: 'T2D cost per RAM GB hr, on-demand',
        sizes: [[1, 4], [2, 8], [4, 16], [8, 32], [16, 64], [32, 128], [48, 192], [60, 240]],
        price: 0.0037
    }]
}];

var disk_types = [{
    type: "HDD",
    price: 0.02
}, {
    type: "SSD",
    price: 0.09
}];

// This function returns selected resources (Which Cpu type is selected, Which Disk type is selected, Which Cloud Provider ...)
// return type is object.
function getSelectedObject() {
    const cloud = 'gcp';
    const region = $('#region').val();
    const type = $('#type').val();
    const cpu = parseFloat($('#cpu').val()) || 0;
    const memory = parseFloat($('#memory').val()) || 0;
    const count = parseInt($('#count').val()) || 0;
    const year = 1;
    let price_per_hr = 0;
    if (region && type) price_per_hr = vmObject.find(itm => itm.region === region).types.find(itm => itm.sku === type).price;

    return { cloud, count, cpu, type, memory, region, year, price_per_hr };
}

function getSelectedDiskObject() {
    const region = $('#disk_region').val();
    const type = $('#disk_type').val();
    const disk = parseFloat($('#disk').val()) || 0;
    const count = parseInt($('#disk_count').val()) || 0;
    const year = 1;

    return { type, count, disk, region, year };
}

// This function is used to initialize Region Select HTML DOM.
function initRegion() {
    let html = '<option value="">Select Region</option>' + generateOptionHTML(vmObject.map(obj => obj.region));
    $('#region').html(html);
    $('#disk_region').html(html);
    initType();
}

function initType() {
    const region = $('#region').val();
    const obj = vmObject.find(obj => obj.region === region);
    let html = '<option value="">Select Region first</option>';
    if (obj) {
        html = '<option value="">Select Type</option>'
        for (let i = 0; i < obj.types.length; i ++) {
            const type = obj.types[i].sku;
            html += `<option value="${type}">${type} Cores</option>`;
        }    
    }
    $('#type').html(html);
    initCPU();
}

function initCPU() {
    const region = $('#region').val();
    const obj = vmObject.find(obj => obj.region === region);
    let html = '<option value="">Select Region first</option>';
    if (obj) {
        html = '<option value="">Select Type first</option>';
        const type = $('#type').val();
        const s_obj = obj.types.find(itm => itm.sku === type);
        if (s_obj) {
            html = '<option value="">Select CPU</option>';
            for (let i = 0; i < s_obj.sizes.length; i ++) {
                const cpu = s_obj.sizes[i][0];
                html += `<option value="${cpu}">${cpu} Cores</option>`;
            }
        }
    }
    $('#cpu').html(html);
    initMemory();
}

function initMemory() {
    const region = $('#region').val();
    const obj = vmObject.find(obj => obj.region === region);
    let html = '<option value="">Select Region first</option>';
    if (obj) {
        html = '<option value="">Select Type first</option>';
        const type = $('#type').val();
        const s_obj = obj.types.find(itm => itm.sku === type);
        if(s_obj) {
            html = '<option value="">Select CPU first</option>';
            const cpu = $('#cpu').val();
            const obj = s_obj.sizes.find(itm => itm[0] == cpu);
            if(obj) {
                html = '<option value="">Select Memory</option>';
                html += `<option value="${obj[1]}">${obj[1]} GB</option>`;
            }
        }
    }
    $('#memory').html(html);
}

function initDisk() {
    let html = `<option value="">Select Type</option>`;
    for (let i = 0; i < disk_types.length; i ++) {
        const type = disk_types[i].type;
        html += `<option value="${type}">${type}</option>`;
    }
    $('#disk_type').html(html);
}


// This function is used to initialize Recourses Select HTML DOM (CPU, Memory, Disk)
function initComponents () {
    initRegion();
    initDisk();
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
        if((key !== 'count' && key !== 'disk' && info[key]) || ((key === 'count' || key === 'disk') && info[key] > 0)) {
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
        const type = info.type;
        const price_hr = disk_types.find(itm => itm.type === type).price;
                
        price = (price_hr * disk * year * 8760) * info.count;
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
function changedInput(type) {
    const value = $('#' + type).val();
    if (!value) $('#' + type + '-error').addClass('show');
    else $('#' + type + '-error').removeClass('show');

    switch (type) {
        case 'region':
            initType();
            break;
        case 'type':
            initCPU();
            break;
        case 'cpu':
            initMemory();
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