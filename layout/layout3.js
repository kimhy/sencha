// flex - layout study
Ext.application({
	requires : ['Ext.Panel']
	,launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true
			,layout : {
				type : 'vbox'
				,align : 'stretch'
				,pack : 'center'	
			}
			,items : [{
					xtype : 'panel'	// = new Ext.Panel({});
					,style : 'background:red'
					,html : 'First'
					,flex : 1
				},{
					xtype : 'panel'	// xtype : 'panel 사용 안하면, 상위 속성 상속받음.
					,style : 'background:blue'
					,html : 'Sencond'
					,flex : 1
				},{
					xtype : 'panel'
					,style : 'background:green'
					,html : 'Third'
					,flex : 1
				},{
					flex : 1
					,layout : {
						type : 'hbox'
						,align : 'stretch'
						,pack : 'center'
					}
					,items : [{
							xtype : 'panel'	// = new Ext.Panel({});
							,style : 'background:yellow'
							,html : 'Fourth - first'
							//,flex : 1
						},{
							xtype : 'panel'
							,style : 'background:pink'
							,html : 'Fourth - sencond'
							//,flex : 1
						}
					]
				}
			]	// end of items		
		});	// end of rootPanel
	}
});