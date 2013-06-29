// 2013.06.22 : toolbar study
Ext.application({
	requires : ['Ext.Panel','Ext.Toolbar'],
	launch : function(){
		/*var tabPanel = new Ext.create('Ext.TabPanel',{
			fullscreen : true,
			tabBar : {
				docked : 'bottom',
				layout : {
					pack : 'center'
				}
			},
			items : [{
					iconCls : 'info',
					title : 'About'
				},{
					iconCls : 'favorites',
					title : 'Favorites',
					badgeText : '2'
				}
			]
		});*/
		
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
			}],
			dockedItems : [{
				xtype : 'tabpanel',
				docked : 'bottom',
				tabBar : {
					layout : {
						pack : 'center'
					}
				},
				items : [{
						iconCls : 'info',
						title : 'About'
					},{
						iconCls : 'favorites',
						title : 'Favorites',
						badgeText : '2'
					}
				]
			}]// end of items
		});
		// rootPanel.add(tabPanel);
	}
});