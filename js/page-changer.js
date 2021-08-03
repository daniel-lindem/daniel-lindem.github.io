// preload preload pbie scripts on this page
var preloadConfig = {
    type: 'report',
    baseUrl: 'https://embedded.powerbi.com/reportEmbed',
};
  
var preloadElement = powerbi.preload(preloadConfig);
  
preloadElement.onload(function () {
    console.log("pbie scripts now preloaded into this page");
});
  
  
// data required for embedding Power BI report
var embedReportId = "2cf7c5c5-4e1a-4df7-a2a6-21...";
var embedUrl = "https://app.powerbi.com/reportEmbed?reportId=2cf7c5c5-...";
var accessToken = "H4sIAAAAAAAEAB1WtQ7sCBL8l5fOSmZaaQMzMzszM49xdf9-o8076K...";
  
// Get models object to access enums for embed configuration
var models = window['powerbi-client'].models;
  
var config = {
    type: 'report',
    id: embedReportId,
    embedUrl: embedUrl,
    accessToken: accessToken,
    tokenType: models.TokenType.Embed,
};
  
// Get a reference to the embedded report HTML element
var reportContainer = document.getElementById('embedContainer');
  
// call load() instead of embed() to load the report while delaying the rendering process
var report = powerbi.load(embedContainer, config);
  
// when loaded event occurs, set current page then call render()
report.on("loaded", function () {
    console.log("loaded event executing");
    // call to get Pages collection
    report.getPages().then(
    function (pages) {
        // inspect pages in browser console
        console.log(pages);
        // display specific page in report
        var startPage = pages[1]; // this selects the second page
        config.pageName = startPage.name;
        // Call report.render() to display report
        report.render(config);
    });
});

function change_embed_url(display_id){
    embed = "https://app.powerbi.com/reportEmbed?reportId=f4b8cb09-3749-47e4-ad42-9634ce337fdd&autoAuth=true&ctid=7aa99425-1726-430d-bee1-6d96e27ae823&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&pageName=";
    reference = "";
    switch(display_id){
        case "oversikt":
            reference = "ReportSectionde86cd135652d9c4c011";
            break;
        case "veitrafikk":
            reference = "ReportSection967356921f6d73bd906e";
            break;
        case "personbil":
            reference = "ReportSectionf6bd41486b040390d996";
            break;
        case "varebil":
            reference = "ReportSection322633bde7ee7e713fb9";
            break;
        case "lastebil":
            reference = "ReportSectioncca15c8c621be720680f";
            break;
        case "buss":
            reference = "ReportSectiondd3ab23256fa1692f700";
            break;
        case "avfall-og-energiforsyning":
            reference = "ReportSectionfc0c0b919ce91137ffdf";
            break;
        case "energibruk":
            reference = "ReportSectionad80d3ee922b7cd6b3f6";
            break;
        case "klimaendringer-i-kristiansand":
            reference = "ReportSectionc8d93ba1be247e7bdc86";
            break;
        case "sykkelindeksen":
            reference = "ReportSection8c55f2b7d850cd3c0db2";
            break;
    }
    document.getElementById("pbi-embed").src = embed + reference;
}

report.on('pageChanged', event => {
    const page = event.details.newPage;
    console.log(page.name);
});