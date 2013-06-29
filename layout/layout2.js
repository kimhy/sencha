// vbox - layout study
Ext.application({
	requires : ['Ext.Panel']
	,launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true
			,layout : {
				type : 'hbox'
				,align : 'stretch'
				,pack : 'start'	
			}
			,items : [{
					xtype : 'panel'	// = new Ext.Panel({});
					,style : 'background:red'
					,html : 'First'
				},{
					xtype : 'panel'	// xtype : 'panel 사용 안하면, 상위 속성 상속받음.
					,style : 'background:blue'
					,html : 'Sencond'
				},{
					xtype : 'panel'
					,style : 'background:green'
					,html : 'Third'
				},{
					xtype : 'panel'
					,style : 'background:yellow'
					,html : 'Fourth'
				}
			]	// end of items		
		});	// end of rootPanel
	}
});