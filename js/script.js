
// Some global variables

var customerID = "215757";
var auth_token = "0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18";
var sorting_option = "recent";

var media;

var start = 0;
var numImages = 6;

$(document).ready(function() {
    $.ajax({
        url: "https://photorankapi-a.akamaihd.net/customers/"
                + customerID
                + "/media/recent/?version=v2.2&auth_token="
                + auth_token
                + "&sorting_option=" + sorting_option

    }).then(function(data) {

            media = data.data._embedded.media;
            for (var i = 0; i < media.length; i++) {
                // Inject the images into the DOM
                // Add to the gallery
                $( "#myGallery" ).append('<li class="image" id="img' + i + '"><a href="' + media[i].images.normal
                                            + '" data-lightbox="myGallery" data-title="'
                                             + media[i].caption + '"><img src="'
                                            + media[i].images.normal + '" alt="'
                                            + media[i].caption + '"' + 'height="200px" width="200px"' + '>');

                // Only show the first few
                if (i >= numImages)
                {
                    $( "#img" + i).hide();
                }


            }

    });
});

// show the next one, remove one from the start of the display
function next()
{
    if (start < media.length - numImages)
    {
        // hide the first
       $( "#img" + start).hide();

       // Show the last
       $( "#img" + (start + numImages)).show();

        start++;
    }
}

// show the previous one, remove one from the end of the display
function previous()
{
    if (start > 0)
    {
        start--;
        // show the first
       $( "#img" + start).show();

       // Show the last
       $( "#img" + (start + numImages)).hide();


    }
}






