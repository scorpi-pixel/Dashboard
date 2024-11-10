// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data1 = new google.visualization.DataTable();
data1.addColumn('string', 'Topping');
data1.addColumn('number', 'Slices');
data1.addRows([
    ['In Hell We Live, Lament', 14000000],
    ['Cast me a Spell', 2000000],
    ['Gone Angels', 4300000],
    ['Camelia', 7300000],
    ['GIVE ME RICE', 4800000]
]);

// Set chart options
var options1 = {'title':'Most Popular Songs',
                'width':850,
                'height':500,
        }; 

// Instantiate and draw our chart, passing in some options.
var chart1 = new google.visualization.PieChart(document.getElementById('Piechart'));
chart1.draw(data1, options1);

  var data2 = google.visualization.arrayToDataTable([
    ["Video", "Time", { role: "style" } ],
    ["Cast me a Spell", 300, "dark blue"],
    ["In Hell We Live, Lament", 280, "dark blue"],
    ["Gone Angels", 250, "dark blue"],
    ["Through Patches of Violet", 200, "dark blue"],
    ["A Turtles Heart", 180, "dark blue"]
  ]);

  var view2 = new google.visualization.DataView(data2);
  view2.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options2 = {
    title: "Watch Time (Hours)",
    width: 850,
    height: 500,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
var chart2 = new google.visualization.BarChart(document.getElementById("Barchart"));
chart2.draw(view2, options2);


var data3 = google.visualization.arrayToDataTable([
    ['Month', 'Time'],
    ['June',  2.950],
    ['July',  2.93],
    ['August',  3.012],
    ['September',  2.92],
    ['October',  2.89],
    ['November',  3.0]
]);

var options3 = {
    title: 'Page load Time (seconds)',
    curveType: 'function',
    width: 850,
    height: 500,
    legend: { position: 'bottom' }
};

var chart3 = new google.visualization.LineChart(document.getElementById('Linechart'));
chart3.draw(data3, options3);


var data4 = new google.visualization.DataTable();
data4.addColumn('string', 'Topping');
data4.addColumn('number', 'Slices');
data4.addRows([
    ['Chrome', 65.18],
    ['Safari', 18.55],
    ['Edge', 5.26],
    ['Fireforx', 2.74],
    ['Opera', 2.15]
]);

var options4 = {'title':'Popular Browsers',
                'width':850,
                'height':500,
        }; 

var chart4 = new google.visualization.PieChart(document.getElementById('Piechart2'));
chart4.draw(data4, options4);
}
