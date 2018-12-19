
 google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
     ['ΠΕΡΙΦΕΡΕΙΑ', 'ΣΥΝΟΛΟ ΠΛΗΘΥΣΜΟΥ'],
    ['ΠΕΡΙΦΕΡΕΙΑ ΑΝΑΤΟΛΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ ΚΑΙ ΘΡΑΚΗΣ (Έδρα: Κομοτηνή,η)',602167],
    ['ΠΕΡΙΦΕΡΕΙΑ ΚΕΝΤΡΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ (Έδρα: Θεσσαλονίκη,η)', 1863708],
    ['ΠΕΡΙΦΕΡΕΙΑ ΔΥΤΙΚΗΣ ΜΑΚΕΔΟΝΙΑΣ (Έδρα: Κοζάνη,η)', 281097],
    ['ΠΕΡΙΦΕΡΕΙΑ ΗΠΕΙΡΟΥ (Έδρα: Ιωάννινα,τα)', 333818],
    ['ΠΕΡΙΦΕΡΕΙΑ ΘΕΣΣΑΛΙΑΣ (Έδρα: Λάρισα,η)', 725755],
    ['ΠΕΡΙΦΕΡΕΙΑ ΣΤΕΡΕΑΣ ΕΛΛΑΔΑΣ (Έδρα: Λαμία,η)', 542661],
    ['ΠΕΡΙΦΕΡΕΙΑ ΙΟΝΙΩΝ ΝΗΣΩΝ (Έδρα: Κέρκυρα,η)', 205958],
    ['ΠΕΡΙΦΕΡΕΙΑ ΔΥΤΙΚΗΣ ΕΛΛΑΔΑΣ (Έδρα: Πάτραι,αι)', 673510],
    ['ΠΕΡΙΦΕΡΕΙΑ ΠΕΛΟΠΟΝΝΗΣΟΥ (Έδρα: Τρίπολις,η)', 572825],
    ['ΠΕΡΙΦΕΡΕΙΑ ΑΤΤΙΚΗΣ (Έδρα: Αθήναι,αι)', 3791778],
    ['ΠΕΡΙΦΕΡΕΙΑ ΒΟΡΕΙΟΥ ΑΙΓΑΙΟΥ ', 197390],
    ['ΠΕΡΙΦΕΡΕΙΑ ΝΟΤΙΟΥ ΑΙΓΑΙΟΥ ', 305730],
    ['ΠΕΡΙΦΕΡΕΙΑ ΚΡΗΤΗΣ ', 616012]
      ]);

      var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart'));
      chart.draw(data, options);
    }
