$(document).ready(function () { //waits until page is fully loaded
    $("#findButton").click(function () { //$ symbolizes that its jquery; ("selector") - can be id, class or element; action is "click", run "function"
        var searchTerm = $("#veggieInput").val(); //create variable to grab search term from user input; .val() is the user's input; used for grabbing the input that user's entered in a form
        searchTerm = searchTerm.toLowerCase();

        var listItems = $("li"); //holds a collection of all the items entered in list (recipe names)

        listItems.each(function () { //for each of these list items, do something (run function)
            var recipe = $(this).text().toLowerCase();

            //Return alert if user's input is not a recipe
            //if (!recipe.includes(searchTerm)) {
            //    alert("Recipe not available");

            if (!recipe.includes(searchTerm)) { //function is looking for whether what the user entered is it not (!) a match; $(this) grabs recipes one at a time; text() returns text; see if it includes user's input (do not use quotation marks for variable names); if it cannot (!)...
                $(this).hide("slow"); //hide this slowly; this (recipe) name is hid slowly
            }

            if (recipe.includes(searchTerm)) { //function is looking for whether what the user entered is it not (!) a match; $(this) grabs recipes one at a time; text() returns text; see if it includes user's input (do not use quotation marks for variable names); if it cannot (!)...
                $(this).show("slow"); //hide this slowly; this (recipe) name is hid slowly
            }
        });
    });
    //User should be able to click the View All button and all the recipes are shown.

    $("#viewAllButton").click(function () {
        var listItems = $("li"); 

        listItems.each(function () {
                $(this).show("slow");
        });
    });

});