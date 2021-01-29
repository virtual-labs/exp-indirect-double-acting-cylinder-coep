//Directional Control valve symbol

//2/2 Directional Control Valve Normally closed
function dcvNormalClose(canvas,x1,y1){
	var dcvNormalClose = new LabelddcvNormalCloseFigure({width:100,height:100});
	dcvNormalClose.setId("dcvNormalClose");
	dcvNormalClose.setResizeable(false);
	
	canvas.add( dcvNormalClose, x1,y1); 
	return dcvNormalClose;
}


var LabelddcvNormalCloseFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 100, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 100, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 25 100 l 0 -39 l -3 7 l 3 -7 l 3 7").attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 50 100 l 0 -39").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 75 100 l 0 -10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 75 60 l 0 10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.text( 75, 50, "A").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 75, 110, "P").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//2/2 Directional Control Valve Normally open
function dcvNormalOpen(canvas,x1,y1){
	var dcvNormalOpen = new LabelddcvNormalOpenFigure({width:100,height:100});
	dcvNormalOpen.setId("dcvNormalOpen");
	dcvNormalOpen.setResizeable(false);
	
	canvas.add( dcvNormalOpen, x1,y1); 
	return dcvNormalOpen;
}

var LabelddcvNormalOpenFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 100, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 100, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 75 100 l 0 -39 l -3 7 l 3 -7 l 3 7").attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 50 100 l 0 -39").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 25 100 l 0 -10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 25 60 l 0 10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.text( 75, 50, "A").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 75, 110, "P").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//3/2 Directional Control Valve Normally closed
function DCNormalClose3_2(canvas,x1,y1, dcnc32){
	var DCNormalClose3_2 = new Labeld3_2DCNormalCloseFigure({width:100,height:100});
	DCNormalClose3_2.setId("DCNormalClose3_2"+dcnc32);
	DCNormalClose3_2.setResizeable(false);
	
	var DCNormalClose3_2Port1 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-4,70));
		DCNormalClose3_2Port1.setName("DCNormalClose3_2Port1Name");
		DCNormalClose3_2Port1.setId("DCNormalClose3_2Port1Id");
//		DCNormalClose3_2Port1.setBackgroundColor("#37B1DE");
		
	var DCNormalClose3_2Port2 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(15,48));
		DCNormalClose3_2Port2.setName("DCNormalClose3_2Port2Name");
		DCNormalClose3_2Port2.setId("DCNormalClose3_2Port2Id");	
		
	var DCNormalClose3_2Port3 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(60,43));
		DCNormalClose3_2Port3.setName("DCNormalClose3_2Port3Name");
		DCNormalClose3_2Port3.setId("DCNormalClose3_2Port3Id");	
		
	var DCNormalClose3_2Port4 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(104,70));
		DCNormalClose3_2Port4.setName("DCNormalClose3_2Port4Name");
		DCNormalClose3_2Port4.setId("DCNormalClose3_2Port4Id");	
		
	var DCNormalClose3_2Port5 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,90));
		DCNormalClose3_2Port5.setName("DCNormalClose3_2Port5Name");
		DCNormalClose3_2Port5.setId("DCNormalClose3_2Port5Id");	
	
	var DCNormalClose3_2Port6 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(60,90));
		DCNormalClose3_2Port6.setName("DCNormalClose3_2Port6Name");
		DCNormalClose3_2Port6.setId("DCNormalClose3_2Port6Id");
		
	var DCNormalClose3_2Port7 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(40,90));
		DCNormalClose3_2Port7.setName("DCNormalClose3_2Port7Name");
		DCNormalClose3_2Port7.setId("DCNormalClose3_2Port7Id");
		
	var DCNormalClose3_2Port8 = DCNormalClose3_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(15,90));
		DCNormalClose3_2Port8.setName("DCNormalClose3_2Port8Name");
		DCNormalClose3_2Port8.setId("DCNormalClose3_2Port8Id");	
		
	canvas.add( DCNormalClose3_2, x1,y1); 
	return DCNormalClose3_2;
}


var Labeld3_2DCNormalCloseFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 100, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 100, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 15 100 l 0 -39 l -3 7 l 3 -7 l 3 7").attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 50 100 l 0 -39").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 40 100 l 0 -10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 60 100 l 0 -10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 58 50 l 0 10 l 42 40 l -8 -3 l 8 3 l -4 -9").attr({
			"stroke-width" : 1
		});
		
		
		this.canvas.paper.text( 75, 50, "A").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 75, 110, "P").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 92, 110, "R").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//3/2 Directional Control Valve Normally open
function DCNormalOpen3_2(canvas,x1,y1){
	var DCNormalOpen3_2 = new LabeldDCNormalOpen3_2Figure({width:100,height:100});
	DCNormalOpen3_2.setId("DCNormalClose3_2");
	DCNormalOpen3_2.setResizeable(false);
	
	canvas.add( DCNormalOpen3_2, x1,y1); 
	return DCNormalOpen3_2;
}


var LabeldDCNormalOpen3_2Figure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 100, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 100, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 60 100 l 0 -39 l -3 7 l 3 -7 l 3 7 l -3 -7 l 0 -10").attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 50 100 l 0 -39").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 10 100 l 0 -10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 90 100 l 0 -10 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 0 60 l 50 40 l -8 -3 l 8 3 l -4 -9").attr({
			"stroke-width" : 1
		});
		
		
		this.canvas.paper.text( 50, 50, "A").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 50, 110, "P").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//3/3  D. C. Valve  - zero position all ports closed
function DCPortClose3_3(canvas,x1,y1){
	var DCPortClose3_3 = new LabeldDCPortClose3_3Figure({width:120,height:100});
	DCPortClose3_3.setId("DCPortClose3_3");
	DCPortClose3_3.setResizeable(false);
	
	canvas.add( DCPortClose3_3, x1,y1); 
	return DCPortClose3_3;
}


var LabeldDCPortClose3_3Figure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 120, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 120, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 10 100 l 0 -39 l -3 7 l 3 -7 l 3 7").attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 40 100 l 0 -39").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 30 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 50 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 80 100 l 0 -39").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 70 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 90 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 47 52 l 0 15 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 80 60 l 39 40 l -8 -3 l 8 3 l -4 -9").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.text( 80, 50, "A").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 80, 110, "R").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 40, 110, "P").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//4/2 DC valve
function DCValve4_2(canvas,x1,y1){
	var DCValve4_2 = new LabeldDCValve4_2Figure({width:100,height:100});
	DCValve4_2.setId("DCValve4_2");
	DCValve4_2.setResizeable(false);
	
	canvas.add( DCValve4_2, x1,y1); 
	return DCValve4_2;
}

var LabeldDCValve4_2Figure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 100, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 100, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 60 100 l 0 -39 l -3 7 l 3 -7 l 3 7 l -3 -7 l 0 -10").attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 50 100 l 0 -40").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 90 60 l 0 39 l -3 -8 l 3 8 l 3 -8 l -3 8 l 0 10").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 0 60 l 49 40 l -8 -3 l 8 3 l -4 -9").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 0 100 l 50 -40 l -3 7 l 3 -7 l -8 3").attr({
			"stroke-width" : 1
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//4/3 DC valve - zero position all ports closed
function DCZeroPosePortClose4_3(canvas,x1,y1){
	var DCZeroPosePortClose4_3 = new LabeldDCZeroPosePortClose4_3Figure({width:120,height:100});
	DCZeroPosePortClose4_3.setId("DCZeroPosePortClose4_3");
	DCZeroPosePortClose4_3.setResizeable(false);
	
	canvas.add( DCZeroPosePortClose4_3, x1,y1); 
	return DCZeroPosePortClose4_3;
}

var LabeldDCZeroPosePortClose4_3Figure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 120, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 120, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 90 100 l 0 -39 l -3 7 l 3 -7 l 3 7 l -3 -7").attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 40 100 l 0 -40").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 80 100 l 0 -40").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 110 60 l 0 39 l -3 -8 l 3 8 l 3 -8 l -3 8").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 0 60 l 39 40 l -8 -3 l 8 3 l -4 -9").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 0 100 l 40 -40 l -3 7 l 3 -7 l -8 3").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 50 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 50 52 l 0 15 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 70 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 70 52 l 0 15 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.text( 45, 40, "A").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 70, 40, "B").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 75, 110, "R").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 45, 110, "P").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//5/2 D. C. Valve
function DCValve5_2(canvas,x1,y1){
	var DCValve5_2 = new LabeldDCValve5_2Figure({width:120,height:100});
	DCValve5_2.setId("DCValve5_2");
	DCValve5_2.setResizeable(false);
	
	var DCValve5_2Port1 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-4,73));
	DCValve5_2Port1.setName("DCValve5_2Port1Name");
	DCValve5_2Port1.setId("DCValve5_2Port1Id");
	
	var DCValve5_2Port2 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(9,50));
	DCValve5_2Port2.setName("DCValve5_2Port2Name");
	DCValve5_2Port2.setId("DCValve5_2Port2Id");
	
	var DCValve5_2Port3 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(38,50));
	DCValve5_2Port3.setName("DCValve5_2Port3Name");
	DCValve5_2Port3.setId("DCValve5_2Port3Id");
	
	var DCValve5_2Port4 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(63,50));
	DCValve5_2Port4.setName("DCValve5_2Port4Name");
	DCValve5_2Port4.setId("DCValve5_2Port4Id");
	
	var DCValve5_2Port5 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(90,50));
	DCValve5_2Port5.setName("DCValve5_2Port5Name");
	DCValve5_2Port5.setId("DCValve5_2Port5Id");	
	
	var DCValve5_2Port6 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(104,73));
	DCValve5_2Port6.setName("DCValve5_2Port6Name");
	DCValve5_2Port6.setId("DCValve5_2Port6Id");
	
	var DCValve5_2Port7 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(88,97));
	DCValve5_2Port7.setName("DCValve5_2Port7Name");
	DCValve5_2Port7.setId("DCValve5_2Port7Id");
	
	var DCValve5_2Port8 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(75,97));
	DCValve5_2Port8.setName("DCValve5_2Port8Name");
	DCValve5_2Port8.setId("DCValve5_2Port8Id");
	
	var DCValve5_2Port9 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(62,97));
	DCValve5_2Port9.setName("DCValve5_2Port9Name");
	DCValve5_2Port9.setId("DCValve5_2Port9Id");
	
	var DCValve5_2Port10 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(37,97));
	DCValve5_2Port10.setName("DCValve5_2Port10Name");
	DCValve5_2Port10.setId("DCValve5_2Port10Id");
	
	var DCValve5_2Port11 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(24,97));
	DCValve5_2Port11.setName("DCValve5_2Port11Name");
	DCValve5_2Port11.setId("DCValve5_2Port11Id");
	
	var DCValve5_2Port12 = DCValve5_2.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(12,97));
	DCValve5_2Port12.setName("DCValve5_2Port12Name");
	DCValve5_2Port12.setId("DCValve5_2Port12Id");	
	
	canvas.add( DCValve5_2, x1,y1); 
	return DCValve5_2;
}

var LabeldDCValve5_2Figure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
		this.canvas.paper.setStart();

		this.canvas.paper.rect(0, 0, 120, 100).attr({
			"stroke-width" : 0
		});

		this.canvas.paper.rect(0, 60, 120, 40).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 60 100 l 0 -40").attr({
			"stroke-width" : 1
		});
		
//		Left down arrow
		this.canvas.paper.path("M 45 50 l 0 10 l 0 39 l -3 -8 l 3 8 l 3 -8 l -3 8").attr({
			"stroke-width" : 1
		});
		
//		Left UP arrow
		this.canvas.paper.path("M 30 110 l 0 -10 l -20 -40 l -1 7 l 1 -7 l 7 5").attr({
			"stroke-width" : 1
		});
		
//		Right down arrow
		this.canvas.paper.path("M 75 60 l 0 39 l -3 -8 l 3 8 l 3 -8 l -3 8").attr({
			"stroke-width" : 1
		});
		
//		Right UP arrow
		this.canvas.paper.path("M 90 100 l 20 -40 l 1 7 l -1 -7 l -6 4").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 15 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 105 100 l 0 -7 l -5 0 l 10 0").attr({
			"stroke-width" : 1
		});
		
		return this.canvas.paper.setFinish();
	},	
})