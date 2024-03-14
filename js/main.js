$(function (){
    // const myChart = new Chart(document.getElementById('myChart'), {
    //     type: 'bar',
    //     data: {
    //         labels: ['العاشرة', 'التاسعة', 'الثامنة', 'السابعة', 'السادسة', 'الخامسة', 'الرابعة', 'الثالثة', 'الثانية', 'الاولى'],
    
    //         datasets: [{
    //             label: '-------',
    //             data: [12, 19, 3, 5, 22, 3, 7, 6, 15, 9, 10],
    //             backgroundColor: [
    //                 '#385a26'
    //                 ,
    //                 '#385a26',
    //                 '#385a26',
    //                 '#385a26',
    //                 '#385a26',
    //                 '#385a26',
    //                 '#385a26',
    
    //                 '#385a26',
    //                 '#385a26',
    //                 '#385a26',
    
    //                 // المصروفات
    //             ],
    
    //             borderColor: [
    //                 'transparent'
    
    
    //             ],
    //             borderWidth: 7,
    //             //  borderRadius: Number.MAX_VALUE,
    //         },
    
    
    //         ]
    //     },
    
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'Predicted world population (millions) in 2050'
    //         },
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     // This more specific font property overrides the global property
    //                     font: {
    //                         size: 14,
    //                         family: 'cairo',
    
    //                     }
    //                 }
    //             }
    //         },
    //         scales: {
    //             x: {
    //                 ticks: {
    //                     font: {
    //                         size: 13,
    //                         family: 'cairo',
    //                     }
    //                 }
    //             },
    //             y: {
    //                 ticks: {
    //                     font: {
    //                         size: 13,
    //                         family: 'cairo'
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // });
    // /*================================*/
    // const myChart0 = new Chart(document.getElementById('chart2'), {
    //     scaleLineColor: "rgba(0,0,0,0)",
    
    //     type: 'line',
    //     barShowStroke: false,
    //     data: {
    //         labels: ['نوفمبر', 'ديسمبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يناير'],
    
    //         datasets: [{
    //             label: 'كتب الشكر',
    //             data: [3, 5, 3, 5, 2, 5],
    //             backgroundColor: [
    //                 //'#1e7cdf',
    //                 '#156737 ',
    //             ],
    
    //             borderColor: [
    //                 '#156737 '
    //             ],
    
    //             borderWidth: 2,
    //             //  borderRadius: Number.MAX_VALUE,
    
    //         },
    
    
    //         ],
    
    //     },
    
    //     options: {
    //         title: {
    //             display: false,
    //             text: 'Predicted world population (millions) in 2050'
    //         },
    //         plugins: {
    //             title: {
    //                 display: false,
    //                 text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
    
    //             },
    //             legend: {
    //                 display: false
    //             },
    //         },
    //         chartAreaBorder: {
    //             borderColor: '#000',
    //             borderWidth: 0,
    //             borderDash: [0, 0],
    //             borderDashOffset: 0,
    //         },
    
    //         scales: {
    //             x: {
    //                 display: false,
    
    //                 grid: {
    //                     drawBorder: false,
    //                     display: false
    //                 },
    //                 ticks: {
    //                     font: {
    //                         size: 15,
    //                         family: 'cairo',
    
    //                     }
    //                 }
    
    //             },
    //             y: {
    //                 display: false,
    //                 grid: {
    //                     drawBorder: false,
    //                     display: false
    //                 },
    //                 ticks: {
    //                     font: {
    //                         size: 0,
    //                         family: 'cairo'
    //                     }
    //                 },
    
    //             },
    
    //         }
    //     }
    // });
    // /*================================*/
    // const myChart01 = new Chart(document.getElementById("chart3"), {
    //     scaleLineColor: "rgba(0,0,0,0)",
    
    //     type: 'line',
    //     barShowStroke: false,
    //     data: {
    //         labels: ['نوفمبر', 'ديسمبر', 'سبتمبر', 'أغسطس', 'يوليو', 'iii'],
    
    //         datasets: [{
    //             label: 'المبيعات',
    //             data: [3, 4, 3, 5, 2, 5],
    //             backgroundColor: [
    //                 '#fbcd17'
    
    
    //             ],
    
    //             borderColor: [
    //                 '#306900'
    
    //             ],
    
    //             borderWidth: 2,
    //             //  borderRadius: Number.MAX_VALUE,
    
    //         },
    
    
    //         ],
    
    //     },
    
    //     options: {
    //         title: {
    //             display: false,
    //             text: 'Predicted world population (millions) in 2050'
    //         },
    //         plugins: {
    //             title: {
    //                 display: false,
    //                 text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
    
    //             },
    //             legend: {
    //                 display: false
    //             },
    //         },
    //         chartAreaBorder: {
    //             borderColor: '#000',
    //             borderWidth: 0,
    //             borderDash: [0, 0],
    //             borderDashOffset: 0,
    //         },
    
    //         scales: {
    //             x: {
    //                 display: false,
    //                 grid: {
    //                     drawBorder: false,
    //                     display: false
    //                 },
    //                 ticks: {
    //                     font: {
    //                         size: 0,
    //                         family: 'cairo'
    //                     }
    //                 }
    
    //             },
    //             y: {
    //                 display: false,
    //                 grid: {
    //                     drawBorder: false,
    //                     display: false
    //                 },
    //                 ticks: {
    //                     font: {
    //                         size: 0,
    //                         family: 'cairo'
    //                     }
    //                 },
    
    //             },
    
    //         }
    //     }
    // });
    // /*================================*/
    // const doughnut =  new Chart(document.getElementById("doughnut-chart"), {
    //     type: 'doughnut',
    //     data: {
    //         labels: [" x", " Y",],
    //         datasets: [
    //             {
    //                 label: "Population (millions)",
    //                 backgroundColor: ["#306900", "#fbcd17"],
    
    //                 data: [80, 15]
    //             }
    //         ]
    //     },
    //     options: {
    //         title: {
    //             display: false,
    //             text: 'Predicted world population (millions) in 2050'
    //         },
    
    //         plugins: {
    //             legend: {
    //                 display: false,
    
    //                 labels: {
    //                     display: false,
    //                     // This more specific font property overrides the global property
    //                     font: {
    //                         size: 0,
    //                         family: 'cairo'
    //                     }
    //                 }
    //             }
    //         },
    //     }
    
    
    // }); 
    // /*================================*/
    // const pie = new Chart(document.getElementById("pie-chart"), {
    //     type: 'pie',
    //     data: {
    //         labels: ["3", "3", " 2", '1'],
    //         datasets: [{
    //             label: "Population (millions)",
    //             backgroundColor: ["#28a745", "#dc3545", "#1f6096", "#ffc107"],
    //             data: [130, 60, 220],
    
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'Predicted world population (millions) in 2050',
    
    //         },
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     // This more specific font property overrides the global property
    //                     font: {
    //                         size: 13,
    //                         family: 'cairo'
    //                     }
    //                 }
    //             }
    //         },
    //         tooltip: {
    //             labels: {
    //                 // This more specific font property overrides the global property
    //                 font: {
    //                     size: 13,
    //                     family: 'cairo'
    //                 }
    //             }
    //         }
    //     }
    // });
})


