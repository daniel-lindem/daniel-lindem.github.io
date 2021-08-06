
function change_embed_url(display_id){
    embed = "https://app.powerbi.com/reportEmbed?reportId=f4b8cb09-3749-47e4-ad42-9634ce337fdd&autoAuth=true&ctid=7aa99425-1726-430d-bee1-6d96e27ae823&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&pageName=";
    reference = "";
    switch(display_id){
        case "oversikt":
            reference = "ReportSectionde86cd135652d9c4c011&navContentPaneEnabled=false";
            break;
        case "veitrafikk":
            reference = "ReportSection967356921f6d73bd906e&navContentPaneEnabled=false";
            break;
        case "personbil":
            reference = "ReportSectionf6bd41486b040390d996&navContentPaneEnabled=false";
            break;
        case "varebil":
            reference = "ReportSection322633bde7ee7e713fb9&navContentPaneEnabled=false";
            break;
        case "lastebil":
            reference = "ReportSectioncca15c8c621be720680f&navContentPaneEnabled=false";
            break;
        case "buss":
            reference = "ReportSectiondd3ab23256fa1692f700&navContentPaneEnabled=false";
            break;
        case "avfall-og-energiforsyning":
            reference = "ReportSectionfc0c0b919ce91137ffdf&navContentPaneEnabled=false";
            break;
        case "energibruk":
            reference = "ReportSectionad80d3ee922b7cd6b3f6&navContentPaneEnabled=false";
            break;
        case "klimaendringer-i-kristiansand":
            reference = "ReportSectionc8d93ba1be247e7bdc86&navContentPaneEnabled=false";
            break;
        case "sykkelindeksen":
            reference = "ReportSection8c55f2b7d850cd3c0db2&navContentPaneEnabled=false";
            break;
        case "busspassasjerer":
            reference = "ReportSection0fde31ddb759f8d07e1c&navContentPaneEnabled=false";
            break;
        case "husholdningsavfall":
            reference = "ReportSectionb069bb537e86f8526c10&navContentPaneEnabled=false";
            break;
        case "luftkvalitet":
            reference = "ReportSection55772d060c4449b794d6&navContentPaneEnabled=false";
    }
    document.getElementById("pbi-embed").src = embed + reference;
}