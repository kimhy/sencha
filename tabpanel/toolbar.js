// 2013.06.22 : toolbar study
Ext.application({
	requires : ['Ext.Panel','Ext.Toolbar'],
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			items : [{
				xtype : 'toolbar',
				docked : 'top',
				title : 'My Toolbar',
				items : [{
						xtype : 'button',
						ui : 'decline-round',
						text : 'decline-round'
					},{
						xtype : 'spacer'
					},{
						xtype : 'button',
						ui : 'decline-small',
						text : 'decline-small'
					}
				]	// end of items
			}]	// end of items
		});
	}
});