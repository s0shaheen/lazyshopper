$(document).ready(function() {
  $('#BUTTON_search').click(search);
});

function search() {
  var item = document.getElementById("input").value;
  var category = document.getElementById("category").value;

  if (item !== "") {
    while (item.includes(' ')) {
      item = item.replace(' ', '+');
    }
}
  if (category === "electronics") {
    openLink("https://www.bestbuy.com/site/searchpage.jsp?st=" + item);
    openLink("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=" + item);
    openLink("https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR12.TRC2.A0.H0.Xjaybird+x3.TRS0&_nkw=" + item)
  }

  if (category === "shoes") {
    openLink("https://stockx.com/search?s=" + item);
    openLink("https://www.goat.com/search?query=" + item);
    openLink("https://www.flightclub.com/catalogsearch/result/?q=" + item)
  }

  if (category === "home improvement") {
    openLink("https://www.sears.com/search=" + item);
    openLink("https://www.homedepot.com/s/" + item);
    openLink("https://www.lowes.com/search?searchTerm=" + item)
}

    ///search is clean
    // console.log('item: ' + item);
    // console.log('category: ' + category);
}

// Function openLink()
// Clicking on a list item should open the url it
//  corresponds to in a new tab within the same window
// The url is gathered from the clicked li object's id
// @param URL The url to open in the new tab
function openLink(URL) {
  chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.create(
        {url: URL}
      );
  });
}
