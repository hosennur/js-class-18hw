


//var fruits = ["Apple","Orange", "Mango","Banana","Guava" ];

// function printoddeven(){

//     for (var i = 1; i <=100; i++) {
//         if (i % 2 == 0) {
//         document.write(i +' Even Number'+'<br>')
//         } else if (i% 2 == 1){
//         document.write(i +'Old Number'+"<br>")
//         } else{
//         document.write(i + ' Invalid Number'+'<br>')
//         } 
//     }
// }
var day= document.getElementById('day')

for (var i = 1; i <= 31; i++){
    var dayoption = document.createElement('option')
    var dayoptionText = document.createTextNode(i)

    dayoption.appendChild(dayoptionText)
    day.appendChild(dayoption)
}
var month= document.getElementById('month')

for (var i = 1; i <= 12; i++){
    var monthoption = document.createElement('option')
    var monthoptionText = document.createTextNode(i)

    monthoption.appendChild(monthoptionText)
    month.appendChild(monthoption)
}
var yeart= document.getElementById('year')

for (var i = 1950; i <= 2022; i++){
    var yearoption = document.createElement('option')
    var yearoptionText = document.createTextNode(i)

    yearoption.appendChild(yearoptionText)
    year.appendChild(yearoption)
}