function migrationAlert(pagetype, slug, short_title, shortid, mediaurl) {

  // Add all slugs of T2->DDR migrated collections to this array.
  // This will present a prominent banner w/link for any non-redirected
  // page within these collections:
  var migrated = [
    "adaccess",
    "blake",
    "bloomsbury",
    "brennanjohn",
    "broadsides",
    "caribbeansea",
    "dsp",
    "duc",
    "dukechapel",
    "eaa",
    "earlymss",
    "esr",
    "frankespada",
    "friedrichcarlpeetz",
    "gamble",
    "garymonroe",
    "gedney",
    "hfc",
    "hmp",
    "italianposters",
    "jesseandrews",
    "kwilecki",
    "memoryproject",
    "meyermarshall",
    "mma",
    "museedeshorreurs",
    "oaaaarchives",
    "oaaaslidelibrary",
    "outdooradvertising",
    "paverjohn",
    "protfam",
    "quartets",
    "rcmaxwellco",
    "ronaldreis",
    "russianposters",
    "songsheets",
    "strong",
    "stryker",
    "trumpet",
    "vica",
    "wlmpc",
    "womenstraveldiaries"
  ];

  // Add any slugs of T2->T3 migrated collections to this array where 
  // any item IDs have changed during the migration. This requires
  // the presence of a JSON file in /media/js/ddr-id-map/{slug}.json.
  // JSON file must include all the Tripod2 IDs for the collection,
  // not just those that have changed in migration.
  // See dukechapel for example.
  
  var has_item_map = [
    "dsp",
    "duc",
    "dukechapel",
    "esr",
    "frankespada",
    "friedrichcarlpeetz",
    "museedeshorreurs",
    "strong"
  ];

  var item_or_collection = (pagetype=="resource") ? "Item" : "Collection";
  var newid = shortid;
  
  // If the collection is among those declared migrated...
  if ( $.inArray(slug,migrated) !== -1 ) {

    // If it's not an item page...
    if ( pagetype !== "resource" ) {
      renderMigrationMessage(item_or_collection, short_title, slug, newid);
    } else {
    
    // If it is an item page...

      // If it has a special ID mapping...
       if ( $.inArray(slug,has_item_map) !== -1 ) {   

          $.getJSON(mediaurl+'js/ddr-id-map/'+slug+'.json', function(data) {
              $.each(data, function( key, val ) {
                // If the current item shows up in the mapping...
                if(key.toString() == shortid) {
                 newid = val.toString();
                 renderMigrationMessage(item_or_collection, short_title, slug, newid);
                }
              });

          });
         
       } else {
          renderMigrationMessage(item_or_collection, short_title, slug, shortid);
       }
    }
  }
}

function renderMigrationMessage(item_or_collection, short_title, slug, itemid) {

  var new_slug = {
    "brennanjohn":"outdooradvertising",
    "dsp":"dfp",
    "duc":"dukeconstruction",
    "oaaaarchives":"outdooradvertising",
    "oaaaslidelibrary":"outdooradvertising",
    "paverjohn":"outdooradvertising",
    "rcmaxwellco":"outdooradvertising"
  };

  if(new_slug.hasOwnProperty(slug)) {
    slug = new_slug[slug];
  }
  
  var message = "<div id='migration-alert'><h1>This "+item_or_collection+" Has Moved</h1><p><strong>The "+short_title+" digital collection has moved to a new &amp; improved site!</strong></p><a id='ddr-link' href='https://repository.duke.edu/dc/"+slug+"/"+itemid+"' class='button larger ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' data-slug='"+slug+"' data-itemid='"+itemid+"'><span class='ui-button-text'>View This "+item_or_collection+" in Our New Site</span></a> &nbsp; | &nbsp; <a id='ddr-about' href='//library.duke.edu/about/depts/dpps/tripod3'>About the Migration Project</a></div>";
  
  $('#pageContent').prepend(message);
}

// Send click event data for analytics.

$(document).ready(function(e){

  $('#pageContent').on('click','#migration-alert a#ddr-link',function(){
    var slug = $(this).data('slug');
    var itemid = $(this).data('itemid') || 'portal';
    ga('send', {
      hitType: 'event',
      eventCategory: 'Migration',
      eventAction: slug,
      eventLabel: itemid
    });
  });

  $('#pageContent').on('click','#migration-alert a#ddr-about',function(){
    ga('send', {
      hitType: 'event',
      eventCategory: 'Migration',
      eventAction: slug,
      eventLabel: 'About the Migration Project'
    });
  });  
});