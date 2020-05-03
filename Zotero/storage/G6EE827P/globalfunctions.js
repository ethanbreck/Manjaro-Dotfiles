/* ====================================================== */
/* Global javascript functions for Digital Collections UI */
/* ====================================================== */

			
	/* When the DOM has loaded... */
	$(document).ready(function() {

			/* Shrink the font size for really long titles. Default is 27px. */

			var titleLength = $('h1.itemTitle').text().length;
	
		    if ((titleLength >= 100) && (titleLength < 200)) {
				$('h1.itemTitle').addClass('title-100');
		        $('h1.itemTitle').css("font-size", "25px");
		    }		
		    else if ((titleLength >= 200) && (titleLength < 300)) {
				$('h1.itemTitle').addClass('title-200');
		        $('h1.itemTitle').css("font-size", "23px");
		    }
		    else if ((titleLength >= 300) && (titleLength < 400)) {
				$('h1.itemTitle').addClass('title-300');
		        $('h1.itemTitle').css("font-size", "21px");
		    }
		    else if ((titleLength >= 400)) {
				$('h1.itemTitle').addClass('title-400');
		        $('h1.itemTitle').css("font-size", "18px");
		    }	

		
			// If there aren't any options for scoping the main search, don't present as a pick list
			// Usability testing spring 2013 revealed many clicks on picklist but no options present
			
			var numScopeOptions = $("select#scopeMe > option").size();
			if(numScopeOptions == 1) {
				$("label#scopeLabel").hide();
				$("img.scopeIcon").hide();
				$("select#scopeMe").hide();
				$("input#keyword").css("width","400px");			
	
			}
	
			// If the page includes the modifiedFacets (e.g., property and term pages), don't let the columnizer split them 
			$('.modifiedFacets ul').removeClass('facetBrowse columnar columnar3');
	
			$("#mobileMenuIcon").click(function () {
				  $("div.mobileMenu").slideToggle("fast");
				  return false;
				});
					
	
		$('#sidebar.sidebarLeft ul, #sidebar ul.facetList').each(function() {
		    var ul = $(this);
		    if(ul.hasClass('dontCollapse')) return;
		    if(ul.children('li').size() <= 6) return;

			ul.children('li:gt(3)').addClass('hidden');
			
			// hide facet values past four
		    var hiddenElements = ul.children('li:gt(3)', this).hide();

		    ul.append(
		        $('<li class="toggler" style="font-size:90%;"><a href="#">More</a></li>')			
		    );
		

		
		});
		
		$('#sidebar li.toggler a').click(function(e) {
			e.preventDefault();
			$(this).parent().siblings('li.hidden').slideToggle('fast');
			$(this).text($(this).text() === 'More' ? 'Fewer' : 'More');
					
		});

	
	    /*Create the collapsable facet headers */
	    $('.accordion').click(function() {
			$(this).next().slideToggle("fast");
			$(this).toggleClass("collapsed");
			return false;
		}).next().show();
		
		
	
	
		/* Split the auto-columnized lists into columns */
	$(function() {
	  $('.columnar3').easyListSplitter({ colNumber: 3 });
	  $('.columnar3horizontal').easyListSplitter({ colNumber: 3, direction: 'horizontal'});
      $('.columnar2[class!="hidden"]').easyListSplitter({ colNumber: 2 });
      

			});
			
		
		
		/* Make the advanced search options appear when clicking 'Advanced Search' */
		$("#advancedSearchLink").click(function () {
			  $("#advancedSearchOptions").slideToggle("fast");
			  $("#advancedSearchLink").toggleClass("collapsed");
			 
			  /* For mobile version, make the collection scope appear when clicking advanced */
			
			  /*
			  $("#scopeLabel").show();
			  $("img.scopeIcon").show();
			  $("select.scopeMe").show();
			  */
			
			  return false;
	          
			
			});
			
			/* Toggle comment policy */
			$(".commentPolicyLink").click(function () {
				  $(".commentPolicy").slideToggle("fast");
				  $(".commentPolicyLink").toggleClass("collapsed");
				});
	
			/* Expand/collapse the lists of collections in the sidebar */		
				$("a.showMore").click(function () {


		            $(this).text($(this).text() == 'More...' ? 'Fewer...' : 'More...');
						 $(this).parent().siblings("li.hidden").slideToggle("fast");
						 $(this).toggleClass("collapsed");
					});	

			/* Expand/collapse the lists of collections in the sidebar */		
				$("a.showMorePopularItems").click(function () {

		            $(this).text($(this).text() == 'More...' ? 'Fewer...' : 'More...');
						 $(this).parent().siblings("div.hidden").slideToggle("fast");
						 $(this).toggleClass("collapsed");
					});
	



	$(function() {
		$("#accordion").accordion({
					autoHeight: false,
					collapsible: true
			});
		$("#tabs1").tabs();
		$("#mainContent #facetTabs").tabs();
		$("#duplicate").dynamicForm("a.plus", "a.minus", {limit:5});
		
	});
	
	
	

	
	$(function() {
	    $( ".dialog-trigger" ).click(function(e){
			e.preventDefault();
			$("#dialog").dialog({
				minWidth: 650
			});
		});		
		$("div.viewOptions").buttonset(); 
		$(".buttonSet").buttonset(); 
  		$("button.jqueryui, a.button, div.button").button();
	
		$(".nextButton").button( { icons: {primary:'ui-icon-carat-1-e'}, text: false });
		$(".prevButton").button( { icons: {primary:'ui-icon-carat-1-w'}, text: false });
		
		$(".nextButton").click(function() { return false; });
		$(".prevButton").click(function() { return false; });
		
		$("div.options").buttonset(); 
	});
	
	

	
});  /* end DOM-ready */