Ext.application({
	requires : ['Ext.form.Panel','Ext.MessageBox','Ext.data.Store','Ext.field.Text','Ext.field.DatePicker','Ext.field.Spinner','Ext.field.Select','Ext.field.Email','Ext.field.Url','Ext.field.Slider','Ext.form.FieldSet'],
	launch : function(){
		var date = new Date();
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
		
		Ext.define('genderModel',{
			extend : 'Ext.data.Model',
			config : {
				fields : [{name : 'indexNumber', type : 'string'}
						 ,{name : 'title', type : 'string'}]
			}
		});
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
					indexNumber : '1', title : '남'
				},{
					indexNumber : '2', title : '여'
				}
			]
		});
		
		var formPanel = new Ext.create('Ext.form.FormPanel',{
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left',
					labelWidth:150
				},
				items : [{
						xtype : 'textfield',
						name : 'name',
						id : 'name',
						label : '이름',
						clearIcon : true
					},{
						xtype : 'datepickerfield',
						picker : {								// 선택하는 창 control
							useTitles : true,					// 선택하는 창의 상단 제목 사용여부
							dayText : '일',						// 선택하는 창의 일 부분 제목
							monthText : '월',
							yearText : '년',
							slotOrder: ['year', 'month', 'day']	// 선택하는 창의 순서 정의
						},
						dateFormat : 'Y년 m월 d일',
						name : 'birthday',
						label : '생년월일',
						value : date
					},{
						xtype : 'checkboxfield',
						name : 'mili',
						label : '군필여부',
						required : false,
						value : 'Y',
						checked : true
					},{
						xtype : 'spinnerfield',
						name : 'career',
						label : '경력',
						minValue : 0,
						maxVlue : 100,
						stepValue : 1,
						value : 10
					},{
						layout : {
							type : 'hbox'
						},
						defaults : {
							required : true,
							labelAlign : 'left',
							labelWidth:150
						},
						width : '100%',
						items : [{
								xtype : 'selectfield',
								name : 'gender',
								label : '성별',
								width : '50%',
								// options : [{text:'남',value:'1'},{text:'여',value:'2'}],
								displayField : 'title',
								valueField : 'indexNumber',
								store : genderStore 
							},{
								xtype : 'numberfield',
								name : 'age',
								label : '나이',
								width : '50%',
								value : 25
							}
						]
					},{
						xtype : 'emailfield',
						name : 'email',
						label : '이메일',
						placeHolder : 'test@test.com',
						clearIcon : false	// x 아이콘 : default - true
					},{
						xtype : 'urlfield',
						name : 'url',
						label : '홈페이지',
						placeHolder : 'http://www.test.com'
					},{
						layout : {type : 'hbox'},
						defaults : {
							required : true,
							labelAlign : 'left',
							labelWidth:150
						},
						items : [{
								xtype : 'sliderfield',
								label : '희망연봉',
								name : 'pay',
								width : '80%',
								value : 5000,
								minValue : 1000,
								maxValue : 10000,
								listeners : {
									drag : function( me, sl, thumb, newValue, oldValue, eOpts ){
										formPanel.setValues({payText : newValue + "만원"});
									}
								}
							},{
								xtype : 'textfield',
								name : 'payText',
								value : '5000 만원',
								readOnly : true,
								clearIcon : false
							}
						]
					},{
						layout : {
							type : 'hbox',
							pack : 'center'
						},
						items : [
							{
								xtype : 'button',
								width : 100,
								align : 'center',
								text : '등록',
								handler : function(){
									console.log(Ext.ComponentQuery.query('#name')[0].getValue()); 
									var loadValues = formPanel.getValues();
									var name = loadValues.name;
									var birthday = loadValues.birthday;
									var mili = loadValues.mili;
									var career = loadValues.career;
									var gender = loadValues.gender;
									var age = loadValues.age;
									
									console.log(loadValues);
								}
							},{xtype : 'spacer', width : 10},
							{
								xtype : 'button',
								width : 100,
								align : 'center',
								text : '취소',
								handler : function(){
									formPanel.reset();
								}
							}
						]
					}
				]	// end of items < fieldset < FormPanel
			}]	// end of items < FormPanel
		});	// end of formPanel
	}
});