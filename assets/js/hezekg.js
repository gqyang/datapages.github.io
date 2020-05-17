/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * ---------------------------------------
 */
am4core.useTheme(am4themes_animated)

var wufangbu = { name: "无纺布", value: 5, children: [] }
var dongminghengchang = { name: "东明恒昌\n化工", value: 3, children: [] }
var dongmingdongfang = { name: "东明东方\n化工", value: 3, children: [] }
var hezeguanghui = { name: "菏泽广汇\n化工", value: 3, children: [] }
var shandongyouyi = { name: "山东优一\n新材料", value: 3, children: [] }
wufangbu.children = [dongminghengchang, dongmingdongfang, hezeguanghui, shandongyouyi]


var rongpenbu = { name: "熔喷布", value: 5, children: [] }
var feitengwufangbu = { name: "菏泽飞腾\n无纺布", value: 3, children: [] }
var shandongzhonglian = { name: "山东众联\n无纺布", value: 3, children: [] }
var enkangyiliao = { name: "恩康医疗\n器械", value: 3, children: [] }
var yuxiangxincailiao = { name: "菏泽宇翔\n新材料", value: 3, children: [] }
var shandongqianhui = { name: "山东前辉\n无纺布", value: 3, children: [] }
var maoxingzhenzhi = { name: "茂星\n针织", value: 3, children: [] }
rongpenbu.children = [feitengwufangbu, shandongzhonglian, enkangyiliao, yuxiangxincailiao, shandongqianhui, maoxingzhenzhi]

var juyixi = { name: "聚乙烯树脂", value: 5, children: [] }
var kuntengjuyixi = { name: "坤腾\n聚乙烯\n丙纶", value: 3, children: [] }
var yongxingsuoliao = { name: "山东咏兴\n塑料制品", value: 3, children: [] }
var shengboxincailiao = { name: "山东盛博\n新材料", value: 3, children: [] }
juyixi.children = [kuntengjuyixi, yongxingsuoliao, shengboxincailiao]

var kouzhaodapian = { name: "口罩打片机", value: 5, children: [] }
var xinheguolv = { name: "菏泽欣禾\n过滤", value: 3, children: [] }
var lushubaojiankong = { name: "山东\n鲁舒宝\n健康", value: 3, children: [] }
var lukangweisheng = { name: "山东鲁康\n卫生材料", value: 3, children: [] }
var huatengyiliao = { name: "华腾医疗\n器械", value: 3, children: [] }
var wankangweisheng = { name: "山东万康\n卫生材料", value: 3, children: [] }
kouzhaodapian.children = [xinheguolv, lushubaojiankong, lukangweisheng, huatengyiliao, wankangweisheng]

var erdaiji = { name: "耳带机", value: 5, children: [] }
var zhengyueyiliao = { name: "郓城正悦\n医疗", value: 3, children: [] }
var xieyiyiliao = { name: "协医医疗\n器械", value: 3, children: [] }
var chuxiweishi = { name: "楚熙卫士\n医疗器械", value: 3, children: [] }
erdaiji.children = [zhengyueyiliao, xieyiyiliao, chuxiweishi]

var dianhanji = { name: "耳带电焊机", value: 5, children: [] }

var kouzhao = {name:"医用口罩", value:7, children:[wufangbu, rongpenbu, juyixi, kouzhaodapian, erdaiji, dianhanji]}
var data = [kouzhao]

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";

series.links.template.distance = 1.5;
series.links.template.tooltipText = "{name}: [bold]{value}[/]";
series.links.template.interactionsEnabled = true;
series.minRadius = am4core.percent(0.8);
series.nodes.template.label.text = "{name}";
series.nodes.template.label.fontSize = 12;

chart.data = data;