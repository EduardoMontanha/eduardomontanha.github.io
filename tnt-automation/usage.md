## Template

In order to start developing tests with tntLib, copy the following template to a new HTML file.

```html
<!-- { "tntbuild": "v0.8", "offername": "#1234 - B", "jshint": true, "compress": false, "upload": true, "refresh": false, "browser": "Firefox" } -->
<script>var DELL = DELL || {}; if (DELL.tnt = DELL.tnt || {}, typeof DELL.tnt.Test == 'undefined') { if (document.readyState === 'interactive' || document.readyState === 'complete' || /*@cc_on!@*/false || !!document.documentMode || !!window.StyleMedia) { var scr = document.createElement('script'); scr.src = '//i.dell.com/sites/imagecontent/consumer/en/PublishingImages/TnT_Tests/tntLib/tntlib.min.js?${user.libVersion}'; document.getElementsByTagName('head')[0].appendChild(scr); } else { document.write('<scr' + 'ipt type="text/javascript" id="tntjs" src="//i.dell.com/sites/imagecontent/consumer/en/PublishingImages/TnT_Tests/tntLib/tntlib.min.js?${user.libVersion}"></sc' + 'ript>'); } }</script><script>function runTest(a) { "undefined" != typeof DELL.tnt.Test ? (Tnt.tests[tnt_id] = window["temp_t" + tnt_id], window["t" + tnt_id] = new DELL.tnt.Test(window["temp_t" + tnt_id][0], window["temp_t" + tnt_id][1], window["temp_t" + tnt_id][2], window["temp_t" + tnt_id][3], window["temp_t" + tnt_id][4], '${user.geoInfo}', a), window["t" + tnt_id].system.execute.apply(window["t" + tnt_id])) : setTimeout(function () { runTest(a) }, 500) } var Tnt = Tnt || {}; Tnt.tests = Tnt.tests || {}; window['tnt_id'] = "${campaign.name}".split(" ")[0].replace("#", ""); window["temp_t" + tnt_id] = ["${campaign.id}", "${campaign.name}", "${campaign.recipe.name}", "${campaign.recipe.id}", "${mbox.name}"];</script>

<style>
  /* CSS styles go here */
</style>

<!-- HTML code goes here -->

<script>
    /* globals runTest, $ */
    runTest({
        // Your properties go here

        // Your methods go here

        init: function () {
            'use strict';
    
            // Init code goes here        
        }

    });
</script>
```