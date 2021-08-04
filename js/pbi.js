let reportType = "PowerBIReport";
let reportId = "f4b8cb09-3749-47e4-ad42-9634ce337fdd";
let accessToken ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9";
let embedUrl = "https://app.powerbi.com/reportEmbed?reportId=f4b8cb09-3749-47e4-ad42-9634ce337fdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19";

let pagesTest;
// useless async here
async function start() {
    // useless await here
    pagesTest = await report.getPages();
    return await myfunction();
  }

var embedConfiguration = {
    type: reportType,
    id: reportId,
    accessToken: accessToken,
    embedUrl: embedUrl,
    //pageName: pageName
};
var $reportContainer = $('#reportContainer');
var report = powerbi.embed($reportContainer.get(0), embedConfiguration);

var pages = [];

report.getPages().then(function (reportPages) {
    pages = reportPages;
});

pages[1].setActive();


report.on('pageChanged', event => {
    const page = event.details.newPage;
    console.log(page.name);
});