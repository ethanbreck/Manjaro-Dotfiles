/* --------------------------- */
/* Javascript for item display */
/* --------------------------- */

$(document).ready(function() {
	

	/* --------------- */	
	/* EMBED CODE COPY */
	/* --------------- */
	
	$('a.embedLink').click(function(e){
		e.preventDefault();
		
		$('#embed-code').dialog({
			resizable: true,
			title: 'Embed This Item',
			width: 640,
			height: 100			
		});
	});

	
	$('#embed-code-copyable').focus(function(e){
		e.preventDefault();
		$(this).select();
	});
	
	$('#embed-code-select').click(function(e){
		e.preventDefault();
		$('#embed-code-copyable').focus();
	});
	
	
	/* --------------- */	
	/* ITEM PAGINATION */
	/* --------------- */
	
	if (typeof data !== 'undefined') {
		var numPages =  data.length;
		$( "#numPages" ).text(numPages);	
		$( "#slider" ).slider({
			value:1,
			min: 1,
			max: numPages,
			step: 1,
			slide: function( event, ui ) {
					$( "#amount" ).val( ui.value );
				},
				stop: function( event, ui ) {
		    		var gallery = Galleria.get(0);
		        	gallery.show( ui.value - 1 );
				}

			});
	
		$( "#amount" ).val( $( "#slider" ).slider( "value" ) );
	
	};

	
	$("#btnOptions").click(function (e) {
			  e.preventDefault();
			  $("#itemOptionsSecondary").slideToggle("fast");
			});
			
	$('#optionClose').click(function () {
	    $('#itemOptionsSecondary').hide();
	});

	$('#viewPdf').click(function (){
	    $('#progressText').show();
	    $('#progressText').attr("tabindex",-1).focus();
	})
	
	$('#progressText').blur(function (){
	    $('#progressText').hide();
	})
	
	// Finding Aid info 
	/*
    $('p.collScopeNote').jTruncate({  
		length: 200,  
		moreText: "More...",  
		lessText: "Less...",  
		moreAni: "fast",  
		lessAni: "fast"  
  	});
	*/

	// Sub-Items
	$('div.collapseMe').show();
    $('div.subItemTitle a').click(function() {
		$(this).parent().next().slideToggle("fast");
		return false;
	});
	
	$('a.expandAll').click(function() {
		$('div.collapseMe').slideToggle("fast");
		$(this).text($(this).text() == 'Expand All' ? 'Collapse All' : 'Expand All');
		return false;
	});

	var ogImage = $('head').children('meta[property="og:image"]').attr('content');

	
});  /* end DOM-ready */