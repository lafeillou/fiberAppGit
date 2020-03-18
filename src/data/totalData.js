const totalData =  {
    // 第一步，缆芯结构，可供选择的加强芯种类
    coreNumberPerPipeList: [0,1,2,4,6,8,10,12,16,20,24],
    reinforceCoreTypeList: [
        {value: 0,label:'钢丝'},
        {value: 1,label:'FRP'},
        {value: 2,label:'套塑钢丝'},
        {value: 3,label:'套塑FRP'}
    ],
    // 可供选择的阻水方式
    waterBlockingTypeList: [
        {value: 0,label: '缆芯填油'},
        {value: 1,label: '半干式'},
        {value: 2,label: '全干式'},
    ],
    // 可供选择的大套组件
    bigComponentList: [
        {value:0,label: '小填充绳'}
    ],

    // 第二步,二次成缆
    // 可供选择的颜色序列
    colourSpectrumList: [
        {value:0,label: '国标全色谱'},
        {value:1,label: '(台湾)蓝黄绿红紫白棕黑水绿橙粉灰'},
        {value:2,label: '(土耳其)红黄绿蓝紫棕黑橘粉灰水绿白'},
        {value:3,label: '(S12)红蓝白绿黄灰棕黑紫桔水绿粉'},
        {value:4,label: '(DIN)红绿蓝黄白灰棕紫水绿黑桔粉'},
        {value:5,label: '(波兰)红蓝绿黄紫白橘灰棕黑水绿粉'},
        {value:6,label: '(德国)红绿蓝黄白灰棕紫水绿黑桔粉'},
        {value:7,label: '白红黄绿蓝灰棕黑紫水绿橘粉'},
        {value:8,label: '红黄绿蓝棕黑橘紫白灰水绿粉'},
        {value:9,label: '绿红蓝黄灰紫棕桔白黑粉水绿'},
        {value:10,label: '蓝黄绿红紫白棕黑水绿桔粉灰'},
        {value:11,label: '蓝黄绿红紫白橘棕灰黑粉水绿'},
        {value:12,label: '蓝黄绿红紫白橘灰黑棕水绿粉'},
        {value:13,label: '蓝黄红白绿紫桔灰棕水绿黑粉'},
        {value:14,label: '红蓝白绿紫橘灰黄棕粉黑水绿'},
    ],
    // 可供选择的彩色套管
    colourfulPipeList: [
        {value:0,label: '黑彩'},
        {value:1,label: '白彩'},
        {value:2,label: '黄彩'}
    ],

    // 第三步，一次护套
    cableOpeningRopeList: [
        {value:0, label: '1根白色'},
        {value:1, label: '2根白色'},
        {value:2, label: '1根黄色'},
        {value:3, label: '2根黄色'},
        {value:4, label: '1根红色'},
        {value:5, label: '2根红色'},
    ],
    // 阻水方式
    waterBlockingTypeList2: [
        {value:0, label:'填油'},
        {value:1, label:'阻水带'},
        {value:2, label:'填油包聚酯带'}
    ],
    // 铠装结构1
    armourStructureList1: [
        {value:0, label: '芳纶纱'},
        {value:1, label: '玻璃纱'},
        {value:2, label: '铝带'},
        {value:3, label: '钢带'},
        {value:4, label: '云母带'}
    ],
    // 铠装结构2
    armourStructureList2: [
        {value:0, label: '芳纶纱'},
        {value:1, label: '玻璃纱'},
        {value:2, label: '铝带'},
        {value:3, label: '钢带'}
    ],
    // 彩条结构1
    colorBarStructureList1: [
        {value:0, label:'1根彩条'},
        {value:1, label:'对称2根彩条'}
    ],
    colorBarStructureList2: [
        {value:0, label:'1根彩条'},
        {value:1, label:'对称2根彩条'},
        {value:2, label:'3根彩条'}
    ],
    // 尼龙护套
    nylonSheathList: [
        {value: 0, label: '蓝色尼龙'},
        {value: 1, label: '黑色尼龙'},
        {value: 2, label: '橙色尼龙'}

    ],

    // 第五步 
    // 辅助加强件
    auxiliaryReinforcementList: [
        {value: 0, label: '7根钢绞线'},
        {value: 1, label: '1根吊线FRP'},
        {value: 2, label: '1根吊线钢丝'},
        {value: 3, label: '2根平行钢丝'},
        {value: 4, label: '4根平行钢丝'},
    ],
    // 水缆
    waterCableList: [
        {value: 0, label: '33（单层）'},
        {value: 1, label: '333（双层）'}
    ]
}

export default totalData