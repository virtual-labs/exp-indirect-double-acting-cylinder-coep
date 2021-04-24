IdenHint = function(selectedOp) {

	if (selectedOp == "1") {
		$("#Dir_dac_iden").css("display", "block");
		$("#Dir_DAC").css("display", "none");
	}else if(selectedOp == "2"){
		$("#Indir_dac_iden").css("display", "block");
		$("#Indir_DAC").css("display", "none");
	}
}

ConnHint = function(selectedOp){
	if (selectedOp == "1") {
		$("#Dir_DAC").css("display", "block");
		$("#Dir_dac_iden").css("display", "none");
	}else if(selectedOp == "2"){
		$("#Indir_DAC").css("display", "block");
		$("#Indir_dac_iden").css("display", "none");
	}
}