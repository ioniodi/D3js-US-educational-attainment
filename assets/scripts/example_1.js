
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
      var data = google.visualization.arrayToDataTable([
        ['ΠΕΡΙΦΕΡΕΙΑ', 'ΣΥΝΟΛΟ ΠΛΗΘΥΣΜΟΥ'],
        ['ΠΕΡΙΦΕΡΕΙΑ ΑΝΑΤΟΛΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ ΚΑΙ ΘΡΑΚΗΣ', 602167],
        ['ΠΕΡΙΦΕΡΕΙΑ ΚΕΝΤΡΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ ', 1863708],
        ['ΠΕΡΙΦΕΡΕΙΑ ΔΥΤΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ', 281097],
        ['ΠΕΡΙΦΕΡΕΙΑ ΗΠΕΙΡΟΥ', 333818],
        ['ΠΕΡΙΦΕΡΕΙΑ ΘΕΣΣΑΛΙΑΣ', 725755],
        ['ΠΕΡΙΦΕΡΕΙΑ ΣΤΕΡΕΑΣ ΕΛΛΑΔΑΣ', 542661],
        ['ΠΕΡΙΦΕΡΕΙΑ ΙΟΝΙΩΝ ΝΗΣΩΝ', 205958],
        ['ΠΕΡΙΦΕΡΕΙΑ ΔΥΤΙΚΗΣ ΕΛΛΑΔΑΣ', 673510],
        ['ΠΕΡΙΦΕΡΕΙΑ ΠΕΛΟΠΟΝΝΗΣΟΥ', 572825],
        ['ΠΕΡΙΦΕΡΕΙΑ ΑΤΤΙΚΗΣ', 3791778],
        ['ΠΕΡΙΦΕΡΕΙΑ ΒΟΡΕΙΟΥ ΑΙΓΑΙΟΥ', 197390],
        ['ΠΕΡΙΦΕΡΕΙΑ ΝΟΤΙΟΥ ΑΙΓΑΙΟΥ', 305730],
        ['ΠΕΡΙΦΕΡΕΙΑ ΚΡΗΤΗΣ', 616012]


      ]);

      var options = {
     
        barchartArea: {width: '50%'},
        hAxis: {
          title: 'Μόνιμος πληθυσμός περιφερειών Ελλάδος 2011',
          minValue: 0,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
          }
        },
        vAxis: {
          title: 'Περιφέρειες',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
          titleTextStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          }
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('barchart_div'));
      chart.draw(data, options);
    }
