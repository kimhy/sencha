// 2013.06.22 : button study
Ext.application({
	requires : ['Ext.Panel','Ext.Button','Ext.MessageBox'],
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : {
				type : 'hbox',
				align : 'center',
				pack : 'center'
			},
			items : [{
					xtype : 'button',
					ui : 'decline',	// normal, decline, action, back, forward, confirm
					text : 'decline',
					handler : function(button, event){
						Ext.Msg.alert("Message", "Title", Ext.empty);
					}
				},{
					xtype : 'button',
					ui : 'decline-round',
					text : 'decline-round'
				},{
					xtype : 'button',
					ui : 'decline-small',
					text : 'decline-small'
				}
			]
		});		// end of rootPanel	
	}
});