
console.log('8:55 AM 5/26/2020');

// handle bar js script checkbox
document.getElementById('btnLoadData').onclick = function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://aimtell.com/files/sites.json');

    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            // This is where we'll do something with the retrieved data
            var data = JSON.parse(ourRequest.responseText);
            console.log(data.sites);

            var source = document.querySelector("#introduction-template").innerHTML;
            //console.log(source);
            var template = Handlebars.compile(source);
            var context = data;

            // get the HTML after passing the template the context
            var html = template(context);

            // set the new HTML
            document.querySelector(".introduction").innerHTML = html;


        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };

    ourRequest.onerror = function () {
        console.log("Connection error");
    };

    ourRequest.send();
}


