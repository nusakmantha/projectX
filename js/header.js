$(document).ready(function(){
	
	var toggle = $(".tool-toggle");
	var right = $("nav.top ul.right");
	var isToggle = true;
	
	toggle.click(function(){
		if(isToggle){
			right.addClass("active");
			toggle.addClass("active");
			isToggle = false;
			
		}else{
			right.removeClass("active");
			toggle.removeClass("active");
			isToggle = true;
		}
	});
	
});


$(document).ready(function(){
	
	var toggle = $(".info-toggle");
	var info = $("nav.top > ul.right > li > ul.user-info");
	var infoParent = $("nav.top > ul.right > li.user");
	var isToggle = true;
	
	infoParent.click(function(){
		if(isToggle){
			info.addClass("active");
			infoParent.addClass("active");
			toggle.html('<i class="fas fa-angle-up"></i>');
			isToggle = false;
			
		}else{
			info.removeClass("active");
			infoParent.removeClass("active");
			toggle.html('<i class="fas fa-angle-down"></i>');
			isToggle = true;
		}
	});
	
	
});


$(document).ready(function(){
	
	var toggle = $("nav.top > ul > li.aside-toggle");
	var aside = $("nav.side");
	var isToggle = true;
	
	toggle.click(function(){
		if(isToggle){
			aside.addClass("active");
			toggle.addClass("active");
			toggle.html('<i class="fas fa-outdent"></i>');
			isToggle = false;
			
		}else{
			aside.removeClass("active");
			toggle.removeClass("active");
			toggle.html('<i class="fas fa-indent"></i>');
			isToggle = true;
		}
	});
});