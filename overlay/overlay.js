// Ext.require('Ext.Panel');
Ext.application({
	launch : function(){
		var overlayToolbar = new Ext.create('Ext.Toolbar',{
			docked : 'top',
			title : '의미없는 title.. 왜냐믄 아래서 set해주니깐..',
			items : [{
					xtype : 'spacer'
				},{
					xtype : 'button',
					text : '닫기',
					ui : 'decline-round',
					handler : function(btn, event){
						overlay.hide();
					}
				}
			]	// end of items > overlayToolbar
		});	// end of overlayToolbar
		
		var overlay = new Ext.create('Ext.Panel',{
			flooting : true,	// or flootingCls : 'x-flooting',
			modal : true,
			contentEl : 'overlayid',
			items : overlayToolbar,
			width : 350,
			height : 350
		});	// end of overlay
		
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			items : [{
				xtype : 'toolbar',
				docked : 'top',
				items : [{
						xtype : 'button',
						text : '버튼overlay',
						handler : function(btn, event){
							overlay.setCentered(false);
							overlayToolbar.setTitle('버튼에 위치한 Overlay');
							overlay.setHidden( true);
							overlay.showBy(btn);
						}
					},{
						xtype : 'spacer'
					},{
						xtype : 'button',
						text : '가운데 overlay',
						handler : function(btn, event){
							overlay.setCentered(true);
							overlayToolbar.setTitle('중앙에 위치한 Overlay');
							overlay.setHidden( false);
							overlay.show();
						}
				}]	// end of items < toolbar
			}]	// end of items < rootPanel
		});	// end of rootPanel
		
		Ext.Viewport.add(rootPanel);
	}	// end of lanch
});