



/* ControlTag Loader for Macmillan bd339c69-af54-4a21-b4f1-654bcfcd83ca */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.42.1","schema_version":3},"confid":"Jn7TXKj3","context_terms":[{"id":"Km_1GEmA","value":"Rat"},{"id":"LfMtZHPp","value":"Adeno-associated virus"},{"id":"Km_1F0CV","value":"Laser spectroscopy"},{"id":"K4WALO1h","value":"Maglignant fibrous hystiocytoma"},{"id":"Km_1F6v1","value":"Microscopy techniques"},{"id":"Km_1GLlo","value":"Single-channel recording"},{"id":"Km_1GWnZ","value":"Zebrafish"},{"id":"Km_1Fw3T","value":"High-throughput screening assays"},{"id":"Km_1FdNA","value":"Caenorhabditis elegans"},{"id":"Km_1FlxO","value":"Electron microscopy"},{"id":"K4WALPje","value":"Liposarcoma"},{"id":"Km_1Frc6","value":"Functional magnetic resonance imaging"},{"id":"Km_1GSuX","value":"Transgenic mice"},{"id":"Kn-4VUxJ","value":"Single molecule biophysics"},{"id":"K4WALStY","value":"chondrosarcoma"},{"id":"Km_1F4TF","value":"Microarray analysis"},{"id":"Km_1Fhvf","value":"Cytokines"},{"id":"Km_1GAuC","value":"Positron-emission tomography"},{"id":"Km_1FbMO","value":"Bioluminescence imaging"},{"id":"K4WALYe1","value":"Gemcitabine sarcomas"},{"id":"Km_1GHr1","value":"RNAi"},{"id":"Km_1FauR","value":"Atomic force microscopy"},{"id":"Km_1F1xV","value":"Mass spectrometry"},{"id":"K4WALXQx","value":"Pax3 / Pax7 & forkhead transcription factor"},{"id":"Km_1Fj43","value":"Electrical measurements"},{"id":"Km_1GNJB","value":"Spectroscopy"},{"id":"Km_1FpxU","value":"Fluorescence resonance energy transfer"},{"id":"K4WALQwH","value":"Hemangiosarcoma"},{"id":"Km_1FyMv","value":"Immunohistochemistry"},{"id":"Km_1Fcuf","value":"Biosensing techniques"},{"id":"Km_1GF1m","value":"Reverse transcription polymerase chain reaction"},{"id":"Km_1Ff_l","value":"Computational chemistry"},{"id":"Km_1GJjr","value":"Scanning transmission electron microscopy"},{"id":"Km_1F9IN","value":"NMR spectroscopy"},{"id":"K4WALVSG","value":"mesenchymal origin malignant tumours"},{"id":"Km_1GPi5","value":"Surface patterning"},{"id":"K4WALPNA","value":"Dermatofibrosarcoma"},{"id":"Km_1Fnn4","value":"Experimental organisms"},{"id":"Km_1Ffe-","value":"Chromatography"},{"id":"Kn-4VV8b","value":"Super resolution microscopy"},{"id":"Km_1FiOf","value":"DNA isolation and purification"},{"id":"Kn-4VVHr","value":"Optical tweezers"},{"id":"Km_1GMhS","value":"Software"},{"id":"Km_1GRjJ","value":"Tissue engineering"},{"id":"Km_1GJ-h","value":"Scanning tunnelling microscopy"},{"id":"Km_1GBdl","value":"Protein array analysis"},{"id":"Km_1FwXt","value":"High-throughput screening"},{"id":"Km_1F2Ze","value":"Materials characterization"},{"id":"Km_1GTOZ","value":"Transmission electron microscopy"},{"id":"Km_1GWJZ","value":"Xenopus"},{"id":"LfMtZGju","value":"﻿AAV"},{"id":"K4WALY2f","value":"Imatinib sarcomas"},{"id":"Km_1FdvJ","value":"Cell/tissue technologies"},{"id":"Km_1FsKf","value":"Gene expression analysis"},{"id":"Km_1F6Ey","value":"Microscopy"},{"id":"Km_1GIR7","value":"Scanning electron microscopy"},{"id":"Km_1Ftwk","value":"Gene targeting"},{"id":"K4WALZN8","value":"CRISPR"},{"id":"Km_1GQ_q","value":"Tissue culture"},{"id":"K4WALR9Y","value":"Synovial sarcoma"},{"id":"Km_1F8dk","value":"Mutagenesis"},{"id":"Km_1FnEl","value":"Ellipsometry"},{"id":"Km_1GO-M","value":"Structural biology"},{"id":"K4WALTII","value":"mesenchymal cell type"},{"id":"K4WALU5D","value":"sarcoma x5"},{"id":"Km_1GD9E","value":"Raman spectroscopy"},{"id":"Km_1FpJu","value":"Fluorescence in situ hybridization"},{"id":"Km_1F_Ev","value":"Patch clamp"},{"id":"Km_1FcHv","value":"Biophysical methods"},{"id":"Km_1Fol2","value":"Flow cytometry"},{"id":"K4WALVpu","value":"angiogenesis sarcomas"},{"id":"Km_1GJAU","value":"Scanning probe microscopy"},{"id":"Km_1FeRj","value":"Cellular imaging"},{"id":"Kn-4VVer","value":"CRISPR – CAS systems"},{"id":"Km_1FuTf","value":"Gene transfer"},{"id":"Km_1F3MR","value":"Mathematical techniques"},{"id":"Km_1GVnF","value":"X-ray photoelectron spectroscopy"},{"id":"Km_1GKaw","value":"Signal transduction"},{"id":"Km_1GB6I","value":"Protein expression"},{"id":"Km_1Fv3_","value":"Genomic analysis"},{"id":"K4WALXo8","value":"PDGF & sarcomas"},{"id":"Km_1Fkoi","value":"Electrocardiography – EKG"},{"id":"K4WALQTF","value":"Leiomyosarcoma"},{"id":"Km_1GTt1","value":"Two-hybrid system"},{"id":"Km_1GDat","value":"Protein techniques"},{"id":"Km_1F1Pc","value":"Magnetic resonance imaging"},{"id":"Km_1FixU","value":"DNA sequencing"},{"id":"Km_1FaPh","value":"Apoptosis"},{"id":"Km_1F_pZ","value":"PCR-based techniques"},{"id":"K4WALRej","value":"Lymphangiosarcoma"},{"id":"Km_1Fbmu","value":"Biomolecular nuclear magnetic resonance"},{"id":"Km_1GHEx","value":"RNA sequencing"},{"id":"Km_1FhHw","value":"Confocal microscopy"},{"id":"Km_1GOab","value":"Stem cells"},{"id":"Km_1F43q","value":"Microfluidics"},{"id":"Km_1FmVy","value":"Electrophoresis"},{"id":"Km_1FzWc","value":"Laboratory automation"},{"id":"K4WALTgz","value":"Gastrointestinal stomal tumors"},{"id":"LfMtZHnC","value":"Adenovirus"},{"id":"Km_1F0y0","value":"Lithography"},{"id":"Km_1F75e","value":"Multiphoton microscopy"},{"id":"Km_1GMBc","value":"Small molecule library"},{"id":"K4WALUbL","value":"soft tissue cancer"},{"id":"Km_1F7VN","value":"Mouse"},{"id":"Km_1FoFy","value":"Field potential recordings"},{"id":"Km_1F3rt","value":"Medical and small animal imaging"},{"id":"Km_1GUTJ","value":"Vacuum and cryogenics"},{"id":"Km_1GU7D","value":"X-ray diffraction"},{"id":"K4WALWVg","value":"tumor-stroma interplays"},{"id":"K4WALOKh","value":"soft-tissue sarcoma Fibrosarcoma"},{"id":"Km_1F-fq","value":"Optical techniques"},{"id":"Km_1FlLX","value":"Electroencephalography – EEG"},{"id":"K4WALP8i","value":"Rhabdomyosarcoma"},{"id":"Km_1Fq4j","value":"Fluorescent proteins"},{"id":"Km_1GK_5","value":"Signal transduction techniques"},{"id":"Km_1GCY5","value":"Protein purification"},{"id":"Km_1Fuy_","value":"Genetic vectors"},{"id":"Km_1FjVo","value":"Drosophila"},{"id":"Km_1GN6k","value":"Statistical techniques"},{"id":"Km_1GQlW","value":"Tissue array analysis"},{"id":"K4WALYBr","value":"Pazopanib sarcomas"},{"id":"K4WALSVo","value":"Neurofibrosarcoma"},{"id":"Km_1FtNU","value":"Gene library"},{"id":"Km_1GC8A","value":"Protein sequencing"},{"id":"Km_1GAJi","value":"Peptide library"},{"id":"Km_1FsnP","value":"Gene expression profiling"},{"id":"Km_1FvWA","value":"Genome-wide association studies"},{"id":"Km_1Fywg","value":"Interference microscopy"},{"id":"K4WALWwG","value":"c-kit mutations sarcomas"},{"id":"Km_1GQJf","value":"Surface plasmon resonance"},{"id":"Km_1Fgdr","value":"Computational techniques"},{"id":"Km_1F99y","value":"Nucleic acid labelling and detection"},{"id":"Km_1GGb-","value":"RNA isolation and purification"},{"id":"Km_1GFNi","value":"Remote sensing"},{"id":"K4WALT7h","value":"sarcoma"},{"id":"Km_1FqYb","value":"Fluorescent dyes"},{"id":"Km_1FZtw","value":"Antibodies"},{"id":"Km_1Fxgt","value":"Imaging techniques"},{"id":"Km_1GSFB","value":"Transfection"},{"id":"K4WALRGZ","value":"Kaposi's sarcoma"},{"id":"Km_1Feyx","value":"Chromatin immunoprecipitation"}],"publisher":{"name":"Macmillan","active":true,"uuid":"bd339c69-af54-4a21-b4f1-654bcfcd83ca","version_bucket":"stable","id":1980},"params":{"first_party_dmp_managed":true,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"no_pii":false,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":true,"optout_button_id":"kx-optout-button","user_id_cookie":"kppid","dfp_premium":true,"control_tag_namespace":"macmillan"},"prioritized_segments":[],"realtime_segments":[{"id":"sd26mhtm1","test":["and",["and",["or",["intersects","$page_attr_keywords:,",["\"giant panda\""]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/bd339c69-af54-4a21-b4f1-654bcfcd83ca","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/bd339c69-af54-4a21-b4f1-654bcfcd83ca","consent_set":"https://consumer.krxd.net/consent/set/bd339c69-af54-4a21-b4f1-654bcfcd83ca","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/bd339c69-af54-4a21-b4f1-654bcfcd83ca","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Scientific American","cap":255,"id":1358511,"organization_id":1980,"uid":"Jn7TXKj3"},"tags":[{"id":20636,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]],"collects_data":true},{"id":20637,"name":"Krux Geographic Data provider tag","content":"","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]],"collects_data":true},{"id":20638,"name":"Acxiom provider tag","content":"","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]],"collects_data":true},{"id":20651,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":36251,"name":"DL Whitelist v2 (TEST)","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, normalizeName, omitKeys, optimizeNames, pageAttr, prefix,\n        toSet, trim, userAttr, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'dataLayer[0]');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('content.article.keywords,content.journal.title,content.category.publishingSegment,content.contentInfo.imprint,content.contentInfo.title,content.category.pmc.primarySubject,content.article.doi,content.article.articleType,content.category.contentType,content.category.contentSubType1,content.contentInfo.author,content.category.subjectType,content.category.subjectSubType1,content.authorization.type,content.attributes.keywords,content.contentInfo.collection[n].collectionName,content.article.journalIssueName,product.productInfo.brand,product.category.productType,product.productInfo.productName,product.productInfo.sku'.split(','), trim);\n    userAttr = _.map('user.segment.subscriberMind,user.segment.subscriberSA,user.segment.customer,user.segment.registered,user.segment.appUserMind,user.segment.appUserSA,user.segment.commented,user.segment.emailSubscriber,user.segment.giftRecipient,user.segment.hasAccess,user.segment.hasSoftAccess,user.segment.isInExtendedSession,user.segment.isLoggedIn,user.segment.siteLicenseCustomer,user.segment.subscriber'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'true' === 'true';\n    omitKeys = 'undefined'.split(',');\n    prefix = \"_\";\n    var domain = location.host.split('.'); //Assumption that the array can have max length of 4 eg. www.subdomain.domain.com\n    if (domain.length === 4 && domain[0] === 'www') {\n        prefix = domain[2] + '_';\n    } else if (domain.length === 2) {\n        prefix = domain[0] + '_';\n    } else {\n        prefix = domain[1] + '_';\n    }\n\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value !== null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) !== null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Function to standardise the attribute names */\n    normalizeName = function(name, optimize) {\n        if (optimize === null) {\n            optimize = false;\n        }\n        if (keepCase) {\n            return name;\n        }\n        return (\"\" + name).replace(/([A-Z])([A-Z]+)/g, function(full, first, rest) {\n            if (optimize === true) {\n                return \"\" + first + (rest.toLowerCase());\n            }\n            return \"\" + full;\n        }).replace(/_*([A-Z])/g, '_$1').replace(/^_/, '').toLowerCase();\n    };\n\n    /* Creates a pattern/replacement config for dataLayer tool to clean up names */\n    optimizeNames = function(names) {\n        var config, i, len, name;\n        config = [{\n            pattern: /(\\.)_/,\n            replacement: '$1'\n        }];\n        for (i = 0, len = names.length; i < len; i++) {\n            name = names[i];\n            config.push({\n                pattern: normalizeName(name),\n                replacement: normalizeName(name, true)\n            });\n        }\n        if (!prefix.match(/^_$|null|undefined|false/)) {\n            config.push({\n                pattern: /((?:page|user)_attr_)/,\n                replacement: \"$1\" + prefix\n            });\n\n        }\n        return config;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: _.without(omitKeys.concat([/gtm\\./, /sessionid/i,\n            /\\.phpsessid$/i, /\\.sid$/i, /\\.zenid$/i,\n            /\\.requestid$/i\n        ]), ''),\n        omitValues: [/.*@.*(?:\\..*)+/, /gtm\\./, /^(https?:)?\\/\\/[^\\/]+/,\n            /^\\/[^\\/]+/, /.{255}/\n        ],\n        caseSensitive: keepCase,\n        useFullPath: 'true' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        convertAttrNames: optimizeNames(allAttr)\n    });\n\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (\n            normalizeName(name, true)) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    Krux('set', toSet);\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":81,"name":"Bombora","content":"<script>\r\n\r\n(function () {\r\n_ml = window._ml || {};\r\n_ml.pub = '748';\r\n_ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';\r\nvar s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');\r\nmltag.type = 'text/javascript'; mltag.async = true;\r\nmltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();\r\ns.parentNode.insertBefore(mltag, s);\r\n})();\r\n\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":10,"name":"Rubicon User Match","content":"<script>\r\n(function(){\r\n  if (window.Krux) {\r\n    var kuid = window.Krux('get', 'user');\r\n    if (kuid && typeof kuid != 'undefined') {\r\n       var rubicon_url = 'https://token.rubiconproject.com/token?pid=27384&puid=' + kuid;\r\n       var i = new Image();\r\n       i.src = rubicon_url;\r\n    }\r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.e4cdf7ad64ebac73f207c1ce55cc1727', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
