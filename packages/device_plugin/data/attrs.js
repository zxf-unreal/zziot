const unitOption = [
    {
        "value": "-",
        "label": "无"
    },
    {
        "value": "°",
        "label": "度"
    },
    {
        "value": "°C",
        "label": "摄氏度"
    },
    {
        "value": "%RH",
        "label": "相对湿度"
    },
    {
        "value": "mg/kg",
        "label": "毫克每千克"
    },
    {
        "value": "NTU",
        "label": "浊度"
    },
    {
        "value": "pH",
        "label": "PH值"
    },
    {
        "value": "dS/m",
        "label": "土壤EC值"
    },
    {
        "value": "mm/hour",
        "label": "降雨量"
    },
    {
        "value": "cP",
        "label": "厘泊"
    },
    {
        "value": "aw",
        "label": "饱和度"
    },
    {
        "value": "pcs",
        "label": "个"
    },
    {
        "value": "cst",
        "label": "厘斯"
    },
    {
        "value": "ppt",
        "label": "纳克每升"
    },
    {
        "value": "ppb",
        "label": "微克每升"
    },
    {
        "value": "uS/cm",
        "label": "微西每厘米"
    },
    {
        "value": "N/C",
        "label": "牛顿每库仑"
    },
    {
        "value": "V/m",
        "label": "伏特每米"
    },
    {
        "value": "ml/min",
        "label": "滴速"
    },
    {
        "value": "mmHg",
        "label": "血压"
    },
    {
        "value": "mmol/L",
        "label": "血糖"
    },
    {
        "value": "mm/s",
        "label": "毫米每秒"
    },
    {
        "value": "turn/m",
        "label": "转每分钟"
    },
    {
        "value": "count",
        "label": "次"
    },
    {
        "value": "gear",
        "label": "档"
    },
    {
        "value": "stepCount",
        "label": "步"
    },
    {
        "value": "Nm3/h",
        "label": "标准立方米每小时"
    },
    {
        "value": "kV",
        "label": "千伏"
    },
    {
        "value": "kVA",
        "label": "千伏安"
    },
    {
        "value": "kVar",
        "label": "千乏"
    },
    {
        "value": "uw/cm2",
        "label": "微瓦每平方厘米"
    },
    {
        "value": "只",
        "label": "只"
    },
    {
        "value": "m³/s",
        "label": "立方米每秒"
    },
    {
        "value": "kg/s",
        "label": "公斤每秒"
    },
    {
        "value": "r/min",
        "label": "转每分钟"
    },
    {
        "value": "t/h",
        "label": "吨每小时"
    },
    {
        "value": "KCL/h",
        "label": "千卡每小时"
    },
    {
        "value": "L/s",
        "label": "升每秒"
    },
    {
        "value": "Mpa",
        "label": "兆帕"
    },
    {
        "value": "m³/h",
        "label": "立方米每小时"
    },
    {
        "value": "kvarh",
        "label": "千乏时"
    },
    {
        "value": "μg/L",
        "label": "微克每升"
    },
    {
        "value": "kcal",
        "label": "千卡路里"
    },
    {
        "value": "GB",
        "label": "吉字节"
    },
    {
        "value": "MB",
        "label": "兆字节"
    },
    {
        "value": "KB",
        "label": "千字节"
    },
    {
        "value": "B",
        "label": "字节"
    },
    {
        "value": "μg/(d㎡·d)",
        "label": "微克每平方分米每天"
    },
    {
        "value": "ppm",
        "label": "百万分率"
    },
    {
        "value": "pixel",
        "label": "像素"
    },
    {
        "value": "Lux",
        "label": "照度"
    },
    {
        "value": "grav",
        "label": "重力加速度"
    },
    {
        "value": "dB",
        "label": "分贝"
    },
    {
        "value": "%",
        "label": "百分比"
    },
    {
        "value": "lm",
        "label": "流明"
    },
    {
        "value": "bit",
        "label": "比特"
    },
    {
        "value": "g/mL",
        "label": "克每毫升"
    },
    {
        "value": "g/L",
        "label": "克每升"
    },
    {
        "value": "mg/L",
        "label": "毫克每升"
    },
    {
        "value": "μg/m³",
        "label": "微克每立方米"
    },
    {
        "value": "mg/m³",
        "label": "毫克每立方米"
    },
    {
        "value": "g/m³",
        "label": "克每立方米"
    },
    {
        "value": "kg/m³",
        "label": "千克每立方米"
    },
    {
        "value": "nF",
        "label": "纳法"
    },
    {
        "value": "pF",
        "label": "皮法"
    },
    {
        "value": "μF",
        "label": "微法"
    },
    {
        "value": "F",
        "label": "法拉"
    },
    {
        "value": "Ω",
        "label": "欧姆"
    },
    {
        "value": "μA",
        "label": "微安"
    },
    {
        "value": "mA",
        "label": "毫安"
    },
    {
        "value": "kA",
        "label": "千安"
    },
    {
        "value": "A",
        "label": "安培"
    },
    {
        "value": "mV",
        "label": "毫伏"
    },
    {
        "value": "V",
        "label": "伏特"
    },
    {
        "value": "ms",
        "label": "毫秒"
    },
    {
        "value": "s",
        "label": "秒"
    },
    {
        "value": "min",
        "label": "分钟"
    },
    {
        "value": "h",
        "label": "小时"
    },
    {
        "value": "day",
        "label": "日"
    },
    {
        "value": "week",
        "label": "周"
    },
    {
        "value": "month",
        "label": "月"
    },
    {
        "value": "year",
        "label": "年"
    },
    {
        "value": "kn",
        "label": "节"
    },
    {
        "value": "km/h",
        "label": "千米每小时"
    },
    {
        "value": "m/s",
        "label": "米每秒"
    },
    {
        "value": "″",
        "label": "秒"
    },
    {
        "value": "′",
        "label": "分"
    },
    {
        "value": "rad",
        "label": "弧度"
    },
    {
        "value": "Hz",
        "label": "赫兹"
    },
    {
        "value": "μW",
        "label": "微瓦"
    },
    {
        "value": "mW",
        "label": "毫瓦"
    },
    {
        "value": "kW",
        "label": "千瓦特"
    },
    {
        "value": "W",
        "label": "瓦特"
    },
    {
        "value": "cal",
        "label": "卡路里"
    },
    {
        "value": "kW·h",
        "label": "千瓦时"
    },
    {
        "value": "Wh",
        "label": "瓦时"
    },
    {
        "value": "eV",
        "label": "电子伏"
    },
    {
        "value": "kJ",
        "label": "千焦"
    },
    {
        "value": "J",
        "label": "焦耳"
    },
    {
        "value": "℉",
        "label": "华氏度"
    },
    {
        "value": "K",
        "label": "开尔文"
    },
    {
        "value": "t",
        "label": "吨"
    },
    {
        "value": "mPa",
        "label": "毫帕"
    },
    {
        "value": "hPa",
        "label": "百帕"
    },
    {
        "value": "kPa",
        "label": "千帕"
    },
    {
        "value": "Pa",
        "label": "帕斯卡"
    },
    {
        "value": "mg",
        "label": "毫克"
    },
    {
        "value": "g",
        "label": "克"
    },
    {
        "value": "kg",
        "label": "千克"
    },
    {
        "value": "N",
        "label": "牛"
    },
    {
        "value": "mL",
        "label": "毫升"
    },
    {
        "value": "L",
        "label": "升"
    },
    {
        "value": "mm³",
        "label": "立方毫米"
    },
    {
        "value": "cm³",
        "label": "立方厘米"
    },
    {
        "value": "km³",
        "label": "立方千米"
    },
    {
        "value": "m³",
        "label": "立方米"
    },
    {
        "value": "h㎡",
        "label": "公顷"
    },
    {
        "value": "c㎡",
        "label": "平方厘米"
    },
    {
        "value": "m㎡",
        "label": "平方毫米"
    },
    {
        "value": "k㎡",
        "label": "平方千米"
    },
    {
        "value": "㎡",
        "label": "平方米"
    },
    {
        "value": "nm",
        "label": "纳米"
    },
    {
        "value": "μm",
        "label": "微米"
    },
    {
        "value": "mm",
        "label": "毫米"
    },
    {
        "value": "cm",
        "label": "厘米"
    },
    {
        "value": "dm",
        "label": "分米"
    },
    {
        "value": "km",
        "label": "千米"
    },
    {
        "value": "m",
        "label": "米"
    }
]
const now = new Date().toLocaleDateString();
const dataType = [
    { value: "float", label: "浮点型", exValue: { dataRange: "0-999", stepLength: "0.1", unit: "-" }  },
    { value: "bool", label: "布尔类型", exValue: { dataRange: "true-false", stepLength: "-", unit: "-" } },
    { value: "integer", label: "整数", exValue: { dataRange: "0-999", stepLength: "1", unit: "°" }   },
    { value: "text", label: "字符串", exValue: { dataRange: "-", stepLength: "-", unit: "-" }   },
    { value: "date", label: "时间", exValue: { dataRange: now + "-" + now, stepLength: "-", unit: "-" }   },
    { value: "object", label: "对象", exValue: { dataRange: "{}-{}", stepLength: "-", unit: "-" }   },
]
const required = true, only = true, advanced =true;
export const tableAttr = {
    properties: [
        { field: "title", label: "字段名(例：温度)", validate: {required, only}},
        { field: "name", label: "字段(例：temperature)", validate: {required, only}},
        { field: "dataType", label: "数据类型", type: "select", default: "float",validate: {required},
            options: dataType
        },
        { field: "dataRange", label: "取值范围", advanced, type: "range", default: "0-999"},
        { field: "stepLength", label: "间距", advanced, default: 0.1},
        { field: "unit", label: "单位(例：℃)", validate: { only}},
        { field: "description", label: "描述", advanced, type: "textarea"},
    ],
    services: [
        { field: "function", label: "功能"},
        { field: "topic", label: "topic"},
        { field: "description", label: "描述", type: "select"}
    ],
    events: [
        { field: "function", label: "功能"},
        { field: "topic", label: "topic"},
        { field: "description", label: "描述"}
    ]
}

export const standardTSL = [
    {
        label: "环境传感器",
        value: "ambient_sensor",
        children: [
            {
                value: "temperature_and_humidity",
                label: "温湿度传感器",
                tsl: {
                    properties: [
                        { name: "temperature", title: "温度", dataType: "float", dataRange: "0-100", stepLength: 0.1, unit: "°C"},
                        { name: "humidity", title: "湿度", dataType: "float", dataRange: "0-100", stepLength: 0.1, unit: "%"},
                        { name: "geolocation", title: "地理位置", dataType: "object", dataRange: "", stepLength: "", unit: ""}
                    ]
                }
            },
            {
                value: "pm25", label:"PM2.5传感器",
                tsl: {
                    properties: [
                        { name: "pm25", title: "PM2.5", dataType: "float", dataRange: "0-999", stepLength: 1, unit: "μg/m³"},
                        { name: "pm10", title: "PM10", dataType: "float", dataRange: "0-999", stepLength: 1, unit: "mg/m³", description: "可吸入颗粒物"},
                    ]
                }
            },
            {
                value: "wind", label:"风速风向传感器",
                tsl: {
                    properties: [
                        { name: "speed", title: "风速", dataType: "float", dataRange: "0-999", stepLength: 0.1, unit: "m/s"},
                        { name: "direction", title: "风向", dataType: "integer", dataRange: "0-360", stepLength: 2, unit: "°"},
                    ]
                }
            },
            {
                value: "noise", label:"噪声传感器",
                tsl: {
                    properties: [
                        { name: "noise", title: "声强", dataType: "float", dataRange: "0-999", stepLength: 1.5, unit: "dB"},
                    ]
                }
            },
            {
                value: "light", label:"光照强度传感器",
                tsl: {
                    properties: [
                        { name: "light", title: "光照", dataType: "float", dataRange: "0-200000", stepLength: 0.001, unit: "Lux"},
                    ]
                }
            },
            {
                value: "air_pressure", label:"气压传感器",
                tsl: {
                    properties: [
                        { name: "air", title: "气压", dataType: "float", dataRange: "30-110", stepLength: 0.25, unit: "kPa"},
                    ]
                }
            }
        ]
    },
    {
        label: "气体传感器",
        value: "gas_sensor",
        children: []
    },
    {
        value: "fire_sensor", label: "消防传感器",
        children: []
    },
    {
        value: "water_sensor", label: "水下传感器",
        children: []
    },
    {
        value: "soil_sensor", label: "土壤传感器",
        children: []
    },
    {
        value: "status_sensor", label: "状态传感器",
        children: []
    },
    {
        value: "alert", label: "报警器",
        children: []
    },
    {
        value: "signal_light", label: "信号灯",
        children: []
    },
    {
        value: "light", label: "照明",
        children: []
    },
    {
        value: "relay", label: "继电器类",
        children: []
    },
    {
        value: "ammeter", label: "电表类",
        children: []
    },
    {
        value: "location", label: "定位",
        children: []
    },
    {
        value: "other", label: "其他",
        children: []
    }
]
export const iconList = [
    "el-icon-warning", "el-icon-warning-outline", "el-icon-success", "el-icon-circle-check", "el-icon-error", "el-icon-circle-check",
    "el-icon-s-flag", "el-icon-s-opportunity", "el-icon-umbrella", "el-icon-close-notification", "el-icon-switch-button",
    "el-icon-switch-button", "el-icon-light-rain", "el-icon-lightning", "el-icon-heavy-rain",
    "el-icon-sunrise", "el-icon-sunny", "el-icon-moon", "el-icon-phone-outline"
]
export default { unitOption, dataType, standardTSL, tableAttr }