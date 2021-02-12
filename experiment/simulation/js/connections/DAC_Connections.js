//Identify Symbols for direct single acting cylinder
Identify_Direct_DAC_Symbol = function(selectedOp, component, actuator,
		jsonarray) {
	/*
	 * var reader = new draw2d.io.json.Reader(); reader.unmarshal(canvas1,
	 * json);
	 */

	// app = new example.Application(hlselectorType, hlselectorInput,
	// jsonarray);

	dir_doubleActingCylinderRight = 0;

	dir_doubleActingCylinderWrong = 0;

	var temp = JSON.parse(jsonarray);

//	console.log(temp);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.SetFigure") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.SetFigure") {

				if ((temp[i].id == "pushBtn") || (temp[i].id == "springSym")
						|| (temp[i].id == "DCValve5_2") || (temp[i].id == "doubleActCyl") || (temp[i].id == "servUnit") || (temp[i].id == "exaust")) {

					temp1++;

				} else {
					dir_doubleActingCylinderWrong = 1;
					CheckWrongIdentification();
					break;
				}
			}
		}

		if(temp1 < 8 && dir_doubleActingCylinderWrong == 0){alertify.alert("Select all required component"); if(multiSelectFlagCnt >= 7){app.toolbar.hintButton.show();}}
		
		if (temp1 == 8) {
//			console.log(temp1);
			dir_doubleActingCylinderRight = 1;
		} else {
			dir_doubleActingCylinderWrong = 1;
		}

		CheckRightIdentification();

	} else {

		alertify.alert("Please select right symbol to identify");
	}
}

CheckRightIdentification = function() {
	multiSelectFlagCnt++;
	if (dir_doubleActingCylinderRight == 1
			&& dir_doubleActingCylinderWrong == 0) {

		alertify
				.alert("Identification is successful. <br/> Please connect your port connection");
		app.toolbar.checkButton.show();
//		app.toolbar.characterisation_Button.show();
		// app.toolbar.characterisation_Button.hide();
		rightIden = 1;

	} else {
		
		if (dir_doubleActingCylinderWrong == 0) {

			if (IdenFlagCnt == 3) {
//				app.toolbar.hintButton.show();
				alertify.alert("Wrong identification");
				rightIden = 0;
			} else {

				alertify.alert("Wrong identification");
				IdenFlagCnt++
				rightIden = 0;
			}
		}
	}
}

CheckWrongIdentification = function() {

	if (IdenFlagCnt == 3) {
		app.toolbar.hintButton.show();

		alertify.alert("Wrong identification");
		rightIden = 0;
	} else {
		if (dir_doubleActingCylinderWrong == 1) {

			alertify.alert("Wrong identification");
			IdenFlagCnt++;
			rightIden = 0;
		}
	}
}

//Checking Port Connections direct single acting cylinder

direct_DAC_Connections = function(selectedOp, component, actuator,
		jsonarray) {

	actToValveFlag = 0, springToValveFlag = 0, valveToCylinderFlag1 = 0, valveToCylinderFlag2 = 0, frlToValveFlag = 0, 
	exaustToValveFlag1 = 0, exaustToValveFlag2 = 0, wrongConnection = 0;

	var temp = JSON.parse(jsonarray);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.Connection") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.Connection") {

				if ((temp[i].source.port == "pushBtnPortName" && temp[i].target.port == "DCValve5_2Port1Name")
						|| (temp[i].source.port == "DCValve5_2Port1Name" && temp[i].target.port == "pushBtnPortName")) {
					actToValveFlag = 1;
				} else if ((temp[i].source.port == "springSymPort1Name" && temp[i].target.port == "DCValve5_2Port6Name")
						|| (temp[i].source.port == "DCValve5_2Port6Name" && temp[i].target.port == "springSymPort1Name")) {
					springToValveFlag = 1;
				} else if ((temp[i].source.port == "dacPort1Name" && temp[i].target.port == "DCValve5_2Port4Name")
						|| (temp[i].source.port == "DCValve5_2Port4Name" && temp[i].target.port == "dacPort1Name")) {
					valveToCylinderFlag1 = 1;
				} else if ((temp[i].source.port == "dacPort2Name" && temp[i].target.port == "DCValve5_2Port5Name")
						|| (temp[i].source.port == "DCValve5_2Port5Name" && temp[i].target.port == "dacPort2Name")) {
					valveToCylinderFlag2 = 1;
				}else if ((temp[i].source.port == "servUnitPortName" && temp[i].target.port == "DCValve5_2Port8Name")
						|| (temp[i].source.port == "DCValve5_2Port8Name" && temp[i].target.port == "servUnitPortName")) {
					frlToValveFlag = 1;
				}else if ((temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCValve5_2Port7Name")
						|| (temp[i].source.port == "DCValve5_2Port7Name" && temp[i].target.port == "exaustPortName")) {
					exaustToValveFlag1 = 1;
				}else if ((temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCValve5_2Port9Name")
						|| (temp[i].source.port == "DCValve5_2Port9Name" && temp[i].target.port == "exaustPortName")) {
					exaustToValveFlag2 = 1;
				}else {
					wrongConnection = 1;
					CheckWrongConnection();
					break;
				}
			}
		}
		checkRightConnection();
	} else {
		alertify.alert("Do Some Connection");
	}
}

checkRightConnection = function() {
//	console.log(actToValveFlag + " " + springToValveFlag + " " + valveToCylinderFlag1 + " " + valveToCylinderFlag2 
//			+" " + frlToValveFlag + " " + exaustToValveFlag1 + " " + exaustToValveFlag2 + " " + wrongConnection);
	
	if (actToValveFlag == 1 && springToValveFlag == 1 && frlToValveFlag == 1 && exaustToValveFlag1 == 1 && exaustToValveFlag2 == 1
			&& valveToCylinderFlag1 == 1 && valveToCylinderFlag2 == 1 && wrongConnection == 0) {

		alertify.alert("Correct Connection. Please click next level");
		app.toolbar.characterisation_Button.show();
		//	app.toolbar.characterisation_Button.hide();
		rightConn = 1;

	} else {
		if (wrongConnection == 0) {

			if (ConnFlagCnt == 3) {
				app.toolbar.hintButton1.show();
				alertify.alert("Wrong Connection");
				rightConn = 0;
			} else {

				alertify.alert("Wrong Connection");
				ConnFlagCnt++
				rightConn = 0;
			}
		}
	}
}	

CheckWrongConnection = function() {

	if (ConnFlagCnt == 3) {
		app.toolbar.hintButton1.show();

		alertify.alert("Wrong Connection");
		rightConn = 0;

	} else {

		if (wrongConnection == 1) {
			alertify.alert("Wrong Connection");
			ConnFlagCnt++;
			rightConn = 0;
		}
	}
}


goForAnimation_Direct_DAC = function(){
	
	renderForAnimationDirSACHtm = '';
	
	renderForAnimationDirSACHtm = '<div id="diagram" class="col-md-7 col-sm-12">'
								+ '</div>'
	
	$("#mainDiv").html(renderForAnimationDirSACHtm);
	
	var obj = {};
	//var paper = new Raphael(document.getElementById('diagram'), '100%', 620);
	
	var w = 900;
	var h = 500;
	
	var width = $(window).width();
	
	  if ($(window).width() < 500) {
		    width = $(this).width();
		    paper = new Raphael(document.getElementById('canvas'), '100%', 500);
		paper.setViewBox(0,0,w,h,true);
		paper.setSize('100%', 500);
	  }else
	  {
	      paper = new Raphael(document.getElementById('canvas'), '100%', 900);
		paper.setViewBox(0,0,w,h,true);
		paper.setSize('100%', 900);
	  }
	
	
	x = 150;
	y = -100;
	time = 1000;
	status = 0;
	
	drawValve = function(){
//		Valve
		valve = paper.rect((x+70),(y+287), 120, 50);
		
		a = paper.path('M ' + (x+130) + ' ' + (y+337) + ' l 0 -50');
		
		b = paper.path('M ' + (x+85) + ' ' + (y+337) + ' l 0 -7 l -5 0 l 10 0');
//		Left UP arrow
		c = paper.path('M ' + (x+100) + ' ' + (y+337) + ' l -15 -49 l -1 7 l 1 -7 l 7 5');
//		Left down arrow
		d = paper.path('M ' + (x+115) + ' ' + (y+287) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8');
//		Right down arrow
		e = paper.path('M ' + (x+145) + ' ' + (y+287) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8');
//		Right UP arrow
		f = paper.path('M ' + (x+160) + ' ' + (y+337) + ' l 15 -49 l 1 7 l -1 -7 l -6 4');
		g = paper.path('M ' + (x+175) + ' ' + (y+337) + ' l 0 -7 l -5 0 l 10 0');
		
//		cylinder piston
		cylPiston = paper.path('M ' + (x+150) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0').attr({"fill" : "#aaa"});
	}
	
	cylinder = function(){
//		single acting cylinder
		cylinder = paper.rect((x+125), (y+80), 140, 60);
	}
	
	springs = function(){
//		Spring
		valveSpring = paper.path('M ' + (x+190) + ' ' + (y+313) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40');
	}
	
	connection = function(){
//		valve and cylinder connection
		conn = paper.path('M ' + (x+145) + ' ' + (y+140) + 'l 0 147');
		conn = paper.path('M ' + (x+245) + ' ' + (y+140) + 'l 0 100 l -70 0 l 0 47');
	}
	
	pushButton = function(){
//		push button
		pushBtn = paper.path('M ' + (x+50) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0')
		.attr({"fill" : "#ccc"});
		paper.text((x-25), (y+310), "Press Actuator").attr({fill: '#000', 'font-size':15});
	
		return pushBtn;
	}
	
	airSource = function(){
		paper.rect((x+35), (y+410), 60, 30).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+425), 7).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+425), 1).attr({
			"stroke-width" : 2
		});
		
//		circle with arrow
		paper.circle((x+70), (y+425), 7).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+17) + " " + (y+425) + " l 18 0 M " + (x+95) + " " + (y+425) + " l 65 0 l 0 -88 M " + (x+85) + " " + (y+410) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		paper.path("M "+ (x+45) + " " + (y+410) + " l 0 30").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		paper.path("M " + (x+66) + " " + (y+430) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
			"stroke-width" : 1
		});
	}
	
	exaust1 = function(){
		exaust1 = paper.path('M ' + (x+145) + ' ' + (y+337) + 'l 0 25 l -12 0 l 12 17 l 12 -17 l -12 0');			
	}
	
	exaust2 = function(){
		exaust2 = paper.path('M ' + (x+175) + ' ' + (y+337) + 'l 0 25 l -12 0 l 12 17 l 12 -17 l -12 0');
	}
	
	drawValve();
	cylinder();
	springs();
	connection();
	exaust1();
	exaust2();
	airSource();
	pshBtn = pushButton();
	
	
	airFlow2 =paper.path('M 0 0 l 0 0');
	airFlow3 =paper.path('M 0 0 l 0 0');
	airFlow4 =paper.path('M 0 0 l 0 0');
	
	pshBtn.click(function(){
		colorOpen = '#aeeafc';
		colorClose = '#93e2fa';
		if(status == 0){
			status = 1;
			
			airFlow3.hide();
			airFlow4.hide();
			pushBtn.animate({path : 'M ' + (x+110) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+110) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+130), y:(y+287)}, time);
			
			a.animate({path : 'M ' + (x+190) + ' ' + (y+337) + ' l 0 -50'}, time);
			b.animate({path : 'M ' + (x+145) + ' ' + (y+337) + ' l 0 -7 l -5 0 l 10 0'}, time);
			c.animate({path : 'M ' + (x+160) + ' ' + (y+337) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, time);
			d.animate({path : 'M ' + (x+175) + ' ' + (y+287) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time);
			e.animate({path : 'M ' + (x+205) + ' ' + (y+287) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time);
			f.animate({path : 'M ' + (x+220) + ' ' + (y+337) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, time);
			g.animate({path : 'M ' + (x+235) + ' ' + (y+337) + ' l 0 -7 l -5 0 l 10 0'}, time);
			
			valveSpring.animate({path : 'M ' + (x+250) + ' ' + (y+313) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);
			
			setTimeout(function(){
				
				var r = [];
				r[0] = paper.path('M' + (x+95) + ' ' + (y+425) + ' l 0 0').attr({'stroke':colorOpen});
				r[0].animate({path : 'M' +(x+95)+ ' ' +(y+425)+ 'l 65 0'}, (time + 100), function(){
					
					 r[1] = paper.path('M' +(x+160)+ ' ' +(y+425)+ 'l 0 0').attr({'stroke': colorOpen});
				       r[1].animate({path : 'M' +(x+160)+ ' ' +(y+425)+ 'l 0 -88'}, (time + 500), function(){
				    	   
				    	   r[2] = paper.path('M ' + (x+160) + ' ' + (y+337) + ' l 0 0 l -1 7 l 1 -7 l 7 5').attr({'stroke': colorOpen});
				    	   airFlow1 = r[2];
				    	   r[2].animate({path : 'M ' + (x+160) + ' ' + (y+337) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, (time), function(){
				    	   
				    		   r[3] = paper.path('M ' + (x+145) + ' ' + (y+287) + 'l 0 0').attr({'stroke': colorOpen});
				    		   r[3].animate({path : 'M ' + (x+145) + ' ' + (y+287) + 'l 0 -147'}, (time+500), function(){
				    			   
				    			   r[4] = paper.path('M ' + (x+138) + ' ' + (y+140) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 24}).toBack();
				    			   r[4].animate({path : 'M ' + (x+138) + ' ' + (y+140) + 'l 0 -60'}, (time+500), function(){
				    				   
				    				   r[5] = paper.path('M ' + (x+149) + ' ' + (y+110) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 58});
				    				   r[5].animate({path : 'M ' + (x+149) + ' ' + (y+110) + 'l 80 0'}, (time + 1000));
				    					   
				    				   cylPiston.animate({path : 'M ' + (x+230) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+1000));
				    					  
				    				   r[6] = paper.path('M ' + (x+245) + ' ' + (y+140) + 'l 0 0').attr({'stroke': colorOpen});
				    				   r[6].animate({path : 'M ' + (x+245) + ' ' + (y+140) + 'l 0 100'}, (time/2), function(){
				    				   
				    				   
					    				   r[7] = paper.path('M ' + (x+245) + ' ' + (y+240) + 'l 0 0').attr({'stroke': colorOpen});
					    				   r[7].animate({path : 'M ' + (x+245) + ' ' + (y+240) + 'l -70 0'}, (time/2), function(){
					    					   
					    					   r[8] = paper.path('M ' + (x+175) + ' ' + (y+240) + 'l 0 0').attr({'stroke': colorOpen});
						    				   r[8].animate({path : 'M ' + (x+175) + ' ' + (y+240) + 'l 0 47'}, (time/2), function(){
//						    					   
						    					   r[9] = paper.path('M ' + (x+175) + ' ' + (y+287) + ' l 0 0 l -3 -8 l 3 8 l 3 -8 l -3 8').attr({'stroke': colorOpen});
						    					   airFlow2 = r[9];
						    					   r[9].animate({path : 'M ' + (x+175) + ' ' + (y+287) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time/3), function(){
						    						   
						    						   r[10] = paper.path('M ' + (x+175) + ' ' + (y+336) + ' l 0 0').attr({'stroke': colorOpen});
						    						   r[10].animate({path : 'M ' + (x+175) + ' ' + (y+336) + ' l 0 25'},(time/3));
						    						   
						    					   });
						    				   });
					    					   
					    				   });
				    				   });
				    			   });
				    		   });
				    	   });
				       });
				});
				
			}, (time+200));
			
		}else{
			status = 0;
			
			airFlow1.hide();
			airFlow2.hide();
			
			pushBtn.animate({path : 'M ' + (x+50) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+70), y:(y+287)}, time);
			
			a.animate({path : 'M ' + (x+130) + ' ' + (y+337) + ' l 0 -50'}, time);
			b.animate({path : 'M ' + (x+85) + ' ' + (y+337) + ' l 0 -7 l -5 0 l 10 0'}, time);
			c.animate({path : 'M ' + (x+100) + ' ' + (y+337) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, time);
			d.animate({path : 'M ' + (x+115) + ' ' + (y+287) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time);
			e.animate({path : 'M ' + (x+145) + ' ' + (y+287) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time);
			f.animate({path : 'M ' + (x+160) + ' ' + (y+337) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, time);
			g.animate({path : 'M ' + (x+175) + ' ' + (y+337) + ' l 0 -7 l -5 0 l 10 0'}, time);
			
			valveSpring.animate({path : 'M ' + (x+190) + ' ' + (y+313) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40'}, time);
			
			setTimeout(function(){
				
				var r = [];
				r[0] = paper.path('M' + (x+95) + ' ' + (y+425) + ' l 0 0').attr({'stroke':colorClose});
				r[0].animate({path : 'M' +(x+95)+ ' ' +(y+425)+ 'l 65 0'}, (time + 100), function(){
					
					 r[1] = paper.path('M' +(x+160)+ ' ' +(y+425)+ 'l 0 0').attr({'stroke': colorClose});
				     r[1].animate({path : 'M' +(x+160)+ ' ' +(y+425)+ 'l 0 -88'}, (time + 500), function(){
				    	 
				    	 r[2] = paper.path('M ' + (x+160) + ' ' + (y+337) + ' l 0 0 l 1 7 l -1 -7 l -6 4').attr({'stroke': colorClose});
					     airFlow3 = r[2];
				    	 r[2].animate({path : 'M ' + (x+160) + ' ' + (y+337) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, (time + 500), function(){
					    	 
					    	 r[3] = paper.path('M' +(x+175)+ ' ' +(y+288)+ 'l 0 0').attr({'stroke': colorClose});
						     r[3].animate({path : 'M' +(x+175)+ ' ' +(y+288)+ 'l 0 -48'}, (time), function(){
						    	 
						    	 r[4] = paper.path('M' +(x+175)+ ' ' +(y+240)+ 'l 0 0').attr({'stroke': colorClose});
							     r[4].animate({path : 'M' +(x+175)+ ' ' +(y+240)+ 'l 70 0'}, (time), function(){
							    	 
							    	 r[5] = paper.path('M' +(x+245)+ ' ' +(y+241)+ 'l 0 0').attr({'stroke': colorClose});
								     r[5].animate({path : 'M' +(x+245)+ ' ' +(y+241)+ 'l 0 -100'}, (time), function(){
								    	 
								    	 r[6] = paper.path('M' +(x+253)+ ' ' +(y+140)+ 'l 0 0').attr({'stroke': colorClose, 'stroke-width' : 24}).toBack();
									     r[6].animate({path : 'M' +(x+253)+ ' ' +(y+140)+ 'l 0 -60'}, (time), function(){
									    	 
									    	 r[7] = paper.path('M' +(x+242)+ ' ' +(y+110)+ 'l 0 0').attr({'stroke': colorClose, 'stroke-width' : 58}).toFront();
										     r[7].animate({path : 'M' +(x+242)+ ' ' +(y+110)+ 'l -82 0'}, (time+900));
									    	 
										     cylPiston.animate({path : 'M ' + (x+150) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+1000)).toFront();
										     
										     r[8] = paper.path('M ' + (x+145) + ' ' + (y+140) + 'l 0 0').attr({'stroke': colorClose});
								    		 r[8].animate({path : 'M ' + (x+145) + ' ' + (y+140) + 'l 0 147'}, (time+500), function(){
								    			 
								    			 r[9] = paper.path('M ' + (x+145) + ' ' + (y+287) + 'l 0 0 l -3 -8 l 3 8 l 3 -8 l -3 8').attr({'stroke': colorClose});
								    			 airFlow4 = r[9];
								    			 r[9].animate({path : 'M ' + (x+145) + ' ' + (y+287) + 'l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time/1.5), function(){
								    				 
								    				 r[10] = paper.path('M ' + (x+145) + ' ' + (y+338) + 'l 0 0 ').attr({'stroke': colorClose});
									    			 r[10].animate({path : 'M ' + (x+145) + ' ' + (y+338) + 'l 0 25 '}, (time/2));
								    				 
								    			 });
								    		 });
								    		 
								    		 
										     
									     });
								    	 
								     });
							    	 
							     });
						     
						     });
					     });
				     });
			    });
			}, (time + 200));
			
		}
	});
	
}


// Indirect single acting cylinder starts here

Identify_Indirect_DAC_Symbol = function(selectedOp, component, actuator,
		jsonarray) {

	indir_doubleActingCylinderRight = 0;

	indir_doubleActingCylinderWrong = 0;

	var temp = JSON.parse(jsonarray);

	var temp1 = 0;
	pshbtnFlag = 0, springFlag = 0, dcvFlag = 0, dcnFlag = 0, dblcylFlag = 0, servUnitFlag = 0, exaust = 0, status = 0; 

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.SetFigure") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.SetFigure") {
				
				if((temp[i].id == "pushBtn")){pshbtnFlag++; temp1++}
				else if((temp[i].id == "springSym")){springFlag++; temp1++}
				else if((temp[i].id == "DCValve5_2")){dcvFlag++; temp1++}
				else if((temp[i].id == "doubleActCyl")){dblcylFlag++; temp1++}
				else if((temp[i].id == "servUnit")){servUnitFlag++; temp1++}
				else if((temp[i].id == "exaust")){exaust++; temp1++}
				else if((temp[i].id == "DCNormalClose3_20") || (temp[i].id == "DCNormalClose3_21") || (temp[i].id == "DCNormalClose3_22") 
						|| (temp[i].id == "DCNormalClose3_23")|| (temp[i].id == "DCNormalClose3_24")|| (temp[i].id == "DCNormalClose3_25")){dcnFlag++; temp1++}
				else {
					indir_doubleActingCylinderWrong = 1;
					InCheckWrongIdentification();
					break;
				}
			}
		}
		
//		console.log(pshbtnFlag + ' ' + springFlag + ' ' + dcvFlag + ' ' + dblcylFlag + ' ' + servUnitFlag + ' ' + exaust + ' ' + dcnFlag);
		
		if(pshbtnFlag == 2 && springFlag == 2 && dcvFlag == 1 && dblcylFlag == 1 && servUnitFlag == 3 && exaust == 4 && dcnFlag == 2){
			status = 1;
		}
		
		if(temp1 < 16 && indir_doubleActingCylinderWrong == 0 && status == 0){
			alertify.alert("Select all required component"); 
			if(multiSelectFlagCnt >= 7){
				app.toolbar.hintButton.show();
			}
		}
		
		if (temp1 == 16 && status == 1) {
			indir_doubleActingCylinderRight = 1;
		} else {
			indir_doubleActingCylinderWrong = 1;
		}

		InCheckRightIdentification();

	} else {

		alertify.alert("Please select right symbol to identify");
	}
}

InCheckRightIdentification = function() {
	multiSelectFlagCnt++;
	if (indir_doubleActingCylinderRight == 1
			&& indir_doubleActingCylinderWrong == 0) {

		alertify
				.alert("Identification is successful. <br/> Please connect your port connection");
		app.toolbar.checkButton.show();
//		app.toolbar.characterisation_Button.show();
		// app.toolbar.characterisation_Button.hide();
		rightIden = 1;

	} else {
		
		if (indir_doubleActingCylinderWrong == 0) {

			if (IdenFlagCnt == 3) {
//				app.toolbar.hintButton.show();
				alertify.alert("Wrong identification");
				rightIden = 0;
			} else {

				alertify.alert("Wrong identification");
				IdenFlagCnt++
				rightIden = 0;
			}
		}
	}
}

InCheckWrongIdentification = function() {

	if (IdenFlagCnt == 3) {
		app.toolbar.hintButton.show();

		alertify.alert("Wrong identification");
		rightIden = 0;
	} else {
		if (indir_doubleActingCylinderWrong == 1) {

			alertify.alert("Wrong identification");
			IdenFlagCnt++;
			rightIden = 0;
		}
	}
}

//Checking Port Connections Indirect single Acting cylinder

inDirect_DAC_Connections = function(selectedOp, component, actuator,
		jsonarray) {

	actToValveFlag = 0, springToValveFlag = 0, frlToValveLeftFlag = 0, frlToValveRightFlag = 0, exaustToValveLeftFlag = 0, exaustToValveRightFlag = 0, 
	DCV1ToDCN3LeftFlag = 0, DCV6ToDCN2RightFlag = 0, DCV4ToDAC1Flag = 0, DCV5ToDAC2Flag = 0, DCV7ToExFlag = 0, DCV9ToExFlag = 0, DCV8ToFRLFlag = 0, wrongConnection = 0;

	var temp = JSON.parse(jsonarray);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.Connection") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.Connection") {

				if ((temp[i].source.port == "pushBtnPortName" && temp[i].target.port == "DCNormalClose3_2Port1Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port1Name" && temp[i].target.port == "pushBtnPortName")) {
					actToValveFlag++;
				}else if ((temp[i].source.port == "springSymPort1Name" && temp[i].target.port == "DCNormalClose3_2Port4Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port4Name" && temp[i].target.port == "springSymPort1Name")) {
					springToValveFlag++;
				}else if ((temp[i].source.port == "servUnitPortName" && temp[i].target.port == "DCNormalClose3_2Port6Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port6Name" && temp[i].target.port == "servUnitPortName")) {
					frlToValveLeftFlag++;
				}else if ((temp[i].source.port == "servUnitPortName" && temp[i].target.port == "DCNormalClose3_2Port8Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port8Name" && temp[i].target.port == "servUnitPortName")) {
					frlToValveRightFlag++;
				}else if ((temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCNormalClose3_2Port5Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port5Name" && temp[i].target.port == "exaustPortName")) {
					exaustToValveLeftFlag++;
				}else if ((temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCNormalClose3_2Port7Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port7Name" && temp[i].target.port == "exaustPortName")) {
					exaustToValveRightFlag++;
				}else if((temp[i].source.port == "DCValve5_2Port1Name" && temp[i].target.port == "DCNormalClose3_2Port3Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port3Name" && temp[i].target.port == "DCValve5_2Port1Name")){
					DCV1ToDCN3LeftFlag++;
				}else if((temp[i].source.port == "DCValve5_2Port6Name" && temp[i].target.port == "DCNormalClose3_2Port2Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port2Name" && temp[i].target.port == "DCValve5_2Port6Name")){
					DCV6ToDCN2RightFlag++;
				}else if ((temp[i].source.port == "dacPort1Name" && temp[i].target.port == "DCValve5_2Port4Name")
						|| (temp[i].source.port == "DCValve5_2Port4Name" && temp[i].target.port == "dacPort1Name")) {
					DCV4ToDAC1Flag++;
				}else if ((temp[i].source.port == "dacPort2Name" && temp[i].target.port == "DCValve5_2Port5Name")
						|| (temp[i].source.port == "DCValve5_2Port5Name" && temp[i].target.port == "dacPort2Name")) {
					DCV5ToDAC2Flag++;
				}else if ((temp[i].source.port == "DCValve5_2Port7Name" && temp[i].target.port == "exaustPortName")
						|| (temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCValve5_2Port7Name")) {
					DCV7ToExFlag++;
				}else if ((temp[i].source.port == "DCValve5_2Port9Name" && temp[i].target.port == "exaustPortName")
						|| (temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCValve5_2Port9Name")) {
					DCV9ToExFlag++;
				}else if ((temp[i].source.port == "DCValve5_2Port8Name" && temp[i].target.port == "servUnitPortName")
						|| (temp[i].source.port == "servUnitPortName" && temp[i].target.port == "DCValve5_2Port8Name")) {
					DCV8ToFRLFlag++;
				}else {
					wrongConnection = 1;
					InCheckWrongConnection();
					break;
				}
			}
		}
		IncheckRightConnection();
	} else {
		alertify.alert("Do Some Connection");
	}
}

IncheckRightConnection = function() {
//	console.log(actToValveFlag + " " + springToValveFlag + " " + frlToValveLeftFlag + " " + frlToValveRightFlag  + " " + exaustToValveLeftFlag  
//			+ " " + exaustToValveRightFlag + " " + DCV1ToDCN3LeftFlag + " " + DCV6ToDCN2RightFlag + " " + DCV4ToDAC1Flag + " " + DCV5ToDAC2Flag + " " 
//			+ DCV7ToExFlag + " " + DCV9ToExFlag + " " + DCV8ToFRLFlag + " " + wrongConnection);
	
	if (actToValveFlag == 2 && springToValveFlag == 2 && frlToValveLeftFlag == 1 && frlToValveRightFlag == 1 && exaustToValveLeftFlag == 1 
			&& exaustToValveRightFlag == 1 && DCV1ToDCN3LeftFlag == 1 && DCV6ToDCN2RightFlag == 1 && DCV4ToDAC1Flag == 1 && DCV5ToDAC2Flag == 1
			&& DCV7ToExFlag == 1 && DCV9ToExFlag ==1 && DCV8ToFRLFlag == 1 && wrongConnection == 0) {

		alertify.alert("Correct Connection. Please click next level");
		app.toolbar.characterisation_Button.show();
		//	app.toolbar.characterisation_Button.hide();
		rightConn = 1;

	} else {
		if (wrongConnection == 0) {

			if (ConnFlagCnt == 3) {
				app.toolbar.hintButton1.show();
				alertify.alert("Wrong Connection");
				rightConn = 0;
			} else {

				alertify.alert("Wrong Connection");
				ConnFlagCnt++
				rightConn = 0;
			}
		}
	}
}	

InCheckWrongConnection = function() {

	if (ConnFlagCnt == 3) {
		app.toolbar.hintButton1.show();

		alertify.alert("Wrong Connection");
		rightConn = 0;

	} else {

		if (wrongConnection == 1) {
			alertify.alert("Wrong Connection");
			ConnFlagCnt++;
			rightConn = 0;
		}
	}
}

goForAnimation_Indirect_DAC = function(){
	
	renderForAnimationDirSACHtm = '';
	
	renderForAnimationDirSACHtm = '<div id="diagram" class="col-md-7 col-sm-12">'
								+ '</div>'
	
	$("#mainDiv").html(renderForAnimationDirSACHtm);
	
	var obj = {};
	//var paper = new Raphael(document.getElementById('diagram'), '100%', 620);
	
	var w = 900;
	var h = 500;
	
	var width = $(window).width();
	
	  if ($(window).width() < 500) {
		    width = $(this).width();
		    paper = new Raphael(document.getElementById('diagram'), '100%', 500);
		paper.setViewBox(0,0,w,h,true);
		paper.setSize('100%', 500);
	  }else
	  {
	      paper = new Raphael(document.getElementById('diagram'), '100%', 900);
		paper.setViewBox(0,0,w,h,true);
		paper.setSize('100%', 900);
	  }
	
	x = 150;
	y = -100;
	
	drawValve = function(){
//		3/2 left Valve
		valve = paper.rect((x+70),(y+387), 120, 50);
		
//		valve middle lines and arrows
		a = paper.path('M ' + (x+130) + ' ' + (y+387) + ' l 0 50'); //mid line
		b = paper.path('M ' + (x+90) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5');//first arrow
		c = paper.path('M ' + (x+110) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0');
		d = paper.path('M ' + (x+150) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0');
		e = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8');//right down arrow
			
//		3/2 right valve
		valve1 = paper.rect((x+520),(y+387), 120, 50);
		
//		valve middle lines and arrows
		a1 = paper.path('M ' + (x+580) + ' ' + (y+387) + ' l 0 50'); //mid line
		b1 = paper.path('M ' + (x+540) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5');//first arrow
		c1 = paper.path('M ' + (x+560) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0');
		d1 = paper.path('M ' + (x+600) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0');
		e1 = paper.path('M ' + (x+600) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8');//right down arrow
		
		
//		Valve
		valve2 = paper.rect((x+300),(y+250), 120, 50);
		
		a2 = paper.path('M ' + (x+360) + ' ' + (y+300) + ' l 0 -50');
		b2 = paper.path('M ' + (x+315) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0');//		Left UP arrow
		c2 = paper.path('M ' + (x+330) + ' ' + (y+300) + ' l -15 -49 l -1 7 l 1 -7 l 7 5');//		Left down arrow
		d2 = paper.path('M ' + (x+345) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8');//		Right down arrow
		e2 = paper.path('M ' + (x+375) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8');//		Right UP arrow
		f2 = paper.path('M ' + (x+390) + ' ' + (y+300) + ' l 15 -49 l 1 7 l -1 -7 l -6 4');
		g2 = paper.path('M ' + (x+405) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0');
		
//		cylinder piston left
		cylPiston = paper.path('M ' + (x+305) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0').attr({"fill" : "#aaa"});
	}
	
	cylinder = function(){
//		single acting cylinder
		cylinder = paper.rect((x+280), (y+80), 140, 60);
	}
	
	springs = function(){
//		Spring
		valveSpring = paper.path('M ' + (x+190) + ' ' + (y+413) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40');
		valveSpring1 = paper.path('M ' + (x+640) + ' ' + (y+413) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40');
//		valveSpring1 = paper.path('M ' + (x+640) + ' ' + (y+413) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40');
	}
	
	connection = function(){
//		Cylinder and 5/2 valve 1 connection
		conn = paper.path('M ' + (x+375) + ' ' + (y+250) + 'l 0 -50 l -75 0 l 0 -60');
		
//		Cylinder and 5/2 valve 2 connection
		conn1 = paper.path('M ' + (x+405) + ' ' + (y+250) + ' l 0 -110');
		
//		3/2 left valve to 5/2 left connection
		conn2 = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 0 -110 l 150 0');
		
//		3/2 right valve to 5/2 right connection
		conn3 = paper.path('M ' + (x+540) + ' ' + (y+387) + 'l 0 -110 l -120 0');
	}
	
	pushButton = function(){
//		push button
		pushBtn = paper.path('M ' + (x+50) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0')
		.attr({"fill" : "#ccc"});
		paper.text((x-25), (y+410), "Press Actuator").attr({fill: '#000', 'font-size':15});
		
		return pushBtn;
	}
	
	pushButton1 = function(){
//		push button
		pushBtn1 = paper.path('M ' + (x+500) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+500) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0')
		.attr({"fill" : "#ccc"});
		paper.text((x+460), (y+375), "Press Actuator").attr({fill: '#000', 'font-size':15});
		
		return pushBtn1;
	}
	
	paper.text((x+100), (y+375), "V1").attr({fill: '#000', 'font-size':15});
	paper.text((x+570), (y+375), "V2").attr({fill: '#000', 'font-size':15});
	
	airSource = function(){
		
//		First air flow set
		paper.rect((x+35), (y+510), 60, 30).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+525), 7).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+525), 1).attr({
			"stroke-width" : 2
		});
		
//		circle with arrow
		paper.circle((x+70), (y+525), 7).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+17) + " " + (y+525) + " l 18 0 M " + (x+95) + " " + (y+525) + " l 55 0 l 0 -88 M " + (x+85) + " " + (y+510) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		paper.path("M " + (x+150) + " " + (y+525) + " l 390 0 l 0 -88 M " + (x+85) + " " + (y+510) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		
		paper.path("M "+ (x+45) + " " + (y+510) + " l 0 30").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		paper.path("M " + (x+66) + " " + (y+530) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
			"stroke-width" : 1
		});
		
//		Second air flow set
		paper.rect((x+305), (y+355), 60, 30).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+280), (y+370), 7).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+280), (y+370), 1).attr({
			"stroke-width" : 2
		});
		
//		circle with arrow
		paper.circle((x+340), (y+370), 7).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+287) + " " + (y+370) + " l 18 0 M " + (x+365) + " " + (y+370) + " l 25 0 l 0 -70 M " + (x+355) + " " + (y+355) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		paper.path("M "+ (x+315) + " " + (y+355) + " l 0 30").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		paper.path("M " + (x+336) + " " + (y+375) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
			"stroke-width" : 1
		});
	}
	
	exaust = function(){
		exaust = paper.path('M ' + (x+170) + ' ' + (y+437) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
		exaust1 = paper.path('M ' + (x+560) + ' ' + (y+437) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
		exaust2 = paper.path('M ' + (x+375) + ' ' + (y+300) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
		exaust3 = paper.path('M ' + (x+405) + ' ' + (y+300) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
		
		
		
	}
	
	drawValve();
	cylinder();
	springs();
	connection();
	exaust();
	airSource();
	pshBtn = pushButton();
	pshBtn1 = pushButton1();
	
	
	
	airFlowF1 = paper.path('');
	airFlowF2 = paper.path('');
	airFlowF3 = paper.path('');
	airFlowF4 = paper.path('');
	airFlowF5 = paper.path('');
	airFlowF6 = paper.path('');
	airFlowF7 = paper.path('');
	airFlowF8 = paper.path('');
	v2Down = paper.path('');
	
	time = 1000;
	status1 = 0;
	status2 = 1;
	dcvStatus = 0;
	colorOpen = '#aeeafc';
	colorClose = '#93e2fa';
	
	pshBtn.click(function(){
		if(status1 == 0){
			
			airFlowF2.hide();	
			
//			console.log("psh1_open " + status1 + " " + status2);
			if(status2 == 0){
				status1 = 1; 
			pushBtn.animate({path : 'M ' + (x+110) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+110) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+130), y:(y+387)}, time);
			a.animate({path : 'M ' + (x+190) + ' ' + (y+387) + ' l 0 50'}, time);
			b.animate({path : 'M ' + (x+150) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
			c.animate({path : 'M ' + (x+170) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
			d.animate({path : 'M ' + (x+210) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
			e.animate({path : 'M ' + (x+210) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
				
			valveSpring.animate({path : 'M ' + (x+250) + ' ' + (y+413) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);
			
			setTimeout(function(){
				
				var r = [];
				
				r[0] = paper.path('M' + (x+95) + ' ' + (y+525) + 'l 0 0').attr({'stroke' : colorOpen});
				r[0].animate({path : 'M' + (x+95) + ' ' + (y+525) + 'l 55 0'},(time + 100), function(){
					r[1] = paper.path('M' + (x+150) + ' ' + (y+525) + 'l 0 0').attr({'stroke' : colorOpen});
					r[1].animate({path : 'M' + (x+150) + ' ' + (y+525) + 'l 0 -88'},(time + 100), function(){
						r[2] = paper.path('M' + (x+150) + ' ' + (y+437) + 'l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke' : colorOpen});//v1 up arrow
						airFlowF1 = r[2];
						airFlowF1.animate({path : 'M' + (x+150) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'},(time), function(){
								
							r[3] = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 0 0').attr({'stroke' : colorOpen});
							r[3].animate({path : 'M ' + (x+150) + ' ' + (y+387) + 'l 0 -110'}, (time), function(){
								
								r[4] = paper.path('M ' + (x+150) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
								r[4].animate({path : 'M ' + (x+150) + ' ' + (y+277) + 'l 150 0'}, (time), function(){
									
									
//										console.log("Brown and orange hide");

										airFlowF7.hide();
										airFlowF8.hide();	
										
										r[5] = paper.path('M' + (x+420) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff', 'stroke-width':2});
										pqr = paper.path('M' + (x+420) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff'}).toBack();
										pqr.animate({path : 'M' + (x+420) + ' ' + (y+277) + 'l 60 0'},(time));
										r[5].animate({path : 'M' + (x+420) + ' ' + (y+277) + 'l 60 0'},(time));
										
										valve2.animate({x:(x+360), y:(y+250)}, time);
										
										a2.animate({path : 'M ' + (x+420) + ' ' + (y+300) + ' l 0 -50'}, time).toFront();
										b2.animate({path : 'M ' + (x+375) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, time);
										c2.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, time);
										d2.animate({path : 'M ' + (x+405) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time);
										e2.animate({path : 'M ' + (x+435) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time).toFront();
										f2.animate({path : 'M ' + (x+450) + ' ' + (y+300) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, time).toFront();
										g2.animate({path : 'M ' + (x+465) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, time);
										
										//setTimeout(function(){
										r[6] = paper.path('M' + (x+300) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
										abc = paper.path('M' + (x+300) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#000'}).toBack();
										abc.animate({path : 'M' + (x+300) + ' ' + (y+277) + 'l 60 0'},(time));
										r[6].animate({path : 'M' + (x+300) + ' ' + (y+277) + 'l 60 0'},(time));
										//}, (time + 100));
										
										setTimeout(function(){
										l = paper.path('M' + (x+420) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
										l.animate({path : 'M' + (x+480) + ' ' + (y+277) + 'l 60 0'}, (time), function(){
											m = paper.path('M' + (x+540) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
											m.animate({path : 'M' + (x+540) + ' ' + (y+277) + 'l 0 110'}, (time/2), function(){
												v2Down = paper.path('M' + (x+540) + ' ' + (y+387) + 'l 0 0 l -8 -3 l 8 3 l 3 -8').attr({'stroke' : colorOpen});
												v2Down.animate({path : 'M' + (x+540) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, (time/2), function(){
													o = paper.path('M' + (x+560) + ' ' + (y+437) + 'l 0 0').attr({'stroke' : colorOpen});
													o.animate({path : 'M' + (x+560) + ' ' + (y+437) + 'l 0 15'}, (time/2), function(){
													
													})
												})
											})								
										});
										});
										
										
										setTimeout(function(){
												
											r[7] = paper.path('M ' + (x+365) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
											r[7].animate({path : 'M ' + (x+365) + ' ' + (y+370) + 'l 25 0'}, (time/2), function(){
												
												r[8] = paper.path('M ' + (x+390) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
												r[8].animate({path : 'M ' + (x+390) + ' ' + (y+370) + 'l 0 -70'}, (time), function(){
													
													r[9] = paper.path('M ' + (x+390) + ' ' + (y+300) + ' l 0 0 l -1 7 l 1 -7 l 7 5').attr({'stroke' : colorOpen});//dcv left up arrow
													airFlowF3 = r[9];
													airFlowF3.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, (time), function(){
														
														r[10] = paper.path('M ' + (x+375) + ' ' + (y+250) + 'l 0 0').attr({'stroke' : colorOpen});
														r[10].animate({path : 'M ' + (x+375) + ' ' + (y+250) + 'l 0 -50'}, (time), function(){
															
															r[11] = paper.path('M ' + (x+375) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
															r[11].animate({path : 'M ' + (x+375) + ' ' + (y+200) + 'l -75 0'}, (time), function(){
																
																r[12] = paper.path('M ' + (x+300) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
																r[12].animate({path : 'M ' + (x+300) + ' ' + (y+200) + 'l 0 -60'}, (time), function(){
																	
																	r[13] = paper.path('M ' + (x+293) + ' ' + (y+139) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 23});
																	r[13].animate({path : 'M ' + (x+293) + ' ' + (y+139) + 'l 0 -58'}, (time), function(){
																		
																		r[14] = paper.path('M ' + (x+304) + ' ' + (y+110) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 58});
																		r[14].animate({path : 'M ' + (x+304) + ' ' + (y+110) + 'l 85 0'}, (time*1.5));
																		
																		cylPiston.animate({path : 'M ' + (x+390) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time*1.5));
																		
																		r[15] = paper.path('M ' + (x+405) + ' ' + (y+140) + ' l 0 0').attr({'stroke' : colorOpen});
																		r[15].animate({path : 'M ' + (x+405) + ' ' + (y+140) + ' l 0 110'},(time/1.5), function(){
																			
																			r[16] = paper.path('M ' + (x+405) + ' ' + (y+250) + ' l 0 0 l -3 -8 l 3 8 l 3 -8 l -3 8').attr({'stroke' : colorOpen});//dcv left down arrow
																			airFlowF4 = r[16];
																			airFlowF4.animate({path : 'M ' + (x+405) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'},(time/1.5), function(){
																				
																				r[17] = paper.path('M ' + (x+405) + ' ' + (y+300) + ' l 0 0').attr({'stroke':colorOpen});
																				r[17].animate({path : 'M ' + (x+405) + ' ' + (y+300) + ' l 0 20'},(time/3));
																				
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										}, time);
										dcvStatus = 1;
									
								});									
							});
						});
					});
				});
				}, (time+200));
				}else{
					dcvStatus = 0;
					alertify.alert("Close the other 3/2 control valve first");
				}
			
			
		}else{
			airFlowF1.hide();
			
			status1 = 0;
//			console.log("psh1_close " + status1 + " " + status2);
			pushBtn.animate({path : 'M ' + (x+50) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+70), y:(y+387)}, time);
			a.animate({path : 'M ' + (x+130) + ' ' + (y+387) + ' l 0 50'}, time);
			b.animate({path : 'M ' + (x+90) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
			c.animate({path : 'M ' + (x+110) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
			d.animate({path : 'M ' + (x+150) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
			e.animate({path : 'M ' + (x+150) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
				
			valveSpring.animate({path : 'M ' + (x+190) + ' ' + (y+413) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40'}, time);
			
			setTimeout(function(){
			if(status2 == 1){
				var r = [];
//				console.log("green and blue hide");
				airFlowF3.hide();
				airFlowF4.hide();
				
				r[0] = paper.path('M' + (x+360) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff', 'stroke-width':2});
				pqr = paper.path('M' + (x+360) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff'}).toBack();
				pqr.animate({path : 'M' + (x+360) + ' ' + (y+277) + 'l -60 0'},(time));
				r[0].animate({path : 'M' + (x+360) + ' ' + (y+277) + 'l -60 0'},(time));
				
				valve2.animate({x:(x+300), y:(y+250)}, time);
				a2.animate({path : 'M ' + (x+360) + ' ' + (y+300) + ' l 0 -50'}, (time)).toFront();
				b2.animate({path : 'M ' + (x+315) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, (time));
				c2.animate({path : 'M ' + (x+330) + ' ' + (y+300) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, (time)).toFront();
				d2.animate({path : 'M ' + (x+345) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time)).toFront();
				e2.animate({path : 'M ' + (x+375) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time));
				f2.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, (time));
				g2.animate({path : 'M ' + (x+405) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, (time));
				
				abc1 = paper.path('M' + (x+480) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#000'});
				r[1] = paper.path('M' + (x+480) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
				r[1].animate({path : 'M' + (x+480) + ' ' + (y+277) + 'l -60 0'},(time));
				abc1.animate({path : 'M' + (x+480) + ' ' + (y+277) + 'l -60 0'},(time), function(){
				
					r[2] = paper.path('M' + (x+300) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
					r[2].animate({path : 'M' + (x+300) + ' ' + (y+277) + 'l -150 0'}, (time/1.5));
					r[3] = paper.path('M ' + (x+365) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
					r[3].animate({path : 'M ' + (x+365) + ' ' + (y+370) + 'l 25 0'}, (time/2), function(){
						
						r[4] = paper.path('M' + (x+150) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
						r[4].animate({path : 'M' + (x+150) + ' ' + (y+277) + 'l 0 110'}, (time/1.2));
						r[5] = paper.path('M ' + (x+390) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
						r[5].animate({path : 'M ' + (x+390) + ' ' + (y+370) + 'l 0 -70'}, (time), function(){
							
							r[6] = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 0 0 l -8 -3 l 8 3 l 3 -8').attr({'stroke' : colorOpen});//V1 down arrow
							airFlowF2 = r[6];
							airFlowF2.animate({path : 'M ' + (x+150) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, (time/3));
							r[7] = paper.path('M ' + (x+390) + ' ' + (y+300) + ' l 0 0 l 1 7 l -1 -7 l -6 4').attr({'stroke' : colorOpen});							 
							airFlowF7 = r[7];
							airFlowF7.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, (time), function(){
					
								
								r[8] = paper.path('M' + (x+170) + ' ' + (y+437) + 'l 0 0').attr({'stroke' : colorOpen});
								r[8].animate({path : 'M' + (x+170) + ' ' + (y+437) + 'l 0 15'}, (time/3));
								r[9] = paper.path('M ' + (x+405) + ' ' + (y+250) + ' l 0 0').attr({'stroke' : colorOpen});
								r[9].animate({path : 'M ' + (x+405) + ' ' + (y+250) + ' l 0 -110'}, (time), function(){
					
									r[10] = paper.path('M ' + (x+410) + ' ' + (y+140) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 18}).toBack();
									r[10].animate({path : 'M ' + (x+410) + ' ' + (y+140) + 'l 0 -60'}, (time), function(){
									
										r[11] = paper.path('M ' + (x+401) + ' ' + (y+110) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 58});
										r[11].animate({path : 'M ' + (x+401) + ' ' + (y+110) + 'l -90 0'}, (time));
										
										cylPiston.animate({path : 'M ' + (x+305) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time)).toFront();
										
										r[12] = paper.path('M ' + (x+300) + ' ' + (y+140) + 'l 0 0').attr({'stroke' : colorOpen});
										r[12].animate({path : 'M ' + (x+300) + ' ' + (y+140) + 'l 0 60'}, (time), function(){
											
											r[13] = paper.path('M ' + (x+300) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
											r[13].animate({path : 'M ' + (x+300) + ' ' + (y+200) + 'l 75 0'}, (time), function(){
												
												r[14] = paper.path('M ' + (x+375) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
												r[14].animate({path : 'M ' + (x+375) + ' ' + (y+200) + 'l 0 50'}, (time), function(){
													
													r[15] = paper.path('M ' + (x+375) + ' ' + (y+250) + ' l 0 0 l -3 -8 l 3 8 l 3 -8 l -3 8').attr({'stroke' : colorOpen});
													airFlowF8 = r[15];
													airFlowF8.animate({path : 'M ' + (x+375) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time/2), function(){
														
														r[16] = paper.path('M ' + (x+375) + ' ' + (y+300) + 'l 0 0').attr({'stroke' : colorOpen});
														r[16].animate({path : 'M ' + (x+375) + ' ' + (y+300) + 'l 0 15'}, (time/3));
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
				
			}else{
				
				
			}
			},(time));
			
			
		}
	});
	
	pshBtn1.click(function(){
		
			if(status2 == 0){
				 airFlowF5.hide();
				
//				console.log("psh2_open " + status1 + " " + status2);
				if(status1 == 0){
					v2Down.hide();
					status2 = 1;
				pushBtn1.animate({path : 'M ' + (x+500) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+500) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0'}, time);
				valve1.animate({x:(x+520), y:(y+387)}, time);
				a1.animate({path : 'M ' + (x+580) + ' ' + (y+387) + ' l 0 50'}, time);
				b1.animate({path : 'M ' + (x+540) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
				c1.animate({path : 'M ' + (x+560) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
				d1.animate({path : 'M ' + (x+600) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
				e1.animate({path : 'M ' + (x+600) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
				
				valveSpring1.animate({path : 'M ' + (x+640) + ' ' + (y+413) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);
				
				setTimeout(function(){
					var r = [];
					
					r[0] = paper.path('M' + (x+95) + ' ' + (y+525) + 'l 0 0').attr({'stroke' : colorOpen});
					r[0].animate({path : 'M' + (x+95) + ' ' + (y+525) + 'l 445 0'},(time*2), function(){
						
						r[1] = paper.path('M' + (x+540) + ' ' + (y+525) + 'l 0 0').attr({'stroke' : colorOpen});
						r[1].animate({path : 'M' + (x+540) + ' ' + (y+525) + 'l 0 -87'},(time), function(){
						
							r[2] = paper.path('M ' + (x+540) + ' ' + (y+437) + 'l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke' : colorOpen});
							airFlowF6 = r[2];
							airFlowF6.animate({path : 'M ' + (x+540) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, (time/1.5), function(){
							
								r[3] = paper.path('M ' + (x+540) + ' ' + (y+387) + 'l 0 0').attr({'stroke' : colorOpen});
								r[3].animate({path : 'M ' + (x+540) + ' ' + (y+387) + 'l 0 -110'}, (time/1.5), function(){
									
									r[4] = paper.path('M ' + (x+540) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
									r[4].animate({path : 'M ' + (x+540) + ' ' + (y+277) + 'l -60 0'}, (time/1.5), function(){
										
										
//											console.log("green and blue hide");
											airFlowF3.hide();
											airFlowF4.hide();	
											
											r[5] = paper.path('M ' + (x+480) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
											abc = paper.path('M ' + (x+480) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : "#000"}).toBack();
											abc.animate({path : 'M ' + (x+480) + ' ' + (y+277) + 'l -60 0'}, (time/1.5));
											r[5].animate({path : 'M ' + (x+480) + ' ' + (y+277) + 'l -60 0'}, (time/1.5));
												
												r[6] = paper.path('M' + (x+360) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff', 'stroke-width':2});
												pqr = paper.path('M' + (x+360) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff'}).toBack();
												pqr.animate({path : 'M' + (x+360) + ' ' + (y+277) + 'l -60 0'},(time));
												r[6].animate({path : 'M' + (x+360) + ' ' + (y+277) + 'l -60 0'},(time));
												
												valve2.animate({x:(x+300), y:(y+250)}, time);
												a2.animate({path : 'M ' + (x+360) + ' ' + (y+300) + ' l 0 -50'}, (time)).toFront();
												b2.animate({path : 'M ' + (x+315) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, (time));
												c2.animate({path : 'M ' + (x+330) + ' ' + (y+300) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, (time)).toFront();
												d2.animate({path : 'M ' + (x+345) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time)).toFront();
												e2.animate({path : 'M ' + (x+375) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time));
												f2.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, (time));
												g2.animate({path : 'M ' + (x+405) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, (time));
												
												abc1 = paper.path('M' + (x+480) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#000'});
												r[7] = paper.path('M' + (x+480) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
												r[7].animate({path : 'M' + (x+480) + ' ' + (y+277) + 'l -60 0'},(time));
												abc1.animate({path : 'M' + (x+480) + ' ' + (y+277) + 'l -60 0'},(time), function(){
													
													r[2] = paper.path('M' + (x+300) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
													r[2].animate({path : 'M' + (x+300) + ' ' + (y+277) + 'l -150 0'}, (time/1.5));
													r[3] = paper.path('M ' + (x+365) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
													r[3].animate({path : 'M ' + (x+365) + ' ' + (y+370) + 'l 25 0'}, (time/2), function(){
														
														r[4] = paper.path('M' + (x+150) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
														r[4].animate({path : 'M' + (x+150) + ' ' + (y+277) + 'l 0 110'}, (time/1.2));
														r[5] = paper.path('M ' + (x+390) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
														r[5].animate({path : 'M ' + (x+390) + ' ' + (y+370) + 'l 0 -70'}, (time), function(){
															
															r[6] = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 0 0 l -8 -3 l 8 3 l 3 -8').attr({'stroke' : colorOpen});//v1 down arrow
															airFlowF2 = r[6]; 
															airFlowF2.animate({path : 'M ' + (x+150) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, (time/3));
															r[7] = paper.path('M ' + (x+390) + ' ' + (y+300) + ' l 0 0 l 1 7 l -1 -7 l -6 4').attr({'stroke' : colorOpen});
															airFlowF7 = r[7];
															airFlowF7.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, (time), function(){
													
																
																r[8] = paper.path('M' + (x+170) + ' ' + (y+437) + 'l 0 0').attr({'stroke' : colorOpen});
																r[8].animate({path : 'M' + (x+170) + ' ' + (y+437) + 'l 0 15'}, (time/3));
																r[9] = paper.path('M ' + (x+405) + ' ' + (y+250) + ' l 0 0').attr({'stroke' : colorOpen});
																r[9].animate({path : 'M ' + (x+405) + ' ' + (y+250) + ' l 0 -110'}, (time), function(){
													
																	r[10] = paper.path('M ' + (x+410) + ' ' + (y+140) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 18}).toBack();
																	r[10].animate({path : 'M ' + (x+410) + ' ' + (y+140) + 'l 0 -60'}, (time), function(){
																	
																		r[11] = paper.path('M ' + (x+401) + ' ' + (y+110) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 58});
																		r[11].animate({path : 'M ' + (x+401) + ' ' + (y+110) + 'l -90 0'}, (time));
																		
																		cylPiston.animate({path : 'M ' + (x+305) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time)).toFront();
																		
																		r[12] = paper.path('M ' + (x+300) + ' ' + (y+140) + 'l 0 0').attr({'stroke' : colorOpen});
																		r[12].animate({path : 'M ' + (x+300) + ' ' + (y+140) + 'l 0 60'}, (time), function(){
																			
																			r[13] = paper.path('M ' + (x+300) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
																			r[13].animate({path : 'M ' + (x+300) + ' ' + (y+200) + 'l 75 0'}, (time), function(){
																				
																				r[14] = paper.path('M ' + (x+375) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
																				r[14].animate({path : 'M ' + (x+375) + ' ' + (y+200) + 'l 0 50'}, (time), function(){
																					
																					r[15] = paper.path('M ' + (x+375) + ' ' + (y+250) + ' l 0 0 l -3 -8 l 3 8 l 3 -8 l -3 8').attr({'stroke' : colorOpen});
																					airFlowF8 = r[15];
																					airFlowF8.animate({path : 'M ' + (x+375) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, (time/2), function(){
																						
																						r[16] = paper.path('M ' + (x+375) + ' ' + (y+300) + 'l 0 0').attr({'stroke' : colorOpen});
																						r[16].animate({path : 'M ' + (x+375) + ' ' + (y+300) + 'l 0 15'}, (time/3));
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});	
												
												
												
											
										
										
									});
									
								});
							
							});
							
						});
					});
				}, (time));
				}else{
					
					alertify.alert("Close the other control valve first");
				}
				
				 
			}else{
				airFlowF6.hide();
				
				status2 = 0;
				//console.log("psh2_close " + status1 + " " + status2);
				
				pushBtn1.animate({path : 'M ' + (x+440) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+440) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0'}, time);
				valve1.animate({x:(x+460), y:(y+387)}, time);
				a1.animate({path : 'M ' + (x+520) + ' ' + (y+387) + ' l 0 50'}, time);
				b1.animate({path : 'M ' + (x+480) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
				c1.animate({path : 'M ' + (x+500) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
				d1.animate({path : 'M ' + (x+540) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
				e1.animate({path : 'M ' + (x+540) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
				
				valveSpring1.animate({path : 'M ' + (x+580) + ' ' + (y+413) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40'}, time);
				
				if(status1 == 1){
				setTimeout(function(){
//					console.log("Brown and orange hide");
					airFlowF7.hide();
					airFlowF8.hide();
					
					
					line = paper.path('M' + (x+420) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff', 'stroke-width':2});
					pqr = paper.path('M' + (x+420) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#fff'}).toBack();
					pqr.animate({path : 'M' + (x+420) + ' ' + (y+277) + 'l 60 0'},(time));
					line.animate({path : 'M' + (x+420) + ' ' + (y+277) + 'l 60 0'},(time));
					
					var r = [];
					
					line2 = paper.path('M ' + (x+420) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : "#fff", 'stroke-width' : 2});
					line2.animate({path : 'M ' + (x+420) + ' ' + (y+277) + 'l 60 0'}, (time));
					
					valve2.animate({x:(x+360), y:(y+250)}, time);
					
					a2.animate({path : 'M ' + (x+420) + ' ' + (y+300) + ' l 0 -50'}, time).toFront();
					b2.animate({path : 'M ' + (x+375) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, time);
					c2.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, time);
					d2.animate({path : 'M ' + (x+405) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time);
					e2.animate({path : 'M ' + (x+435) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'}, time).toFront();
					f2.animate({path : 'M ' + (x+450) + ' ' + (y+300) + ' l 15 -49 l 1 7 l -1 -7 l -6 4'}, time).toFront();
					g2.animate({path : 'M ' + (x+465) + ' ' + (y+300) + ' l 0 -7 l -5 0 l 10 0'}, time);
					
					line1 = paper.path('M' + (x+300) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
					abc = paper.path('M' + (x+300) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : '#000'}).toBack();
					abc.animate({path : 'M' + (x+300) + ' ' + (y+277) + 'l 60 0'},(time));
					line1.animate({path : 'M' + (x+300) + ' ' + (y+277) + 'l 60 0'},(time));
					
					setTimeout(function(){
						
						r[0] = paper.path('M ' + (x+480) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
						r[0].animate({path : 'M ' + (x+480) + ' ' + (y+277) + 'l 60 0'}, (time), function(){
						
							r[1] = paper.path('M ' + (x+540) + ' ' + (y+277) + 'l 0 0').attr({'stroke' : colorOpen});
							r[1].animate({path : 'M ' + (x+540) + ' ' + (y+277) + 'l 0 110'}, (time/1.5), function(){
								
								r[2] = paper.path('M ' + (x+540) + ' ' + (y+387) + 'l 0 0 l -8 -3 l 8 3 l 3 -8').attr({'stroke' : 'red'});//v2 down arrow
								airFlowF5 = r[2];
								airFlowF5.animate({path : 'M ' + (x+540) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, (time/1.5), function(){
									
									r[3] = paper.path('M' + (x+560) + ' ' + (y+437) + 'l 0 0').attr({'stroke' : colorOpen});
									r[3].animate({path : 'M' + (x+560) + ' ' + (y+437) + 'l 0 15'},(time), function(){
										
									});
								});
							});
						});
					}, (time));
					
				
				}, time);
				
				setTimeout(function(){
					var r = [];
					r[0] = paper.path('M ' + (x+365) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
					r[0].animate({path : 'M ' + (x+365) + ' ' + (y+370) + 'l 25 0'}, (time/2), function(){
						
						r[1] = paper.path('M ' + (x+390) + ' ' + (y+370) + 'l 0 0').attr({'stroke' : colorOpen});
						r[1].animate({path : 'M ' + (x+390) + ' ' + (y+370) + 'l 0 -70'}, (time), function(){
							
							r[2] = paper.path('M ' + (x+390) + ' ' + (y+300) + ' l 0 0 l -1 7 l 1 -7 l 7 5').attr({'stroke' : colorOpen});
							airFlowF3 = r[2];
							airFlowF3.animate({path : 'M ' + (x+390) + ' ' + (y+300) + ' l -15 -49 l -1 7 l 1 -7 l 7 5'}, (time), function(){
								
								r[3] = paper.path('M ' + (x+375) + ' ' + (y+250) + 'l 0 0').attr({'stroke' : colorOpen});
								r[3].animate({path : 'M ' + (x+375) + ' ' + (y+250) + 'l 0 -50'}, (time), function(){
									
									r[4] = paper.path('M ' + (x+375) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
									r[4].animate({path : 'M ' + (x+375) + ' ' + (y+200) + 'l -75 0'}, (time), function(){
										
										r[5] = paper.path('M ' + (x+300) + ' ' + (y+200) + 'l 0 0').attr({'stroke' : colorOpen});
										r[5].animate({path : 'M ' + (x+300) + ' ' + (y+200) + 'l 0 -60'}, (time), function(){
											
											r[6] = paper.path('M ' + (x+293) + ' ' + (y+139) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 23});
											r[6].animate({path : 'M ' + (x+293) + ' ' + (y+139) + 'l 0 -58'}, (time), function(){
												
												r[7] = paper.path('M ' + (x+304) + ' ' + (y+110) + 'l 0 0').attr({'stroke' : colorOpen, 'stroke-width' : 58});
												r[7].animate({path : 'M ' + (x+304) + ' ' + (y+110) + 'l 85 0'}, (time*1.5));
												
												cylPiston.animate({path : 'M ' + (x+390) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time*1.5));
												
												r[8] = paper.path('M ' + (x+405) + ' ' + (y+140) + ' l 0 0').attr({'stroke' : colorOpen});
												r[8].animate({path : 'M ' + (x+405) + ' ' + (y+140) + ' l 0 110'},(time/1.5), function(){
													
													r[9] = paper.path('M ' + (x+405) + ' ' + (y+250) + ' l 0 0 l -3 -8 l 3 8 l 3 -8 l -3 8').attr({'stroke' : colorOpen});
													airFlowF4 = r[9];
													airFlowF4.animate({path : 'M ' + (x+405) + ' ' + (y+250) + ' l 0 49 l -3 -8 l 3 8 l 3 -8 l -3 8'},(time/1.5), function(){
														
														r[10] = paper.path('M ' + (x+405) + ' ' + (y+300) + ' l 0 0').attr({'stroke':colorOpen});
														r[10].animate({path : 'M ' + (x+405) + ' ' + (y+300) + ' l 0 20'},(time/3));
														
													});
												});
											});
										});
									});
								});
							});
						});
					});
				}, time);
				}else{
				}
//				dcvStatus = 1;
				
			} 
	});	
		
	
		

	
	
}


