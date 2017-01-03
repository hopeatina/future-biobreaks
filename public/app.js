var biobreaksapp = angular.module('biobreaksapp', ['googlechart','ngRoute']);
// biobreaksapp.config(['$routeProvider', '$locationProvider',
//     function($routeProvider, $locationProvider) {
//         $locationProvider.html5Mode(true);
//         // $routeProvider
//         //     . when('/future', {
//         //         templateUrl: '../../future.html',
//         //         controller: 'FutureController',
//         //         controllerAs: 'FutureController'
//         //     })
//         //     .when('/about', {
//         //         templateUrl: 'about.html',
//         //         controller: 'AboutCtrl',
//         //         controllerAs: 'AboutCtrl'
//         //     })
//         //     .when('/chat', {
//         //         templateUrl: 'chat.html',
//         //         controller: 'ChatCtrl',
//         //         controllerAs: 'ChatCtrl'
//         //     })
//         //     .when('/home', {
//         //         templateUrl: 'home.html',
//         //         controller: 'HomeCtrl',
//         //         controllerAs: 'HomeCtrl'
//         //     })
//         //     .when('/', {
//         //         templateUrl: '../views/home.html',
//         //         controller: 'HomeCtrl',
//         //         controllerAs: 'HomeCtrl'
//         //     }).otherwise({ redirectTo: 'index.html' });
//
//         // $locationProvider.html5Mode(true);
//     }]);

biobreaksapp.controller('FutureController', function FutureController($scope, $window) {
    $scope.test = "TEST 1";
    $scope.labels = "January";
    $scope.series = ['Series A', 'Series B'];
    $scope.data = {boom: {log: {x: false, y: false}}};
    $scope.data.selectedGraphData = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
    $scope.data.boom.value = $scope.data.selectedGraphData;

    function convertToSuper(value) {
        var final = "";
        // value = value.toString();
        value = Math.round(Math.log(value) / Math.log(10)).toString();
        for (var i = 0; i < value.length; i++) {
            // console.log(value[i], value, final);
            switch (value[i]) {
                case "0":
                    final += "⁰";
                    break;
                case "1":
                    final += "¹";
                    break;
                case "2":
                    final += "²";
                    break;
                case "3":
                    final += "³";
                    break;
                case "4":
                    final += "⁴";
                    break;
                case "5":
                    final += "⁵";
                    break;
                case "6":
                    final += "⁶";
                    break;
                case "7":
                    final += "⁷";
                    break;
                case "8":
                    final += "⁸";
                    break;
                case "9":
                    final += "⁹";
                    break;
                case ".":
                    final += "`";
                    break;
                default:
                    final += value[i];
            }
        }
        // console.log(final, value);
        return final;
    }

    function base10(val) {
        return Math.pow(10, val);
    }

    function newArray() {
        var randobj = [[]];
        for (var i = 0; i < 7; i++) {
            randobj[0].push(Math.floor(Math.random() * 100));
            // randobj[1].push(Math.floor(Math.random()*100));
        }
        return randobj;
    }

    function formatAxes(value, index, values) {
        var range = values[0] - values[values.length - 1];
        var stepsize = range / 10;
        var substr = convertToSuper(value);
        if ((value > $scope.graphSetup.curval && values[index - 1] < $scope.graphSetup.curval) || $scope.graphSetup.curval == 0) {
            $scope.graphSetup.curval += stepsize;
            console.log(values, $scope.graphSetup.curval += stepsize)
        }

        var retval = "";
        if (index > 0) {
            if (substr == convertToSuper(values[index - 1])) {
                return retval;
            } else {
                return "10" + convertToSuper(value);
            }
        } else {
            return "10" + convertToSuper(value);
        }
    }

    var obj = newArray();
    $scope.colors = ['green', 'orange', 'purple', 'yellow', 'pink','black','red'];
    $scope.graphOptions = [
        // {name: "OPTION 1", value: newArray(), options: {}, log: {x: false, y: false}},
        {
            name: "Canonical Milestones",
            value: [[10, 9.5],
                [9.6, 9.1],
                [9.45, 9],
                [8.95, 8.5],
                [8.7, 8.1],
                [8.4, 7.8],
                [8.2, 7.9],
                [7.8, 7.2],
                [7.46, 7.02],
                [7.15, 7],
                [6.65, 6.15],
                [6.4, 5.08],
                [5.7, 5.01],
                [5.3, 5],
                [5, 4.7],
                [4.55, 4.05],
                [4.25, 3.8],
                [4, 3.3],
                [3.75, 3.1],
                [3.4, 2.8],
                [3.1, 2.9],
                [2.8, 2.1],
                [2.5, 2.01],
                [2, 1.3],
                [1.75, 1.2]
            ],
            labels: ["Milky Way", "Life on Earth", "First Eukaryotes",
                "First Multicellular life", "Cambrian Explosion", "First mammals", "First flowering plants", "Asteroid collision", "First hominoids", "First orangutan", "Chimpanzees and humans diverge", "First stone tools", "Emergence of Homo sapiens", "Domestication of fire",
                "Domestication of fire", "Differentiation of human DNA Types", "Emergence of modern Humans", "Rock art, protowriting", "Invention of agriculture",
                "Techniques for starting fire", "Development of the wheel, writing", "Democracy", "Zero and decimals", "Renaissance (printing press)", "Industrial Revolution",
                "Modern physics", "DNA structure, transistor, nuclear, energy"],
            options: {},
            title: {x: 'Time before Present (Years)', y: 'Time to Next Event'},
            log: {x: true, y: true}
        },
        {
            name: "Growth of the U.S. Phone Industry",
            value: [[1890, 1.05],
                [1900, 1.3],
                [1910, 2.08],
                [1920, 2.6],
                [1930, 3.03],
                [1940, 3.04],
                [1950, 3.2],
                [1960, 4],
                [1970, 4.1],
                [1980, 4.7],
                [1990, 5.08],
                [2000, 5.2],
                [2010, 5.8],
                [2020, 6.1]
            ],
            labels: [],
            options: {},
            title: {x: 'Year', y: 'Revenue Dollars (millions)'},
            log: {x: false, y: true}
        },
        {
            name: "Mass Use of Inventions",
            value: [[1877, 1.25],
                [1898, 1.24],
                [1926, 1.2],
                [1978, 1.08],
                [1985, 1.03],
                [1992, .7]
            ],
            labels: ["Telephone", "Radio", "Television",
                "PC", "Mobile Phone", "The Web"],
            options: {},
            title: {x: 'Year', y: 'Years Until Use by 1/4 U.S. Population'},
            log: {x: false, y: true}
        },
        {
            name: "Dynamic RAM Price",
            value: [[1971, 2.1],
                [1972, 2.2],
                [1973, 2.3],
                [1974, 2.6],
                [1975, 2.9],
                [1976, 3.05],
                [1977, 3.06],
                [1978, 3.15],
                [1979, 3.25],
                [1980, 3.6],
                [1981, 3.7],
                [1982, 3.68],
                [1983, 4.07],
                [1984, 4.1],
                [1985, 4.2],
                [1986, 4.3],
                [1987, 4.8],
                [1988, 5],
                [1989, 5.03],
                [1990, 5.06],
                [1991, 5.11],
                [1992, 5.2],
                [1993, 5.25],
                [1994, 5.3],
                [1995, 5.5],
                [1996, 6.02],
                [1997, 6.1],
                [1998, 6.2],
                [1999, 6.5],
                [2000, 6.9],
                [2001, 7.03],
                [2002, 7.08],
                [2004, 7.1],
                [2005, 7.2],
                [2006, 7.5],
                [2007, 7.9],
                [2008, 8.05],
                [2009, 8.1],
                [2010, 8.15],
                [2011, 8.3],
                [2012, 8.6],
                [2013, 9],
                [2014, 9.05 ],
                [2015, 9.1],
                [2016, 9.3],
                [2017, 9.6],
                [2018, 9.9],
                [2019, 10.1]
            ],
            labels: [],
            options: {},
            title: {x: 'Year', y: 'DRAM Bits/ Dollar'},
            log: {x: false, y: true}
        }
        // {name: "OPTION 3", value: newArray(), log: {x: true, y: true}}
    ];

    for (var i = 0; i < $scope.graphOptions.length; i++) {
        if ($scope.graphOptions[i].log.x) {
            $scope.xtype = 'logarithmic';
            for (var j = 0; j < $scope.graphOptions[i].value.length; j++) {
                $scope.graphOptions[i].value[j][0] = base10($scope.graphOptions[i].value[j][0]);
            }
        } else {
            $scope.xtype = 'linear';
        }

        if ($scope.graphOptions[i].log.y) {
            $scope.ytype = 'logarithmic';
            for (var k = 0; k < $scope.graphOptions[i].value.length; k++) {
                $scope.graphOptions[i].value[k][1] = base10($scope.graphOptions[i].value[k][1]);
            }
        } else {
            $scope.xtype = 'linear';
        }
        // $scope.graphOptions[1].value[i].y = base10($scope.graphOptions[1].value[i].y);
    }

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $scope.updateGraph = function (value) {
        if (value == 0) {
            $scope.data.selectedGraphData = newArray();
        }
        else {
            $scope.data.selectedGraphData = $scope.data.boom.value;
            $scope.options.scales.xAxes[0].ticks.min = $scope.data.selectedGraphData[0].x;
            $scope.options.scales.xAxes[0].ticks.max = $scope.data.selectedGraphData[$scope.data.selectedGraphData.length - 1].x;
            $scope.options.scales.xAxes[0].ticks.fixedStepSize = 5;
        }

        $scope.options.scales.xAxes[0].ticks.reverse = $scope.data.boom.log.x;
        if (!$scope.data.boom.log.x) {
            $scope.options.scales.xAxes[0].type = $scope.xtype;
        }
        console.log(typeof($scope.data.selectedGraphData), $scope);
        $scope.chart.options.hAxis.direction = $scope.data.boom.log.x ? -1 : 1;
        $scope.chart.options.hAxis.format = $scope.data.boom.log.x ? 'scientific' : '#';
        $scope.chart.options.vAxis.format = $scope.data.boom.log.y ? 'scientific' : 'none';
        $scope.chart.options.hAxis.scaleType = $scope.data.boom.log.x ? 'log' : null;
        $scope.chart.options.hAxis.title = $scope.data.boom.title.x;
        $scope.chart.options.vAxis.title = $scope.data.boom.title.y;
        $scope.chart.options.series[0].color = $scope.colors[Math.round(Math.random()*$scope.colors.length-1)];
        $scope.chart.data = [
            [$scope.data.boom.title.y, $scope.data.boom.title.y]
        ].concat($scope.data.boom.value);

    };


    $scope.datasetOverride = [{
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
    }];
    $scope.graphSetup = {curval: 0};

    $scope.options = {
        scales: {
            xAxes: [{
                id: 'x-axis-1',
                type: $scope.xtype,
                ticks: {
                    autoSkip: false,
                    fontSize: 14,
                    fontColor: '#FFFFFF',
                    reverse: $scope.data.boom.log.x,
                    callback: function (value, index, values) {
                        if ($scope.data.boom.log.x) {
                            return formatAxes(value, index, values);
                        } else {
                            return value
                        }
                    }
                },
                position: 'bottom'
            }],
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: $scope.ytype,
                    display: true,
                    position: 'left',
                    ticks: {
                        autoSkip: true,
                        fontColor: '#FFFFFF',
                        callback: function (value, index, values) {
                            return formatAxes(value, index, values);
                        },
                        fontSize: 16
                    }
                }
            ]
        }
    };

    var chart1 = {};
    chart1.type = "AreaChart";

    var randomoption = Math.round(Math.random() * ($scope.graphOptions.length-1));
    console.log(randomoption);
    chart1.data = [
        [$scope.graphOptions[randomoption].title.x, $scope.graphOptions[randomoption].title.y]
    ];

    chart1.data = chart1.data.concat($scope.graphOptions[randomoption].value);

    chart1.options = {
        backgroundColor: { stroke: 'transparent', fill: 'transparent'},
        hAxis: {
            title: $scope.graphOptions[randomoption].title.x,
            direction: $scope.graphOptions[randomoption].log.x ? -1 : 1 ,
            format: '#',
            scaleType: 'log',
            logScale: $scope.graphOptions[randomoption].log.x
        },
        vAxis: {
            title: $scope.graphOptions[randomoption].title.y,
            logScale: $scope.graphOptions[randomoption].log.y
        },
        series: {
            0: { color: 'green', areaOpacity: 0.4},
            1: { color: '#004411',areaOpacity: 0.7}
        },
        // explorer: {},
        pointsVisible: true,
        legend: {position: 'none'},
        curveType: 'function',
        // displayExactValues: true,
        width: $window.innerWidth*.8,
        height: $window.innerHeight*.7
        // chartArea: {left:10,top:10,bottom:0,height:"100%"}
    };

    chart1.formatters = {
        number: [{
            columnNum: 1,
            pattern: "short"
        },{
            columnNum: 0,
            pattern: "#"
        }]
    };

    $scope.chart = chart1;

    console.log($scope);


})
    .controller('AboutCtrl', ['$route', '$routeParams', '$location',
        function AboutCtrl($route, $routeParams, $location) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
        }])
    .controller('ChatCtrl', ['$route', '$routeParams', '$location',
        function ChatCtrl($route, $routeParams, $location) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
        }])
    .controller('HomeCtrl', ['$route', '$routeParams', '$scope',
        function HomeCtrl($route, $routeParams, $scope) {
            this.$route = $route;
            // this.$location = $location;
            this.$routeParams = $routeParams;
            $scope.viewBool = false;
            console.log($scope.viewBool);
            $scope.switchView = function () {
                $scope.viewBool = !$scope.viewBool;
                console.log($scope.viewBool);
            };

            $scope.selected = { attributes: [
                {name: "Size", value: 10},
                {name: "Cost", value: 10},
                {name: "Date", value: 10},
                {name: "Size", value: 10},
                {name: "Time", value: "10 minutes"},
                {name: "Realiability", value: "10 minutes"},
                {name: "Efficiency", value: "10 minutes"},
                {name: "Accuracy", value: "10 minutes"},
                {name: "Precision", value: "10 minutes"},
                {name: "Power", value: "10 minutes"},
                {name: "Lifespan", value: "10 minutes"}]
                };
        }]);
biobreaksapp.directive('tooltip', function ($document, $compile) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {

            var tip = $compile('<div ng-class="tipClass">{{ text }}<div class="tooltip-arrow"></div></div>')(scope),
                tipClassName = 'tooltip',
                tipActiveClassName = 'tooltip-show';

            scope.tipClass = [tipClassName];
            scope.text = attrs.tooltip;

            if(attrs.tooltipPosition) {
                scope.tipClass.push('tooltip-' + attrs.tooltipPosition);
            }
            else {
                scope.tipClass.push('tooltip-down');
            }
            $document.find('body').append(tip);

            element.bind('mouseover', function (e) {
                tip.addClass(tipActiveClassName);

                var pos = e.target.getBoundingClientRect(),
                    offset = tip.offset(),
                    tipHeight = tip.outerHeight(),
                    tipWidth = tip.outerWidth(),
                    elWidth = pos.width || pos.right - pos.left,
                    elHeight = pos.height || pos.bottom - pos.top,
                    tipOffset = 10;

                if(tip.hasClass('tooltip-right')) {
                    offset.top = pos.top - (tipHeight / 2) + (elHeight / 2);
                    offset.left = pos.right + tipOffset;
                }
                else if(tip.hasClass('tooltip-left')) {
                    offset.top = pos.top - (tipHeight / 2) + (elHeight / 2);
                    offset.left = pos.left - tipWidth - tipOffset;
                }
                else if(tip.hasClass('tooltip-down')) {
                    offset.top = pos.top + elHeight + tipOffset;
                    offset.left = pos.left - (tipWidth / 2) + (elWidth / 2);
                }
                else {
                    offset.top = pos.top - tipHeight - tipOffset;
                    offset.left = pos.left - (tipWidth / 2) + (elWidth / 2);
                }

                tip.offset(offset);
            });

            element.bind('mouseout', function () {
                tip.removeClass(tipActiveClassName);
            });

            tip.bind('mouseover', function () {
                tip.addClass(tipActiveClassName);
            });

            tip.bind('mouseout', function () {
                tip.removeClass(tipActiveClassName);
            });


        }
    }
});