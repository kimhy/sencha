Ext.application({
	requires : ['Ext.Panel','Ext.MessageBox'],
	launch : function(){
		var panel = new Ext.create('Ext.Panel',{
			layout : {
				type : 'vbox'
			},
			items : [{
					xtype : 'button',
					text : '메세지창',
					flex : 3,
					listeners : {
						tap : function(){
							Ext.Msg.alert('메세지','메새지 출력창');
						}
					}
				},{xtype:'spacer', flex : 1},{
					xtype : 'button',
					text : '프롬프트창',
					flex : 3,
					listeners : {
						tap : function(){
							Ext.Msg.prompt('입력','이름을 입력하세요.',function(btn, text){
								console.log(btn + ":" + text);	// 뒤 function은 입력 작업 후 callback함수
							});
						}
					}
				},{xtype:'spacer', flex : 1},{
					xtype : 'button',
					text : '확인창',
					flex : 3,
					listeners : {
						tap : function(){
							Ext.Msg.confirm('확인','작업을 계속 하시겠습니까?', function(btn){
								console.log(btn);
							});
						}
					}
				}
			]	// end of items
		});
		Ext.Viewport.add(panel);
	}
});