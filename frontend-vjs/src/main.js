import Chart from 'chart.js/auto'
import { getEss } from './api'

// point of entry
(async function() {
    let data = await getEss(); // get all ESS data
    makeDataVisualizable(data); // make data visualiable
    drawBubbleChart(data); // draw the bubble chart with the visualizable data
})();

// As the input data is too tiny or too large, some multiplication and division
// help visualizing the data as long as the ratio is same
async function makeDataVisualizable(data) {
    for (let i = 0; i < data.length; i++) {
        data[i][1] = data[i][1] * 100;
        data[i][2] = data[i][2] * 100;
        data[i][3] = data[i][3] / 5000000;
    } // ignores index 0, contains provider name
}

// drawing the bubble chart with the modified data
async function drawBubbleChart(data) {
    new Chart(
        document.getElementById('bubble'), // get the element with id
        {
            type: 'bubble', // type of chart in ChartJs
            data: {
                labels: data.map(x => x[0]), // get company/provider name from data from the API
                datasets: [
                    {
                        label:'ESS', 
                        backgroundColor: 'black',
                        borderColor: 'white',
                        data: data.map(row => ({
                            x: row[2],
                            y: row[1],
                            r: row[3]
                        })) // assign ebit margin, share of wallet, and spend data to y axis, x axis, and radius
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                    position: 'top',
                  },
                  title: { // chart title
                    display: true,
                    text: 'Ignite Matrix'
                  },
                  subtitle: { // chart subtitle
                    display: true,
                    text: 'Transaction date: From ' + ' yyyy-MM-dd ' + ' to ' + ' yyyy-MM-dd ', // placeholder date due to no date in the data
                    padding:{
                        bottom: 10
                    }
                  }
                },
                scales: {
                  x: {
                    title:{
                        display: true,
                        text:  'Share of wallet'
                    },
                    type: 'linear',
                    min: -5,
                    max: 110,
                    ticks: {
                        callback: function(value, index, values) {
                            return value + '%';
                        }
                    }
                  },
                  y: {
                    title:{
                        display: true,
                        text: 'EBIT margin (%)'
                    },
                    min: -10,
                    max: 65,
                    ticks: {
                      callback: function(value, index, values) {
                        return value + '%';
                      }
                    }
                  }
                }
            }
        }
    );
}

