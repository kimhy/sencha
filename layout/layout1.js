// Ext.require('Ext.Panel');
// docked - layout study
Ext.application({
	requires : ['Ext.Panel']
	,launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true
			,style : 'background:white'
			,html : 'Center'
			/* docked 사용시 적용 안됨.
			,layout : {
				type : 'vbox'
				,align : 'stretch'
				,pack : 'center'	
			}*/
			,items : [{
					xtype : 'panel'	// = new Ext.Panel({});
					,docked : 'top'
					,style : 'background:red'
					, html : 'Top'
				},{
					xtype : 'panel'	// xtype : 'panel 사용 안하면, 상위 속성 상속받음.
					,docked : 'left'
					,style : 'background:blue'
					,html : 'Left'
				},{
					xtype : 'panel'
					,docked : 'right'
					,style : 'background:green'
					,html : 'Right'
				},{
					xtype : 'panel'
					,docked : 'bottom'
					,style : 'background:yellow'
					,html : 'Bottom'
				}
			]	// end of items		
		});	// end of rootPanel
	}
});