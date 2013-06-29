Ext.application({
	requires : ['Ext.Panel','Ext.Button','Ext.MessageBox'],
	launch : function(){
		var button1 = new Ext.create('Ext.Button',{
			text : '버튼1 비표준방식',
			handler : function(){	// click 이벤트만 처리 할 수 있음.
				Ext.Msg.alert('메세지','handler는 버튼에 특화된 구성옵션');
			}
		});
		
		var button2 = new Ext.create('Ext.Button',{
			text : '버튼2 표준방식',
			listeners : {			// 가장 일반적인 방식
				tap : function(){
					Ext.Msg.alert('메세지2','표준적인 이벤트 처리방법');
				}
			}
		});
		
		var button3 = new Ext.create('Ext.Button',{
			text : '버튼3 표준방식 - 리스너를 별도로 기술',
			ui : 'action'
		});
		button3.addListener(		// 2번과 비슷한 방식. 코딩만 다르다 할 수 있음.
			'tap',
			function(){
				Ext.Msg.alert('메세지3', '표준적인 이벤트 처리방법 : 리스너 별도');
			}
		);
		
		var button4 = new Ext.create('Ext.Button',{
			text : '버튼4표준방식 - 기타 구성 옵션',
			ui : 'confirm'
		});
		button4.addListener(	// 3번과 비슷한 방식. 옵션을 추가 할 수 있음. 그러나 잘 사용 안함.
			'tap',
			function(){
				Ext.Msg.alert('메세지4', '표준적인 이벤트 처리방법 : 기타 구성 옵션');
			},
			this,
			{
				delay : 3000,	// 3초 후 이벤트 처리
				single : true	// 이벤트를 한 번만 처리하라
			}
		);
		
		var button5 = new Ext.create('Ext.Button',{
			text : '버튼5 표준방식 - 기타 구성 옵션',
			ui : 'decline',
			listeners : {		// 2번과 비슷한 방식
				tap : {
					fn : function(){
						Ext.Msg.alert('메세지5', '표준적.브라우저 차원의 이벤트');
					}
				}
			}
		});
		
		var rootPanel = new Ext.create('Ext.Panel',{
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [button1, button2, button3, button4, button5]
		});
		Ext.Viewport.add(rootPanel);
	}
});