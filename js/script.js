var ctx = document.getElementById('pageViewsChart').getContext('2d');
  var pageViewsChart = new Chart(ctx, {
      type: 'bar', // or 'line'
      data: {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Example labels
          datasets: [{
              label: 'Page Views',
              data: [12, 19, 3, 5, 2], // Example data
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });