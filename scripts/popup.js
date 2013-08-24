$(document).ready(function(){
	$('#desc a').live('click',function(){
		//alert('aasdf');
		var href = e.currentTarget.href;
  		chrome.tabs.getSelected(null,function(tab) {
    	chrome.tabs.update(tab.id, {url: href});
  });
	});
});
