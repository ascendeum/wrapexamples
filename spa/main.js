/*
** Page Functionality
*/

/* Initiate wrapper */
var asc = asc || {};
asc.cmd = asc.cmd || [];

/* Ad Helper*/
// Create a div for ads
function createAdEl(){
    var el = document.createElement('div');
    el.dataset.aaad = 'true';
    el.dataset.aaAdunit = '/22181265/Test_abcd';
    return el;
}

function processNewAds(){
    asc.cmd.push(function(){
        // Destroy all existing adunits
        asc.destroy();
        // Get new adunits on page
        asc.processAdsOnPage();
    });
}

/* Generating some random content */
var loremContents = (function() {
    var lorem = new Lorem(); 
    lorem.type = Lorem.TEXT; 
    lorem.query = '3p'; 
    return lorem.createLorem();
  	})();

/* Top Menu Functions */
$(".newPage").click(function(){

    // Destroy any ads on pages
    asc.cmd.push(function(){
        // Destroy all existing adunits
        asc.destroy();
    });
    // Clean Page Content
    $("#content").html("");    
    $('#sidebarAd1').html("");
    $('#sidebarAd2').html("");

    // Start defining ads
    var ad1 = createAdEl();
    var ad2 = createAdEl();
    var ad3 = createAdEl();

    // Render content
        // Add top ad
        $("#content").append(ad1);
        // Add content
        $("#content").append(loremContents);
        // Add Sidebar Ad 1
        $('#sidebarAd1').append(ad2);
        // Add Sidebar Ad 2
        $('#sidebarAd2').append(ad3);

    // Process ads on page
    asc.cmd.push(function(){
        // Get new adunits on page
        asc.processAdsOnPage();
    });

});
$(".pageWithoutAds").click(function(){

    // Destroy any ads on pages
    asc.cmd.push(function(){
        // Destroy all existing adunits
        asc.destroy();
    });
    // Clean Page Content
    $("#content").html("");    
    $('#sidebarAd1').html("");
    $('#sidebarAd2').html("");

    // Render content
        $("#content").append(loremContents);

});

$(".refreshAds").click(function(){

    // Refresh all adunits
    asc.cmd.push(function(){
        asc.refresh();
    });

});

/* HOMEPAGE (initial load page) - Sidebar insert Ads */
$(document).ready(function(){
    // Start defining ads
    var ad1 = createAdEl();
    var ad2 = createAdEl();

    // Add Sidebar Ad 1
    $('#sidebarAd1').append(ad1);
    // Add Sidebar Ad 2
    $('#sidebarAd2').append(ad2);
});
