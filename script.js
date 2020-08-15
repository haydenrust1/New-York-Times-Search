$(document).ready(function () {

    var searchTerm = "";
    var beginDate = "";
    var endDate = "";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=yBRJ6pDYUxHqZJak1CQUQnuoTZhxbCUz&begin_date=" + beginDate + "&end_date=" + endDate + "&sort=newest";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })

})