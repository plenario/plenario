//read all the documentation on http://www.chartjs.org/
//my chart about "PEC do teto dos gastos públicos - 2º turno" with chartjs code


//my chart about "PEC do teto dos gastos públicos - 2º turno" with chartjs code

var pecTeto2Chart;
var data = [
  {
    value: 53,
    color: "green"
  }, {
    value: 16,
    color: "red"
  }, {
    value: 9,
    color: "orange"
  }, {
    value: 3,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("pecTeto2Chart");
if(ctx != null){
  pecTeto2Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}


//my chart about "PEC do teto dos gastos públicos - 1º turno" with chartjs code

var pecTeto1Chart;
var data = [
  {
    value: 61,
    color: "green"
  }, {
    value: 14,
    color: "red"
  }, {
    value: 4,
    color: "orange"
  }, {
    value: 2,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("pecTeto1Chart");
if(ctx != null){
  pecTeto1Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}


//my chart about "inelegibilidade de Dilma Rousseff" with chartjs code

var dilma2Chart;
var data = [
  {
    value: 42,
    color: "green"
  }, {
    value: 36,
    color: "red"
  }, {
    value: 3,
    color: "purple"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};


//Get the context of the canvas element we want to select
var ctx = document.getElementById("dilma2Chart");
if(ctx != null){
  dilma2Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}



//my chart about "cassação de Dilma Rousseff" with chartjs code

var dilma1Chart;
var data = [
  {
    value: 61,
    color: "green"
  }, {
    value: 20,
    color: "red"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("dilma1Chart");
if(ctx != null){
  dilma1Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}


//my fourth chart with chartjs code

var reformaEnsinoMedioChart;
var data = [
  {
    value: 43,
    color: "green"
  }, {
    value: 13,
    color: "red"
  }, {
    value: 16,
    color: "orange"
  }, {
    value: 9,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("reformaEnsinoMedioChart");
if(ctx != null){
  reformaEnsinoMedioChart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}




//my chart about "PEC da vaquejada - 1º turno" with chartjs code

var vaquejada1Chart;
var data = [
  {
    value: 55,
    color: "green"
  }, {
    value: 8,
    color: "red"
  }, {
    value: 4,
    color: "orange"
  }, {
    value: 3,
    color: "purple"
  }, {
    value: 11,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};


//Get the context of the canvas element we want to select
var ctx = document.getElementById("vaquejada1Chart");
if(ctx != null){
  vaquejada1Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}


//my chart about "PEC da vaquejada - 2º turno" with chartjs code

var vaquejada2Chart;
var data = [
  {
    value: 52,
    color: "green"
  }, {
    value: 9,
    color: "red"
  }, {
    value: 7,
    color: "orange"
  }, {
    value: 2,
    color: "purple"
  }, {
    value: 11,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("vaquejada2Chart");
if(ctx != null){
  vaquejada2Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}
  
//my chart about "PEC do foro privilegiado - 1º turno" with chartjs code

var foroPrivilegiado1Chart;
var data = [
  {
    value: 75,
    color: "green"
  }, {
    value: 2,
    color: "orange"
  }, {
    value: 4,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};


//Get the context of the canvas element we want to select
var ctx = document.getElementById("foroPrivilegiado1Chart");
if(ctx != null){
  foroPrivilegiado1Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}



//my chart about "projeto sobre abuso de autoridade" with chartjs code

var abusoDeAutoridadeChart;
var data = [
  {
    value: 54,
    color: "green"
  }, {
    value: 19,
    color: "red"
  }, {
    value: 5,
    color: "orange"
  }, {
    value: 3,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("abusoDeAutoridadeChart");
if(ctx != null){
  abusoDeAutoridadeChart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}


//my chart about "projeto sobre socorro aos estados" with chartjs code

var socorroAosEstadosChart;
var data = [
  {
    value: 56,
    color: "green"
  }, {
    value: 9,
    color: "red"
  }, {
    value: 9,
    color: "orange"
  }, {
    value: 7,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("socorroAosEstadosChart");
if(ctx != null){
  socorroAosEstadosChart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}





//my chart about "PEC do foro privilegiado - 2º turno" with chartjs code

var foroPrivilegiado2Chart;
var data = [
  {
    value: 69,
    color: "green"
  }, {
    value: 3,
    color: "orange"
  }, {
    value: 1,
    color: "purple"
  }, {
    value: 8,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("foroPrivilegiado2Chart");
if(ctx != null){
  foroPrivilegiado2Chart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}




//my chart about "Reforma trabalhista" with chartjs code

var reformaTrabalhistaChart;
var data = [
  {
    value: 50,
    color: "green"
  }, {
    value: 26,
    color: "red"
  }, {
    value: 1,
    color: "orange"
  }, {
    value: 1,
    color: "purple"
  }, {
    value: 3,
    color: "gray"
  }
];

var options = {
  animation: true,
  animationEasing: 'easeInOutQuart',
  animationSteps: 80
};


//Get the context of the canvas element we want to select
var ctx = document.getElementById("reformaTrabalhistaChart");
if(ctx != null){
  reformaTrabalhistaChart = new Chart(ctx.getContext("2d")).Doughnut(data, options);
}