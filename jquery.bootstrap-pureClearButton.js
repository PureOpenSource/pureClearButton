/**
 * Input의 Text, Password Type의 Clear 버튼을 추가한다.
 * 
 * Bootstrap + JQuery (+ JQuery validation)
 * 
 * Ex 1) input attribute에 "data-pure-clear-button"을 추가한다. (data-pure-clear-button="true" or data-pure-clear-button) 
 * Ex 2) input class에 "has-pure-clear-button"을 추가한다. (추천하지 않음.)
 */

(function($) {
	/**
	 * Input element에 Clear 버튼을 생성한다.
	 * @param element input element object
	 */
	var makeClearButton = function(element){
		if(!element){
			return;
		}
		if(!element.closest(".form-group").hasClass("has-feedback")){
			element.closest(".form-group").addClass("has-feedback")
		}
		
		// Clear Button을 input element 뒤로 생성한다.
		element.css({"padding-right": "30px"});
		element.attr("data-pure-clear-button", "true");
		
		$clearButton = $('<span></span>')
			.attr("aria-hidden", "true")
			.addClass("glyphicon " + defaultSettings.icon + " form-control-feedback pure-clear-button-event")
			.css({"cursor": "pointer", "pointer-events": "auto", "right": "0px"});
		element.after($clearButton);
	}
	/**
	 * Input element에 Clear 버튼을 제거한다.
	 * @param element input element object
	 */
	var removeClearButton = function(element){
		if(!element){
			return;
		}
		element.attr("data-pure-clear-button", "false");
		
		// Clear Button을 찾아서 제거한다.
		element.parent().find(".pure-clear-button-event").remove();
	}
	
	/**
	 * Clear Button을 보이기/숨기기 처리
	 * @param option option string(show, hide)
	 */
	$.fn.pureClearButton = function(option){
		// 값이 없거나, show 일때 보이기
		if(!option || option === 'show'){
			makeClearButton($(this));			
		}
		// 값이 있을때 hide 이면 숨기기
		else if(option === 'hide'){
			removeClearButton($(this));
		}
		
		return $(this);
	}
	
	// 기본 설정 값
	var defaultSettings = {
		// jquery-validation을 사용하였을 경우 clear이후 valid 정보 제거 여부
		clearValidation: true,
		// Clear Button의 icon with bootsreap
		icon: 'glyphicon-remove-sign',
	}
	
	/**
	 * 설정 변경
	 * @param settings Pure Clear Button Setting
	 */
	$.pureClearButton = function(settings){
		$.extend(defaultSettings, settings)
	}
	
	/**
	 * document onload
	 */
	$(document).ready(function(){
		// ".has-text-clear" Class를 지정한 Input Text에 내용 삭제 버튼을 추가한다.
		$.each($("input:text, input:password, " +
				"input[type='email'], input[type='url'], input[type='search'], input[type='tel'], input[type='number'], " +
				"input[type='datetime']"), //, input[type='datetime-local'], input[type='date'], input[type='month'], input[type='time'], input[type='week']
			function(index, element){
			var $element = $(element);
			
			if(($element.data("pure-clear-button") == undefined || $element.data("pure-clear-button") === 'false') && !$element.hasClass("has-pure-clear-button")){
				return;
			} 
			makeClearButton($element);
		});
		
		// Input Text의 [x] 클릭 시 내용 삭제
		//$(document).on('click', ".pure-clear-button-event", function () {
		$(document).on('click', ".pure-clear-button-event", function () {
			var $input = $(this).closest(".form-group").find("input");
			
			// input value 제거, 포커스 이동
			$input.val("").focus();
			
			if(defaultSettings.clearValidation){
				// validation tooltip, class 제거
				$input.removeData("title").tooltip("destroy");
				$input.closest('.form-group').removeClass('has-error has-success');
			}
		});	
	});
})($);

	