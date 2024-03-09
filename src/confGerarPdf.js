function printArea (areaImpressao){
    var printdata=document.getElementById("areaImpressao");
    newwin=window.open("");
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
}