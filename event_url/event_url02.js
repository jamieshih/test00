/*v20170321*/
var deviceAgent = navigator.userAgent.toLowerCase();
var agentID = deviceAgent.match(/(iphone|ipod|ipad|android|macintosh)/);
var pidAry_Event = [];
var pidAry_pro = [];
var pid_Event_site = [];
var jsonData;
var pidAry_assist = [1234567,]; 
var pidAry = [
//--1--//			  
4840994,
4193630,
4185835,


//--2--//	
4840744,
4955111,
3505292,
5074851,
4939402,
4710222,



//--3--//	
'162147-e',
4715861,	
4340201,	
4811080,	
4144726,	
4776252,	


//--4--//	
4531634,
3721953,
4934934,
4648704,
4098817,
4212725,



//--5--//	
5042818,
5051641,
4946602,
4543926,
5050038,
4976435,



//--6--//	
4870082,	
4802873,	
4825838,	
4860992,	
'161698-e',
'162322-e',

];
var Period_desc=['','','','',''];
var _newurl = [
//--1--//	
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=152492&capWebid=154509',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=72671&capWebid=161877',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=119362&capWebid=120363',


//--2--//	
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=119422&capWebid=120210',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=152492&capWebid=154508',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=60578&capWebid=158517',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=142076&capWebid=142925',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=155762&capWebid=156146',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=143612&capWebid=146241',


//--3--//	
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=57889&capWebid=162147',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123195&capWebid=161622',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123195&capWebid=137092',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=127623&capWebid=127784',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=72671&capWebid=161877',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=57889&capWebid=162150',

//--4--//
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=63238&capWebid=162352',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123195&capWebid=160457',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=57889&capWebid=126722',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=53659&capWebid=145577',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=125672&capWebid=161987',
'http://ecshop.payeasy.com.tw/ECShop/Product/ProductDetail/4163638?ppcNum=65730&capWebid=68127',

//--5--//
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=119362&capWebid=120660',
'http://shopping.payeasy.com.tw/ECatalog/cms/mainAction.do?ppcNum=58459',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=137502&capWebid=138478',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123747&capWebid=124398',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=63344&capWebid=161538',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=118564&capWebid=140729',


//--6--//
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=121227&capWebid=154595',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=54988&capWebid=56530',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=54988&capWebid=161482',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=121227&capWebid=152935',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=92902&capWebid=161698',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=92902&capWebid=162322',


];
var _newurl_M = [
//--1--//	
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=152492&capWebid=154509',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=72671&capWebid=161877',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=119362&capWebid=120363',


//--2--//	
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=119422&capWebid=120210',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=152492&capWebid=154508',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=60578&capWebid=158517',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=142076&capWebid=142925',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=155762&capWebid=156146',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=143612&capWebid=146241',


//--3--//	
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=57889&capWebid=162147',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123195&capWebid=161622',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123195&capWebid=137092',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=127623&capWebid=127784',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=72671&capWebid=161877',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=57889&capWebid=162150',

//--4--//
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=63238&capWebid=162352',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123195&capWebid=160457',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=57889&capWebid=126722',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=53659&capWebid=145577',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=125672&capWebid=161987',
'http://ecshop.payeasy.com.tw/ECShop/Product/ProductDetail/4163638?ppcNum=65730&capWebid=68127',

//--5--//
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=119362&capWebid=120660',
'http://shopping.payeasy.com.tw/ECatalog/cms/mainAction.do?ppcNum=58459',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=137502&capWebid=138478',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=123747&capWebid=124398',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=63344&capWebid=161538',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=118564&capWebid=140729',


//--6--//
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=121227&capWebid=154595',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=54988&capWebid=56530',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=54988&capWebid=161482',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=121227&capWebid=152935',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=92902&capWebid=161698',
'http://shopping.payeasy.com.tw/ECatalog/cms/subAction.do?ppcNum=92902&capWebid=162322',
];
//
var Url_Parameter='';
//
var productsResult = new Array();
$(function () {
	//
   do_item();
	//
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-21769753-4', 'auto');
    ga('send', 'pageview');
});
//
function do_item() {
    for (j = 0; j < pidAry.length; j++) {
        if (pidAry[j].toString().indexOf("-e") > 0) {
            pidAry_Event.push(pidAry[j].toString().replace("-e", ""))
            pid_Event_site.push(j)
        } else {
            pidAry_pro.push(pidAry[j].toString());
        }
    }
    //

    var assistProducts = new Array();
    var Event = new Array();
    function _getProduct() {
        var d = $.Deferred();
        var jsonurl = "https://member.payeasy.com.tw/cart/rest/GetActivityProducts?pidnum=" + pidAry_pro.join("&pidnum=") + "&callback=?";
        $.ajax({
            url: jsonurl,
            jsonp: "callback",
            dataType: "jsonp",
            cache: false,
            success: function (jsonData) {
				//
                var idx = 0;
                for (i = 0; i < jsonData.items[0].cartDetails.length ; i++) {
                    var item = jsonData.items[0].cartDetails;
					var _WelfareOnlyIconType =jsonData.items[0].cartDetails[i].welfareOnlyIconType;
					var _welfareOnlyPrice =jsonData.items[0].cartDetails[i].welfareOnlyPrice;	
                    var _Product_output = '<li class="item item_' + item[i].pidNum + '" data-num="' + item[i].pidNum + '" data-pidCoup="'+item[i].pidCoupRebate+'">'
                                        + '<a target="_blank" href="' + item[i].pidUrl + '">'
                                        + '<p class="ProductImg">'
										<!--+'<b class="BestMark">推薦'+'</b>'-->
                                        + '<img onerror="this.src=\'https://www.payeasy.com.tw/HappyS/notExist.jpg\'" alt="' + item[i].pidName + '" src="' + item[i].pidPicPath1 + '">'
                                        + '</p>'
										+'<div class="promotionBlock"><div class="activity"></div></div>'
                                        + '<p class="ProductDesc">' + item[i].pidPromoDesc + '</p>'
                                        + '<p class="ProductName">' + item[i].pidName + '</p>'
                                        + '<p class="ProducPrice"><i><em><span>' + item[i].proMvalue + '</span></em><strong class="price_txt"></strong><label class="prePrice">NT$<span>' +_welfareOnlyPrice+ '</span></label></i></p>'
                                        + '</a>'
                                        + '</li>';
                    $(_Product_output).appendTo(".pro_temp");
					//Show_tag_wfe 20160510
					var _pidNum = '[data-num="' + jsonData.items[0].cartDetails[i].pidNum + '"]';
					if(_WelfareOnlyIconType ==1){//EF
						$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe checked"></span>');
					}
					if(_WelfareOnlyIconType ==2){//EC
						if( (_welfareOnlyPrice !='WelfareOnly') && (_welfareOnlyPrice !='VipOnly') ){
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">福利會員<br>登入再降</span></span>');
						}
						if(_welfareOnlyPrice =='WelfareOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">福利會員<br>登入再降</span></span>');
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限福利會員購買").show().siblings(".prePrice").remove();						
						}
						if(_welfareOnlyPrice =='VipOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">指定企業<br>登入再降</span></span>');
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限指定企業購買").show().siblings(".prePrice").remove();						
							//$(".pro_temp").find(_pidNum).find(".ProducPrice .prePrice span").html( String(item[i].pidSvalue).replace(/./g, 'X')  )
						}
					}
					//
					if(_WelfareOnlyIconType ==0){
						if(_welfareOnlyPrice =='WelfareOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限福利會員購買").show().siblings(".prePrice").remove();						
						}
						if(_welfareOnlyPrice =='VipOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限指定企業購買").show().siblings(".prePrice").remove();						
						}
					}
					//
                }
                d.resolve();
            }
        });
        return d;
    };

    function _getEvent() {
        var d = $.Deferred();
		//
       if(pidAry_Event!=''){
			
		var jsonurl_event1 = "https://member.payeasy.com.tw/cart/REST/GetActivityInfo?capWebid=" + pidAry_Event.join("&capWebid=") + "&callback=?";	
        $.ajax({
            url: jsonurl_event1,
            jsonp: "callback",
            dataType: "jsonp",
            cache: false,
            success: function (jsonurl_event) {
                for (j = 0; j < jsonurl_event.items.length; j++) {
                    var _Event_output = '<li class="item item_' + jsonurl_event.items[j].ppcNum + '-e" data-num="' + jsonurl_event.items[j].ppcNum + '-e">'
                                       + '<a target="_blank" href="' + jsonurl_event.items[j].actUrl + '">'
                                       + '<p class="ProductImg">'
                                       + '<img onerror="this.src=\'https://www.payeasy.com.tw/HappyS/notExist.jpg\'" alt="' + jsonurl_event.items[j].actName + '" src="' + jsonurl_event.items[j].actPicPath + '">'
                                       + '</p>'
                                       + '<div class="ProductDesc">' + jsonurl_event.items[j].actCode + '</div>'
                                       + '<p class="ProductName">' + jsonurl_event.items[j].actName + '</p>'
                                       + '<p class="Event_Condition">' + jsonurl_event.items[j].actDesc + '</p>'
                                       + '</a>'
                                       + '</li>';
                    $(_Event_output).appendTo(".pro_temp");
                }
                d.resolve();
            }
        });
        return d;
    }
	}
    //	
    function _getProduct_assist() {
        var d = $.Deferred();
        var jsonurl = "https://member.payeasy.com.tw/cart/rest/GetActivityProducts?pidnum=" + pidAry_assist.join("&pidnum=") + "&callback=?";
        $.ajax({
            url: jsonurl,
            jsonp: "callback",
            dataType: "jsonp",
            cache: false,
            success: function (jsonData_assist) {
                for (i = 0; i < jsonData_assist.items[0].cartDetails.length; i++) {
					var item = jsonData_assist.items[0].cartDetails;
					var _WelfareOnlyIconType =jsonData_assist.items[0].cartDetails[i].welfareOnlyIconType;
					var _welfareOnlyPrice =jsonData_assist.items[0].cartDetails[i].welfareOnlyPrice;
					
                    var _Product_output_assist = '<li class="item item_assist' + item[i].pidNum + '" data-num="' + item[i].pidNum + '" data-pidCoup="'+ item[i].pidCoupRebate+'">'
                                        + '<a target="_blank" href="' + item[i].pidUrl + '">'
                                        + '<p class="ProductImg">'
									<!--+'<b class="BestMark">推薦'+'</b>'-->
                                        + '<img onerror="this.src=\'https://www.payeasy.com.tw/HappyS/notExist.jpg\'" alt="' + item[i].pidName + '" src="' + item[i].pidPicPath1 + '">'
                                        + '</p>'
										+'<div class="promotionBlock"><div class="activity"></div></div>'
                                        + '<p class="ProductDesc">' + item[i].pidPromoDesc + '</p>'
                                        + '<p class="ProductName">' +item[i].pidName + '</p>'
                                   		+ '<p class="ProducPrice"><i><em>NT$<span>' + item[i].proMvalue + '</span></em><strong class="price_txt">限福利會員購買</strong><label class="prePrice">NT$<span>' +_welfareOnlyPrice+ '</span></label></i></p>'
                                        + '</a>'
                                        + '</li>';
										
					 $(_Product_output_assist).appendTo(".pro_temp");
					//Show_tag_wfe 20160510
					var _pidNum = '[data-num="' + jsonData_assist.items[0].cartDetails[i].pidNum + '"]';
					if(_WelfareOnlyIconType ==1){//EF
						$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe checked"><span class="brief">福利會員<br>登入再降</span></span>');
					}
					if(_WelfareOnlyIconType ==2){//EC
						if( (_welfareOnlyPrice !='WelfareOnly') && (_welfareOnlyPrice !='VipOnly') ){
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">福利會員<br>登入再降</span></span>');
						}
						if(_welfareOnlyPrice =='WelfareOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">福利會員<br>登入再降</span></span>');
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限福利會員購買").show().siblings(".prePrice").remove();
						}
						if(_welfareOnlyPrice =='VipOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">指定企業<br>登入再降</span></span>');
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限指定企業購買").show().siblings(".prePrice").remove();
						}
					}
					//
					if(_WelfareOnlyIconType ==0){
						if(_welfareOnlyPrice =='WelfareOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">福利會員<br>登入再降</span></span>');
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限福利會員購買").show().siblings(".prePrice").remove();						
						}
						if(_welfareOnlyPrice =='VipOnly'){// 
							$(".pro_temp").find(_pidNum).find(".ProducPrice").append('<span class="tag_wfe"><span class="brief">指定企業<br>登入再降</span></span>');
							$(".pro_temp").find(_pidNum).find(".ProducPrice .price_txt").text("限指定企業購買").show().siblings(".prePrice").remove();						
						}
					}
					//
					//
                }
                d.resolve(null);
            }
        });
        return d;
    };

    var getproduct = _getProduct();
    var getProduct_assist = _getProduct_assist();
    var getEvent = _getEvent();

    $.when(getproduct, getProduct_assist, getEvent).done(function (getproduct, getProduct_assist, getEvent) {
        var assist = 0;
        for (k = 0; k < pidAry.length; k++) {
			if (Period_desc != '') {	
				if(Period_desc[k]){
					$(".pro_temp li").eq(k).find(".ProductDesc").html(Period_desc[k]);	
				}
			}
            if ($(".pro_temp").find("[data-num='" + pidAry[k] + "']").length) {
                var _new_li = $(".pro_temp").find("[data-num='" + pidAry[k] + "']").clone();
                var _item_class = "item_" + k;
                $(_new_li).addClass(_item_class);
                $("#ProductList").append(_new_li);
				//
				
				//
                if (agentID) {
					if (_newurl_M[k] != '') {
						$(_new_li).find("a").attr("href", _newurl_M[k]);
					}
				}else{
					if (_newurl[k] != '') {
                    	$(_new_li).find("a").attr("href", _newurl[k]);
                	}
				}
            } else {
                var _new_li_assist = $(".pro_temp").find("[data-num='" + pidAry_assist[assist] + "']").clone();
                var _item_assist_class = "item_" + k;
                $(_new_li_assist).addClass(_item_assist_class);
                $("#ProductList").append(_new_li_assist);
                assist++;
            }
			
        }
		//
		$("#ProductList li").each(function() {
			var _datapidCoup = $(this).attr("data-pidCoup");
			if(_datapidCoup=="0"){
				$(this).find(".activity").html("<img src='//www.payeasy.com.tw/pay_event/event_10/2016vip/images/00_220x22.jpg'/>")	
			}
			if(_datapidCoup=="1"){
				$(this).find(".activity").html("<img src='//www.payeasy.com.tw/pay_event/event_10/2016vip/images/79_220x22.jpg'/>")	
			}
			if(_datapidCoup=="2"){
				$(this).find(".activity").html("<img src='//www.payeasy.com.tw/pay_event/event_10/2016vip/images/88_220x22.jpg'/>")	
			}
		});
		//
        $(".pro_temp").hide();
		$("#ProductList").show();
		//
		if (Url_Parameter != '') {
			for (k = 0; k < pidAry.length; k++) {
				var Initial_url =$("#ProductList li").eq(k).find("a").attr("href");
				if(Initial_url.indexOf("?") >=0){
					$("#ProductList li").eq(k).find("a").attr("href", Initial_url+'&'+Url_Parameter);
				}else{
					$("#ProductList li").eq(k).find("a").attr("href", Initial_url+'?'+Url_Parameter);
				}			
			}
		}
	//
		$( ".goAnchor" ).on( "click", function() {
			var _set_goAnchor=$(this).attr("data-go");
			if( $("#ProductList li").find("[data-num='" + _set_goAnchor + "']") ){
				$("html,body").animate({ scrollTop: ( $("#ProductList li[data-num='"+_set_goAnchor+"']").offset().top ) - 15 }, 500);
			}
		});	
	//		
    });  
};