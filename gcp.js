const gcp = {
    // Resource types depend on VM Size
    vmObject: [{
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
    }],
    
    disk_types: [{
        type: "HDD",
        price: 0.02
    }, {
        type: "SSD",
        price: 0.09
    }],
    carts: [],
    cartId: 1,
    
    // This function returns selected resources (Which Cpu type is selected, Which Disk type is selected, Which Cloud Provider ...)
    // return type is object.
    getSelectedObject() {
        const cloud = 'gcp';
        const region = $('#gcp-region').val();
        const type = $('#gcp-type').val();
        const cpu = parseFloat($('#gcp-cpu').val()) || 0;
        const memory = parseFloat($('#gcp-memory').val()) || 0;
        const count = parseInt($('#gcp-count').val()) || 0;
        const year = 1;
        let price_per_hr = 0;
        if (region && type) price_per_hr = this.vmObject.find(itm => itm.region === region).types.find(itm => itm.sku === type).price;
    
        return { cloud, count, cpu, type, memory, region, year, price_per_hr };
    },
    
    getSelectedDiskObject() {
        const region = $('#gcp-disk_region').val();
        const type = $('#gcp-disk_type').val();
        const disk = parseFloat($('#gcp-disk').val()) || 0;
        const count = parseInt($('#gcp-disk_count').val()) || 0;
        const year = 1;
    
        return { type, count, disk, region, year };
    },
    
    // This function is used to initialize Region Select HTML DOM.
    initRegion() {
        let html = '<option value="">Select Region</option>' + this.generateOptionHTML(this.vmObject.map(obj => obj.region));
        $('#gcp-region').html(html);
        $('#gcp-disk_region').html(html);
        this.initType();
    },
    
    initType() {
        const region = $('#gcp-region').val();
        const obj = this.vmObject.find(obj => obj.region === region);
        let html = '<option value="">Select Region first</option>';
        if (obj) {
            html = '<option value="">Select Type</option>'
            for (let i = 0; i < obj.types.length; i ++) {
                const type = obj.types[i].sku;
                html += `<option value="${type}">${type} Cores</option>`;
            }    
        }
        $('#gcp-type').html(html);
        this.initCPU();
    },
    
    initCPU() {
        const region = $('#gcp-region').val();
        const obj = this.vmObject.find(obj => obj.region === region);
        let html = '<option value="">Select Region first</option>';
        if (obj) {
            html = '<option value="">Select Type first</option>';
            const type = $('#gcp-type').val();
            const s_obj = obj.types.find(itm => itm.sku === type);
            if (s_obj) {
                html = '<option value="">Select CPU</option>';
                for (let i = 0; i < s_obj.sizes.length; i ++) {
                    const cpu = s_obj.sizes[i][0];
                    html += `<option value="${cpu}">${cpu} Cores</option>`;
                }
            }
        }
        $('#gcp-cpu').html(html);
        this.initMemory();
    },
    
    initMemory() {
        const region = $('#gcp-region').val();
        const obj = this.vmObject.find(obj => obj.region === region);
        let html = '<option value="">Select Region first</option>';
        if (obj) {
            html = '<option value="">Select Type first</option>';
            const type = $('#gcp-type').val();
            const s_obj = obj.types.find(itm => itm.sku === type);
            if(s_obj) {
                html = '<option value="">Select CPU first</option>';
                const cpu = $('#gcp-cpu').val();
                const obj = s_obj.sizes.find(itm => itm[0] == cpu);
                if(obj) {
                    html = '<option value="">Select Memory</option>';
                    html += `<option value="${obj[1]}">${obj[1]} GB</option>`;
                }
            }
        }
        $('#gcp-memory').html(html);
    },
    
    initDisk() {
        let html = `<option value="">Select Type</option>`;
        for (let i = 0; i < this.disk_types.length; i ++) {
            const type = this.disk_types[i].type;
            html += `<option value="${type}">${type}</option>`;
        }
        $('#gcp-disk_type').html(html);
    },
    
    
    // This function is used to initialize Recourses Select HTML DOM (CPU, Memory, Disk)
    initComponents () {
        this.initRegion();
        this.initDisk();
    },
    
    // This function checks if you select all infos
    // Also validate the quantity of the carts.
    validateInfo (info, show_error = false) {
        const keys = ['cloud', 'cpu', 'memory', 'count', 'region', 'type'];
        let flag = true;
        for (let i = 0; i < keys.length; i ++) {
            const key = keys[i];
            if((key !== 'count' && info[key]) || (key === 'count' && info[key] > 0)) {
                $('#gcp-' + key + '-error').removeClass('show');
            }
            else {
                if(show_error)
                    $('#gcp-' + key + '-error').addClass('show');
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
            if((key !== 'count' && key !== 'disk' && info[key]) || ((key === 'count' || key === 'disk') && info[key] > 0)) {
                $('#gcp-' + id + '-error').removeClass('show');
            }
            else {
                if(show_error)
                    $('#gcp-' + id + '-error').addClass('show');
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
            price.total_discount = price.total * 0.525;
        }
        return price;
    },
    
    // Estimate the sub price for selected resources.
    getDiskPrice(info) {
        let price = 0;
        if (this.validateDiskInfo(info)) {
            const disk = parseFloat(info.disk) || 0;
            const year = info.year;
            const type = info.type;
            const price_hr = this.disk_types.find(itm => itm.type === type).price;
                    
            price = (price_hr * disk * year * 8760) * info.count;
        }
        return price;
    },
    
    
    // Update price HTML DOM which you can see on the website.
    updatePrice () {
        const info = this.getSelectedObject();
        const price = this.getPrice(info);
        console.log(info, price);
        if(price.total){
            $('#gcp-price').html('$' + (price.total).toFixed(2) + ' / year');
        }
    },

    // Update price HTML DOM which you can see on the website.
    updateDiskPrice () {
        const info = this.getSelectedDiskObject();
        const price = this.getDiskPrice(info);
        console.log(info, price);
        if(price){
            $('#gcp-disk_price').html('$' + price.toFixed(2) + ' / year');
        }
    },
    
    // This function is event trigger.
    // This is handled when any resource type changed (Cloud, VM Size, CPU, Memory, Disk, Count)
    changedInput(type) {
        const value = $('#gcp-' + type).val();
        if (!value) $('#gcp-' + type + '-error').addClass('show');
        else $('#' + type + '-error').removeClass('show');
    
        switch (type) {
            case 'region':
                this.initType();
                break;
            case 'type':
                this.initCPU();
                break;
            case 'cpu':
                this.initMemory();
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
            <td>${cart.type}</td>
            <td>${cart.cpu} Cores / ${cart.memory}GB</td>
            <td>
                <div class="d-flex align-items-start justify-content-center">
                    <div class="decrease-count" onclick="gcp.decreaseCount(${cart.id})">-</div>
                    <div class="count">${cart.count}</div>
                    <div class="increase-count" onclick="gcp.increaseCount(${cart.id})">+</div>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-start justify-content-center">
                    <div class="decrease-count" onclick="gcp.decreaseYear(${cart.id})">-</div>
                    <div class="count">${cart.year}</div>
                    <div class="increase-count" onclick="gcp.increaseYear(${cart.id})">+</div>
                </div>
            </td>
            <td>$${cart.price.total_discount.toFixed(2)}</td>
            <td class="font-weight-bold close-container">
                $${cart.price.total.toFixed(2)}
                <div class="cart-remove close" onclick="gcp.removeCart(${cart.id})">&times;</div>
            </td>
            </tr>`
        }
        if (!_carts.length) {
            html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
        }
        $('#gcp-carts').html(html);
        $('#gcp-total-count').html(_carts.length);
        $('#gcp-total-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total), 0).toFixed(2));
        $('#gcp-total-price-discount').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price.total_discount), 0).toFixed(2));
    
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
                    <div class="decrease-count" onclick="gcp.decreaseCount(${cart.id})">-</div>
                    <div class="count">${cart.count}</div>
                    <div class="increase-count" onclick="gcp.increaseCount(${cart.id})">+</div>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-start justify-content-center">
                    <div class="decrease-count" onclick="gcp.decreaseYear(${cart.id})">-</div>
                    <div class="count">${cart.year}</div>
                    <div class="increase-count" onclick="gcp.increaseYear(${cart.id})">+</div>
                </div>
            </td>
            <td class="font-weight-bold close-container">
                $${cart.price.toFixed(2)}
                <div class="cart-remove close" onclick="gcp.removeCart(${cart.id})">&times;</div>
            </td>
            </tr>`
        }
        if (!_carts.length) {
            html = '<tr><td colspan=11><hr class="mt-0">No carts<hr class="mb-0"></td></tr>'
        }
        $('#gcp-disk_carts').html(html);
        $('#gcp-total-disk-count').html(_carts.length);
        $('#gcp-total-disk-price').html('$'+_carts.reduce((sum, itm) => sum + parseFloat(itm.price), 0).toFixed(2));
        
        this.updateRealTotalPrice();
    },
    
    updateRealTotalPrice() {
        $('#gcp-total-real-price').html('$' + this.carts.reduce((sum, itm) => sum + (parseFloat(itm.price.total_discount) || parseFloat(itm.price)), 0).toFixed(2));
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
        $('#gcp-add-btn').click(() => this.addBtnClicked());
        $('#gcp-add-disk-btn').click(() => this.addDiskBtnClicked());
        
        this.initComponents();
    
        this.updatePrice();
        this.updateDiskPrice();
        this.updateCarts();
        this.updateDiskCarts();
    }
}