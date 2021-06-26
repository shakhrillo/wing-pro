import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

function dynamicallyLoadScript(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}

dynamicallyLoadScript('https://kit.fontawesome.com/8a5893e9ca.js');
dynamicallyLoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js');
dynamicallyLoadScript('https://cdn.jsdelivr.net/npm/chart.js');
dynamicallyLoadScript('https://cdn.jsdelivr.net/npm/fullcalendar@5.8.0/main.min.js');


// setTimeout(() => {
//   const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//   ];
//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };
  
//   const config = {
//     type: 'line',
//     data,
//     options: {
//       labels,
//       maintainAspectRatio: false,
//       data
//     }
//   };
  
//   var charts = document.getElementsByClassName('line-chart');
//   for (let index = 0; index < charts.length; index++) {
//     const element = charts[index];
//     var myChart = new Chart(
//       element,
//       config
//     );
//   }


//   var menuItems = document.getElementsByClassName('wng-menu-item');
//   for (let index = 0; index < menuItems.length; index++) {
//     const element = menuItems[index];
//     element.addEventListener('click', function(e) {
//       e.preventDefault();
//       if(element.nextElementSibling.classList.contains('d-block')) {
//         element.nextElementSibling.classList.remove('d-block');
//       } else {
//         element.nextElementSibling.classList.add('d-block');
//       }
//     });
//   }

//   var calendarEl = document.getElementById('calendar');
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth'
//   });
//   calendar.render();
// }, 1000);

// console.log('webpack starterkit');
