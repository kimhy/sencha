// 필요한 객체를 로딩
Ext.require('Ext.MessageBox');

// sencha 가장 기본적인 application
Ext.application({
	// requires : ['Ext.MessageBox'];	// Ext.reqquire('Ext.MessageBox'); 대신 사용
	launch : function(){
		var button = Ext.create('Ext.Button',{
			text : '버튼'
			,handler : function(){
				Ext.Msg.alert('메세지','옵션');
			}
		});
		var panel = new Ext.create('Ext.Panel', {
			fullscreen : true
			,html : 'sencha test'
			,item : [button]
		});
		Ext.Viewport.add(panel);
	}
});