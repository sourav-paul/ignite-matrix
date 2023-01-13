import Chart from 'chart.js/auto'
import { GetEss } from './api'


(async function() {
    let data = await GetEss();

    for (let i = 0; i < data.length; i++) {
        data[i][0] = data[i][0] * 100;
        data[i][1] = data[i][1] * 100;
        data[i][2] = data[i][2] / 5000000;
    } // make data visualiable

    new Chart(
        document.getElementById('bubble'),
        {
            type: 'bubble',
            data: {
                labels: data.map(x => x),
                datasets: [
                    {
                        label: 'Ignite Matrix',
                        data: data.map(row => ({
                        x: row[1],
                        y: row[0],
                        r: row[2]
                        }))
                    }
                ]
            }
        }
    );
})();
