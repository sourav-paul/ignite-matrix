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
        data[i][0] = data[i][0] * 100;
        data[i][1] = data[i][1] * 100;
        data[i][2] = data[i][2] / 5000000;
    }
}

// drawing the bubble chart with the modified data
async function drawBubbleChart(data) {
    new Chart(
        document.getElementById('bubble'),
        {
            type: 'bubble',
            data: {
                labels: data.map(x => 'Provider Name'),
                datasets: [
                    {
                        label:'Providers',
                        backgroundColor: 'black',
                        borderColor: 'white',
                        data: data.map(row => ({
                            x: row[1],
                            y: row[0],
                            r: row[2]
                        }))
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
                  title: {
                    display: true,
                    text: 'Ignite Matrix'
                  },
                  subtitle: {
                    display: true,
                    text: 'Transaction date: From ' + ' x ' + ' to ' + ' y ',
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

