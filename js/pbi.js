let pagesTest;
// useless async here
async function start() {
    // useless await here
    pagesTest = await report.getPages();
    alert(pagesTest);
  }

// report.on will add an event listener.

await report.on("pageChanged",async function (event) {
    let page = event.detail.newPage;
    console.log("Event - pageChanged:\nPage changed to \"" + page.name + "\" - \"" + page.displayName + "\"");
});

// Select Run and change to a different page.
// You should see an entry in the Log window.

console.log("Select different page to see events in Log window.");