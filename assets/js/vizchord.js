/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.ChordDiagram);

// colors of main characters
chart.colors.saturation = 0.45;
chart.colors.step = 3;
var colors = {
    Rachel:chart.colors.next(),
    Monica:chart.colors.next(),
    Phoebe:chart.colors.next(),
    Ross:chart.colors.next(),
    Joey:chart.colors.next(),
    Chandler:chart.colors.next()
}

// data was provided by: https://www.reddit.com/user/notrudedude

chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here


// real data
{"from":"山东·青岛","to":"广东·惠州","value":72.72727272727273,"ind_f":"电子及家电产品","ind_t":"电子产品"},
{"from":"湖北·孝感","to":"广东·深圳","value":75.0,"ind_f":"电子信息","ind_t":"通信电子"},
{"from":"湖北·孝感","to":"广东·东莞","value":80.0,"ind_f":"电子信息","ind_t":"电子信息产品"},
{"from":"湖北·孝感","to":"江苏·无锡","value":66.66666666666666,"ind_f":"电子信息","ind_t":"电子"},
{"from":"广东·深圳","to":"江苏·无锡","value":66.66666666666666,"ind_f":"通信电子","ind_t":"电子"},
{"from":"广东·东莞","to":"广东·惠州","value":80.0,"ind_f":"电子信息产品","ind_t":"电子产品"},
{"from":"广东·东莞","to":"福建·厦门","value":66.66666666666666,"ind_f":"电子信息产品","ind_t":"商用电子产品"},
{"from":"广东·惠州","to":"福建·厦门","value":80.0,"ind_f":"电子产品","ind_t":"商用电子产品"},
{"from":"广东·惠州","to":"江苏·无锡","value":66.66666666666666,"ind_f":"电子产品","ind_t":"电子"},
{"from":"广东·惠州","to":"广东·中山","value":75.0,"ind_f":"电子产品","ind_t":"机电产品"},
{"from":"湖北·汉川","to":"广东·佛山","value":100.0,"ind_f":"纺织","ind_t":"纺织"},
{"from":"湖北·汉川","to":"江苏·江阴","value":66.66666666666666,"ind_f":"纺织","ind_t":"精细纺织"},
{"from":"湖北·汉川","to":"江苏·吴江","value":66.66666666666666,"ind_f":"纺织","ind_t":"丝绸纺织"},
{"from":"广东·佛山","to":"江苏·江阴","value":66.66666666666666,"ind_f":"纺织","ind_t":"精细纺织"},
{"from":"广东·佛山","to":"江苏·吴江","value":66.66666666666666,"ind_f":"纺织","ind_t":"丝绸纺织"},
{"from":"江苏·南通","to":"安徽·安庆","value":66.66666666666666,"ind_f":"家纺","ind_t":"手工家纺"},
{"from":"河北·辛集","to":"浙江·海宁","value":66.66666666666666,"ind_f":"皮革","ind_t":"皮革加工"},
{"from":"浙江·瑞安","to":"福建·晋江","value":75.0,"ind_f":"休闲鞋","ind_t":"休闲运动鞋"},
{"from":"广东·广州","to":"江苏·常熟","value":66.66666666666666,"ind_f":"牛仔服装","ind_t":"服装"},
{"from":"福建·石狮","to":"福建·晋江","value":72.72727272727273,"ind_f":"休闲运动服装","ind_t":"休闲运动鞋"},
{"from":"湖北·武汉","to":"上海","value":66.66666666666666,"ind_f":"钢铁制品","ind_t":"钢铁"},
{"from":"湖北·武汉","to":"江苏·兴化","value":66.66666666666666,"ind_f":"钢铁制品","ind_t":"不锈钢制品"},
{"from":"湖北·黄冈","to":"浙江·杭州","value":100.0,"ind_f":"钢结构","ind_t":"钢结构"},
{"from":"安徽·合肥","to":"广东·佛山","value":66.66666666666666,"ind_f":"家电配套","ind_t":"家电"},
{"from":"广东·佛山","to":"江苏·张家港","value":72.72727272727273,"ind_f":"金属加工","ind_t":"冶金及金属加工"},
{"from":"福建·南平","to":"浙江·舟山","value":75.0,"ind_f":"林业加工","ind_t":"渔业加工"},
{"from":"湖北·鄂州","to":"浙江·余姚","value":100.0,"ind_f":"模具","ind_t":"模具"},
{"from":"湖北·鄂州","to":"浙江·台州","value":66.66666666666666,"ind_f":"模具","ind_t":"塑料模具"},
{"from":"浙江·余姚","to":"浙江·台州","value":66.66666666666666,"ind_f":"模具","ind_t":"塑料模具"},
{"from":"浙江·瑞安","to":"重庆","value":83.33333333333334,"ind_f":"汽车摩托车配件","ind_t":"汽车摩托车"},
{"from":"广东·江门","to":"重庆","value":75.0,"ind_f":"摩托车","ind_t":"汽车摩托车"},
{"from":"河南·骡河","to":"福建·漳州","value":66.66666666666666,"ind_f":"食品","ind_t":"休闲食品"},
{"from":"湖北·当阳","to":"广东·佛山","value":80.0,"ind_f":"建筑陶瓷","ind_t":"建筑卫生陶瓷"},
{"from":"湖北·天门","to":"吉林·通化","value":100.0,"ind_f":"医药","ind_t":"医药"},
{"from":"湖北·天门","to":"湖北·武穴","value":66.66666666666666,"ind_f":"医药","ind_t":"医药化工"},
{"from":"吉林·通化","to":"湖北·武穴","value":66.66666666666666,"ind_f":"医药","ind_t":"医药化工"},

]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.dataFields.indf = "ind_f";
chart.dataFields.indt = "ind_t";

chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "fromName";
chart.fontSize = 15;

var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function(fill, target) {
    let node = target;
    let counters = {};
    let mainChar = false;
    node.incomingDataItems.each(function(dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    let count = 0;
    let color;
    let biggest = 0;
    let biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{fromName}:{indf} & {toName}:{indt}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

// data credit label
var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "created by gqyang";
creditLabel.url = "";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";

var titleImage = chart.chartContainer.createChild(am4core.Image);
titleImage.href = "";
titleImage.x = 30
titleImage.y = 30;
titleImage.width = 200;
titleImage.height = 200;