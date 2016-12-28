var biobreaksapp = angular.module('biobreaksapp', ['chart.js', 'googlechart']);

biobreaksapp.controller('FutureController', function FutureController($scope, $window) {
    $scope.test = "TEST 1";
    $scope.labels = "January";
    $scope.series = ['Series A', 'Series B'];
    $scope.data = {boom: {log: {x: false, y: false}}};
    $scope.data.selectedGraphData = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
    $scope.data.boom.value = $scope.data.selectedGraphData;
    console.log(typeof(parseInt(parseInt(Math.floor(Math.random() * 100)))), typeof($scope.data.selectedGraphData));

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
    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
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
            labels: ["Milky Way", "Life on Earth", "First Eukaryotes",
                "First Multicellular life", "Cambrian Explosion", "First mammals", "First flowering plants", "Asteroid collision", "First hominoids", "First orangutan", "Chimpanzees and humans diverge", "First stone tools", "Emergence of Homo sapiens", "Domestication of fire",
                "Domestication of fire", "Differentiation of human DNA Types", "Emergence of modern Humans", "Rock art, protowriting", "Invention of agriculture",
                "Techniques for starting fire", "Development of the wheel, writing", "Democracy", "Zero and decimals", "Renaissance (printing press)", "Industrial Revolution",
                "Modern physics", "DNA structure, transistor, nuclear, energy"],
            options: {},
            title: {x: 'Year', y: 'Revenue Dollars (millions)'},
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
    // $scope.updateGraph(0)
    console.log($scope);

    // $scope.aa=1*$scope.chart.data[1][1];
    // $scope.bb=1*$scope.chart.data[2][1];
    // $scope.cc=1*$scope.chart.data[3][1];
});
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