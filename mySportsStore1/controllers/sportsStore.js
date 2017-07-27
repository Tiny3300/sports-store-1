angular.module("sportsStore",["customFilters"])
    .controller("sportsStoreCtrl", function ($scope) {

        $scope.data = {
            products:[
                {name:"篮球",description:"李宁7号篮球吸湿耐磨防滑",
                category:"运动设备",price:100},
                {name:"计步手环",description:"智能运动 心率监测 来电提醒 久坐提醒 LED显示屏 ",
                    category:"运动设备",price:110},
                {name:"羽毛球拍",description:"刚猛 绝对得强硬",
                    category:"运动设备",price:110},
                {name:"跑步机",description:"上去了 就不想停不下来",
                    category:"运动设备",price:110},

                {name:"乔丹长裤",description:"耐磨 吸汗",
                    category:"运动服装",price:210},

                {name:"钛合金奖杯",description:"琉璃 创意奖牌 纪念品 ",
                    category:"奖品",price:202}
            ]
        };


    });
