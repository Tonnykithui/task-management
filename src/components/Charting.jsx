import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
Chart.register(...registerables);
Chart.register(ArcElement);

const Charting = () => {
    const data = {
        labels: [
          'Completed',
          'Inprogress',
          'Open'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)'
          ]
        }]
      };
  return (
    <div>
        <Pie
        data={data}
        height={100}
        width={100}
        options={{ maintainAspectRatio: false, radius:65, indexAxis:"50"|"50" }}
        />
    </div>
  )
}

export default Charting