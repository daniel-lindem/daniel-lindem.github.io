let pages = await report.getPages();



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