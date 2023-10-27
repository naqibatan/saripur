

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1"><link href="css/style.css" rel="stylesheet" type="text/css" />

    <script src="Js/amcharts.js" type="text/javascript"></script>

    <script src="Js/serial.js" type="text/javascript"></script>

    <script src="Js/amstock.js" type="text/javascript"></script>

    <link href="css/style.css" rel="stylesheet" type="text/css" />

    <script src="Js/jquery-1.5.1.min.js" type="text/javascript"></script>

<title>

</title></head>
<body>
    <div id="chartdiv" style="width: 100%; height: 280px;">
    </div>

    <script type='text/javascript'>//<![CDATA[ 

AmCharts.ready(function () {
    generateChartData();
    createStockChart();
});

var chartData = [];

function generateChartData() {
 var data="2023-09-26,25.90,2165982~2023-09-27,27.81,9506224~2023-09-28,27.48,4291031~2023-09-29,27.62,1539302~2023-10-03,28.38,4956292~2023-10-04,27.18,4806591~2023-10-05,27.76,3556236~2023-10-06,28.61,4199113~2023-10-09,27.15,4292609~2023-10-10,27.75,3007114~2023-10-11,27.63,3513503~2023-10-12,27.40,2193066~2023-10-13,27.50,2747394~2023-10-16,28.58,8935296~2023-10-17,29.05,4221385~2023-10-18,27.91,3517083~2023-10-19,28.61,4917531~2023-10-20,27.79,3190760~2023-10-23,24.59,6123311~2023-10-25,24.67,5733677~2023-10-26,25.17,4482946~";

    var dt=data.split('~');
     var firstDate = new Date(2012, 0, 1);
    firstDate.setDate(firstDate.getDate() - 1000);
    firstDate.setHours(0, 0, 0, 0);
    

    for (var i = 0; i < dt.length; i++) {
    if(dt[i]!=""){
      var dtq=dt[i].split(',');
  var newDate = new Date(firstDate);
        newDate.setHours(0, i, 0, 0);
        
  
        chartData.push({
            date: dtq[0],
            value: dtq[1],
            volume:dtq[2]
        });
        }
    }


  
   
}
function parseDate(dateString) {
     // split the string get each field
     var dateArray = dateString.split("/");
     // now lets create a new Date instance, using year, month and day as parameters
     // month count starts with 0, so we have to convert the month number
     var date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]));
     return date;
}
var chart;

function createStockChart() {
    chart = new AmCharts.AmStockChart();
    chart.pathToImages = "Images/";
    
    // As we have minutely data, we should set minPeriod to "mm" 
    var categoryAxesSettings = new AmCharts.CategoryAxesSettings();
    categoryAxesSettings.minPeriod = "mm";
    categoryAxesSettings.gridPosition = "start";
    chart.categoryAxesSettings = categoryAxesSettings;
    categoryAxesSettings.equalSpacing=true;    
   
    // DATASETS //////////////////////////////////////////
    var dataSet = new AmCharts.DataSet();
    dataSet.color = '#3366cc';
    dataSet.fieldMappings = [{
        fromField: "value",
        toField: "value"
    }, {
        fromField: "volume",
        toField: "volume"
    }];
    
    
    
    
    dataSet.dataProvider = chartData;
    dataSet.categoryField = "date";
    
    // set data sets to the chart
    chart.dataSets = [dataSet];
    
    // PANELS ///////////////////////////////////////////                                                  
    // first stock panel
    var stockPanel1 = new AmCharts.StockPanel();
    stockPanel1.showCategoryAxis = true;
    stockPanel1.title = "Price";
    stockPanel1.percentHeight = 70;
    
    // graph of first stock panel
    var graph1 = new AmCharts.StockGraph();
    graph1.valueField = "value";
    graph1.type = 'smoothedLine';
    graph1.lineThickness = 1;
    //graph1.bullet = "round";
    graph1.bulletBorderColor = '#ffffff';
    graph1.bulletBorderAlpha = 1;
    graph1.bulletBorderThickness = 3;
     var text=graph1.balloonText;
    graph1.balloonText="Price: "+graph1.balloonText;
   
    stockPanel1.addStockGraph(graph1);
    
    // create stock legend                
    var stockLegend1 = new AmCharts.StockLegend();
    stockLegend1.valueTextRegular = "[[value]]";
    stockLegend1.periodValueText=chartData[chartData.length-1].value;
    
    stockLegend1.markerType = "none";
    stockPanel1.stockLegend = stockLegend1;
    
  
    
    // second stock panel
    var stockPanel2 = new AmCharts.StockPanel();
    stockPanel2.title = "Volume";
    stockPanel2.percentHeight = 30;
    var graph2 = new AmCharts.StockGraph();
    graph2.valueField = "volume";
    graph2.type = "line";
    graph2.cornerRadiusTop = 2;
    graph2.fillAlphas = 1;
      var text=graph2.balloonText;
    graph2.balloonText="Volume: "+graph2.balloonText;
    
    stockPanel2.addStockGraph(graph2);
    
    // create stock legend                
    var stockLegend2 = new AmCharts.StockLegend();
    stockLegend2.valueTextRegular = "[[value]]";
    stockLegend2.periodValueText=chartData[chartData.length-1].volume;
    stockLegend2.markerType = "none";
    stockPanel2.stockLegend = stockLegend2;
    
    // set panels to the chart
    chart.panels = [stockPanel1];
    
    
    // OTHER SETTINGS ////////////////////////////////////
    var scrollbarSettings = new AmCharts.ChartScrollbarSettings();
    scrollbarSettings.graph = graph1;
    scrollbarSettings.graphType="smoothedLine";
    scrollbarSettings.updateOnReleaseOnly = true;
    scrollbarSettings.usePeriod = "10mm"; // this will improve performance
    scrollbarSettings.position = "bottom";
    scrollbarSettings.enabled=false;
    chart.chartScrollbarSettings = scrollbarSettings;
    
    var cursorSettings = new AmCharts.ChartCursorSettings();
    cursorSettings.valueBalloonsEnabled = true;
     cursorSettings.cursorColor='#383838';
    cursorSettings.categoryBalloonColor='#81C1E4';
 
    chart.chartCursorSettings = cursorSettings;
    
    
     var periodSelector = new AmCharts.PeriodSelector();
    periodSelector.position = "bottom";
    periodSelector.dateFormat = "YYYY-MM-DD";
     periodSelector.periods = [{period:"DD",  count:7, label:"7D"},
                                          {period:"MM", count:1, label:"1M"},
                                          {period:"MM", count:3, label:"3M"},
                                          {period:"YYYY", count:1, label:"1Y"},
                                          {period:"YYYY", count:2, label:"2Y"},
                                          {period:"MAX",selected:true, label:"MAX"}];  
    //chart.periodSelector = periodSelector;
    
    var panelsSettings = new AmCharts.PanelsSettings();
    panelsSettings.usePrefixes = false;
    chart.panelsSettings = panelsSettings;
    
    
    chart.write('chartdiv');
      $(".amChartsPeriodSelector").children('div:first').hide();
}
//]]>  

    </script>

</body>
</html>
