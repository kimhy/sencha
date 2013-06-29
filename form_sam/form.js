Ext.application({
	requires:[
	  	    'Ext.form.Panel',
	  	    'Ext.form.FieldSet',
	  	    'Ext.field.DatePicker',
	  	    'Ext.field.Spinner',
	  	    'Ext.field.Select',
	  	    'Ext.field.Url',
	  	    'Ext.field.Email',
	  	    'Ext.field.Slider',
	  	    'Ext.data.JsonP'
	],
	launch : function(){
		
		var date = new Date();
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월',
		                       '7월','8월','9월','10월','11월','12월'];
		Ext.define('genderModel',{
			extend : 'Ext.data.Model',
			config : {
				fields : [{
					name : 'indexNumber' , type : 'string'	// 자료형(type)은 default String
				},{
					name : 'text' , type : 'string'
				}]
			}
		});
		
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
				indexNumber : '1', text : '남'
			},{
				indexNumber : '2', text : '여'
			}]
		});
		
		var formPanel = new Ext.create('Ext.form.FormPanel',{
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					id : 'nameId',
					label : '이름',
					clearIcon : true,
					
				},{
					xtype : 'datepickerfield',
					name : 'birthday',
					id : 'birthday',
					label : '생연월일',
					value : date,
					dateFormat : 'Y/m/d',
					picker: {
						useTitles : true,
						dayText : '일',
						monthText : '월',
						yearText : '년',
						slotOrder : [ 'year','month','day']
		            }
				},{
					xtype : 'checkboxfield',
					name : 'mili',
					id : 'mili',
					label : '군필여부',
					checked : true
				},{
					xtype : 'spinnerfield',
					name : 'career',
					id : 'career',
					label : '경력',
					minValue : 0,
					maxValue : 100,
					stepValue : 1,
					value : 10
				},{
					layout : {
						type : 'hbox'
					},
					width : '100%',
					items : [{
						xtype : 'selectfield',
						name : 'gender',
						id : 'gender',
						label : '성별',
						store : genderStore
					},{
						xtype : 'numberfield',
						name : 'age',
						id:'age',
						label : '나이',
						value : 22,
						
					}]
				},{
					xtype : 'emailfield',
					name : 'email',
					id:'email',
					label : '이메일',
					placeHolder : 'test@test.com',
					clearIcon : true
				},{
					xtype : 'urlfield',
					name : 'url',
					id:'url',
					label : '홈페이지'
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					width : '100%',
					items : [{
						xtype : 'sliderfield',
						label : '희망연봉',
						name : 'pay',
						id:'pay',
						value : 2000,
						maxValue : 10000,
						minValue : 1000,
						increment : 100,
						width : '85%',
						listeners:{  //이벤트 리스너 장착
				    		 	change:function(slider, thumb, newValue, oldValue){
				    		 		Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    		 	},
				    	        drag: function(slider){
				    	        	 	console.log('drag');
				    	        	 	Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    	        },
				    	        dragend: function(slider, thumb, value){
				    	        		console.log('dragend');
				    	        		//Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    	        }
				    	 	}
					
					},{
				    	 	xtype:'textfield',
				    	 	id:'result',
				    	 	value:'2000만원',
				    	 	width : '15%',
				    	 	clearIcon : false
					}]
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '등록',
						handler : function(){
							//console.log(Ext.ComponentQuery.query('emailfield')[0]);
							var loadValues = formPanel.getValues();
							//console.log("loadValues.name : "+ loadValues.name);
							// Ext.ComponentQuery.query 는 비권장 : 길다...
							//console.log("Ext.ComponentQuery.query('textfield')[0] : "+Ext.ComponentQuery.query('textfield')[0].getValue());
                      	    //console.log("Ext.ComponentQuery.query('textfield', formPanel)[0] : "+Ext.ComponentQuery.query('textfield', formPanel)[0].getValue());                              	    
                      	    //console.log("Ext.ComponentQuery.query('#url', formPanel)[0].getValue() : "+Ext.ComponentQuery.query('#url', formPanel)[0].getValue());
							// id를 이용하여 formPanel에 입력한 값을 저장하는 방법 
                      	    var name = Ext.getCmp('nameId').getValue(); 
                      	    var birthday = Ext.getCmp('birthday').getValue(); 
                      	    var mili = Ext.getCmp('mili').getChecked(); 
                      	    var career = Ext.getCmp('career').getValue(); 
                      	    var gender = Ext.getCmp('gender').getRecord().get('text') ; 	// options를 쓰면 getRecord 사용 할 수 없음.
                      	    var age = Ext.getCmp('age').getValue(); 
                      	    var email = Ext.getCmp('email').getValue(); 
                      	    var url = Ext.getCmp('url').getValue(); 
                      	    var pay = Ext.getCmp('result').getValue(); 
                      	    
                      	    console.log('name : '+name);
                      	    console.log('birthday : '+birthday);
                      	    console.log('mili : '+mili);
                      	    console.log('career : '+career);
                      	    console.log('gender : '+gender);
                      	    console.log('age : '+age);
                      	    console.log('email : '+email);
                      	    console.log('url : '+url);
                      	    console.log('pay : '+pay);
                      	  
                      	   /* formPanel.submit({			// 같은 도메인에 있을 때...
                      	    		url:'formdata.jsp',
                      	    		method : 'POST',
                      	    		
                      	    		//params: formPanel.getValues(),	// 이거 혹은 아래...
                      	    		params : [
                      	    		          {"name":name},{"birthday":birthday},{"mili":mili},
                      	    		          {"career":career},{"gender":gender},{"age":age},
                      	    		          {"email":email},{"url":url},{"pay":pay}
                      	    		],
                      	    		
                      	    		success: function(form, response) {
                      	          alert(response["success"]);
                      	    		},
                      	    		failure: function(form, response) {
                      	          alert(response["failure"]);
                      	    		}
				   	    			
			   	    		 	});*/
							
							// 다른 도메인에 있을 때...
                      	    Ext.Viewport.mask({xtype:'loadmask',message:'loading...'});	// background disabled
	              			Ext.data.JsonP.request({
	              				url : 'http://hanbit1.cafe24.com/sencha/formdata_jsonp.jsp',
	              				callbackKey : 'callback',	// ajax에서 함수 'callback=test'를 했던 것 중' callback'에 해당하는 값을 입력하는 것.
	              											// ajax에서 test함수를 만들 던 것과 달리 test함수는 sencha가 알아서 만듦.
	              											// jsonp 사용시 사용하는 callback key 값만 설정해주면 됨.
	              				params : [name,birthday,mili,career,gender,age,email,url,pay],
	              										// formdata_jsonp.jsp에서 request.getParameter("0"); 이런 식으로 받아야함...
	              										// 따라서 보내는 순서가 중요함...
	              										// 확인은 크롬의 "요소보기 > Network"를 보면 querystring 확인 할 수 있음.
	              				success : function(result){		// 서버의 오류가 아닌 로직 오류도 여기로 옮...
	              												// 따라서 아래와 같이 리턴 받은 변수로 분기해야함.
	              					Ext.Viewport.unmask();	// background mask 풀어주는 함수
	              					if(result.success=="ok"){
	              						alert("정상처리 되었습니다.");
	              					}else if(result.failure == "fail"){
	              						alert("다시 입력해주세요.");
	              					}
	              				},
	              				failure : function(result){		// local 통신관 다르게, 서버의 오류(통신오류 혹은 기타에러 즉 500에러)일 때만 여기로 옮...
	              					Ext.Viewport.unmask();
	              					alert("failure : "+result);
	              				}
	              				
	              			});
                      	    
						}
					},{
						xtype : 'spacer',
						width : 10
					},{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function(){
							formPanel.reset();
						}
					}]
				}]//end fieldset items
			}]//end formPanel items
		});//end formPanel
	}//end launch function
});




