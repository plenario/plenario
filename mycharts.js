//read all the documentation on http://www.chartjs.org/
//my first chart with chartjs code
var myFirstChart;
var data = [
	{
    value: 61,
    color: "green"
  }, {
    value: 14,
    color: "red"
  }, {
    value: 0,
    color: "orange"
  }, {
    value: 5,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80,
  legend: {
    display: true
  }
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("myFirstChart")
									.getContext("2d");

/*******************************************************/
myFirstChart = new Chart(ctx).Doughnut(data, options);







//my second chart with chartjs code

var mySecondChart;
var data = [
  {
    value: 53,
    color: "green"
  }, {
    value: 16,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 1,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("mySecondChart")
                  .getContext("2d");

/*******************************************************/
mySecondChart = new Chart(ctx).Doughnut(data, options);





//my third chart with chartjs code

var myThirdChart;
var data = [
  {
    value: 75,
    color: "green"
  }, {
    value: 0,
    color: "red"
  }, {
    value: 0,
    color: "orange"
  }, {
    value: 6,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("myThirdChart")
                  .getContext("2d");

/*******************************************************/
myThirdChart = new Chart(ctx).Doughnut(data, options);




//my fourth chart with chartjs code

var myFourthChart;
var data = [
  {
    value: 43,
    color: "green"
  }, {
    value: 13,
    color: "red"
  }, {
    value: 0,
    color: "orange"
  }, {
    value: 15,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("myFourthChart")
                  .getContext("2d");

/*******************************************************/
myFourthChart = new Chart(ctx).Doughnut(data, options);




//my fifth chart with chartjs code

var myFifthChart;
var data = [
  {
    value: 55,
    color: "green"
  }, {
    value: 13,
    color: "red"
  }, {
    value: 0,
    color: "orange"
  }, {
    value: 13,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("myFifthChart")
                  .getContext("2d");

// console.log(myFifthChart)
/*******************************************************/
myFifthChart = new Chart(ctx).Doughnut(data, options);
