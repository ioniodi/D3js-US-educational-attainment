function show_chart_1(){
	$("#chart1").removeClass("hide");
	$("#chart1").addClass("show");

	$("#chart2").removeClass("show");
	$("#chart2").addClass("hide");
	$("#chart3").removeClass("show");
	$("#chart3").addClass("hide");

}

function show_chart_2(){
	$("#chart2").removeClass("hide");
	$("#chart2").addClass("show");

	$("#chart1").removeClass("show");
	$("#chart1").addClass("hide");
	$("#chart3").removeClass("show");
	$("#chart3").addClass("hide");
	render_graph();
}

function show_chart_3(){
	$("#chart3").removeClass("hide");
	$("#chart3").addClass("show");

	$("#chart2").removeClass("show");
	$("#chart2").addClass("hide");
	$("#chart1").removeClass("show");
	$("#chart1").addClass("hide");
}