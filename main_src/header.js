//头
HeaderItem = Ext.extend(Ext.util.Observable, {
    constructor: function (config) {
        HeaderItem.superclass.constructor.call(this, config);
    },
    info: function (name) {
        return `<a class = 'bing_header' href = ''> ${name} </a>`
    }
});

let headerItem = new HeaderItem();
let template = new Ext.Template(
    headerItem.info("Images"),
    headerItem.info("Videos"),
    headerItem.info(" | "),
    headerItem.info("MSN"),
    headerItem.info("Offic"),
    headerItem.info("Outlook.com")
);
let headerContainer = new Ext.Container({
    columnWidth: .4,
    items: template
})

var bingHeader = new Ext.Container({
    id: 'header',
    layout: 'column',
    items:[headerContainer]
})