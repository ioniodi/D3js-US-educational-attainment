
   google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
     
    ['ΠΕΡΙΦΕΡΕΙΑ ΑΝΑΤΟΛΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ ΚΑΙ ΘΡΑΚΗΣ',602167],
    ['ΠΕΡΙΦΕΡΕΙΑ ΚΕΝΤΡΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ', 1863708],
    ['ΠΕΡΙΦΕΡΕΙΑ ΔΥΤΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ ', 281097],
    ['ΠΕΡΙΦΕΡΕΙΑ ΗΠΕΙΡΟΥ', 333818],
    ['ΠΕΡΙΦΕΡΕΙΑ ΘΕΣΣΑΛΙΑΣ', 725755],
    ['ΠΕΡΙΦΕΡΕΙΑ ΣΤΕΡΕΑΣ ΕΛΛΑΔΑΣ)', 542661],
    ['ΠΕΡΙΦΕΡΕΙΑ ΙΟΝΙΩΝ ΝΗΣΩΝ ', 205958],
    ['ΠΕΡΙΦΕΡΕΙΑ ΔΥΤΙΚΗΣ ΕΛΛΑΔΑΣ', 673510],
    ['ΠΕΡΙΦΕΡΕΙΑ ΠΕΛΟΠΟΝΝΗΣΟΥ ', 572825],
    ['ΠΕΡΙΦΕΡΕΙΑ ΑΤΤΙΚΗΣ', 3791778],
    ['ΠΕΡΙΦΕΡΕΙΑ ΒΟΡΕΙΟΥ ΑΙΓΑΙΟΥ ', 197390],
    ['ΠΕΡΙΦΕΡΕΙΑ ΝΟΤΙΟΥ ΑΙΓΑΙΟΥ ', 305730],
    ['ΠΕΡΙΦΕΡΕΙΑ ΚΡΗΤΗΣ ', 616012]
      ]);

      var options = {
        title: 'Απογραφή πληθυσμού περιφερειών Ελλαδας 2011',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
