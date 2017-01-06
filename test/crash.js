var data = {
  'points': [[-155.8758964, 19.5477611], [-155.8741104, 19.546978499999998], [-155.8772354, 19.5468625], [-155.8741104, 19.546978499999998], [-155.8773355, 19.5468525], [-155.8777955, 19.5469424], [-155.8772354, 19.5468625], [-155.8906159, 19.5455565], [-155.88071019999998, 19.5460791], [-155.8795403, 19.546098999999998], [-155.8945397, 19.5459796], [-155.89523979999998, 19.5465995], [-155.8942191, 19.5459201], [-155.8925193, 19.54589], [-154.9062894, 19.5113067], [-155.87571739999998, 19.5477994], [-155.8999124, 19.5469612], [-155.90092239999998, 19.5464912], [-155.90190239999998, 19.5460512], [-155.9047824, 19.545191199999998], [-155.9052624, 19.5451312], [-155.9034524, 19.5454212], [-155.9028754, 19.5454842], [-155.9024824, 19.5455212], [-155.9022224, 19.5457112], [-155.9019284, 19.5460262], [-155.90163239999998, 19.5462682], [-155.90092239999998, 19.5464912], [-155.90074239999998, 19.546511199999998], [-155.9001824, 19.546781199999998], [-155.8992324, 19.5474712], [-155.8997124, 19.5471412], [-155.8999124, 19.5469612], [-155.9001824, 19.546781199999998], [-155.9005124, 19.546601199999998], [-155.90074239999998, 19.546511199999998], [-155.90103639999998, 19.546470199999998], [-155.9011424, 19.5464512], [-155.9013924, 19.5463912], [-155.90190239999998, 19.5460512], [-155.9020624, 19.5459012], [-155.9022224, 19.5457112], [-155.90163239999998, 19.5462682], [-155.9007804, 19.5465072], [-155.90074239999998, 19.546511199999998], [-155.9007804, 19.5465072], [-155.90103639999998, 19.546470199999998], [-155.9024824, 19.5455212], [-155.9029124, 19.545481199999998], [-155.9032564, 19.545443199999998], [-155.9029124, 19.545481199999998], [-155.9024824, 19.5455212], [-155.9023324, 19.5456212], [-155.9020624, 19.5459012], [-155.9019284, 19.5460262], [-155.90190239999998, 19.5460512], [-155.90154239999998, 19.5463412], [-155.8999124, 19.5469612], [-155.89886239999998, 19.5477412], [-155.87571739999998, 19.5477994], [-155.8647433, 19.623985599999997], [-155.8644424, 19.623853399999998]],
  'edges': [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 21], [21, 22], [22, 23], [23, 24], [24, 25], [25, 26], [26, 27], [27, 28], [28, 29], [29, 30], [30, 31], [31, 32], [32, 33], [33, 34], [34, 35], [35, 36], [36, 37], [37, 38], [38, 39], [39, 40], [40, 41], [41, 42], [42, 43], [43, 44], [44, 45], [45, 46], [46, 47], [47, 48], [48, 49], [49, 50], [50, 51], [51, 52], [52, 53], [53, 54], [54, 55], [55, 56], [56, 57], [57, 58], [58, 59], [59, 60], [60, 61], [61, 0]]
}

var tape = require('tape')
var cleanPSLG = require('../clean-pslg')
var checkPSLG = require('./check-graph')

tape('clean crash', function (t) {
  cleanPSLG(data.points, data.edges)
  checkPSLG(t, data.points, data.edges)
  t.end()
})
