// 2013.06.22 : toolbar study
Ext.application({
	requires : ['Ext.TabPanel'],
	launch : function(){
		var tabPanel = new Ext.create('Ext.TabPanel',{
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
		});
	}
});