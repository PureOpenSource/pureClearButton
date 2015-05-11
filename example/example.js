$(document).ready(function(){
	$.pureClearButton.setDefault({
		//icon: 'glyphicon-plus'
	});
	
	$("[data-event]").on("click", function(e){
		$("#test").pureClearButton(this.id);
	});
	
	/* $("#show").on("click", function(){
		$("#test").pureClearButton("show");
	});
	$("#hide").on("click", function(){
		$("#test").pureClearButton("hide");
	}); */
});