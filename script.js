buildChart('chart_weather', '#42e5a2');
buildChart('chart_electricity', '#a343e5');

function buildChart(id, color) {
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "kWh",
                fillColor: color,
                strokeColor: "rgba(220,220,220,0)",
                pointColor: "rgba(220,220,220,0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };


    var ctx = document.getElementById(id).getContext("2d");
    var options = {
        scaleShowGridLines: false,
        showScale: false,
        datasetStroke: false,
        pointDot: false,
    };

    $('#' + id).css('margin-left', -5);
    $('#' + id).css('margin-top', 5);
    $('#' + id).css('width', $('#charts').width() + 10);
    $('#' + id).css('height', 75);

    new Chart(ctx).Line(data, options);
}
