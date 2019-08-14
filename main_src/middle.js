//图标
let bingImage = new Ext.Container({
    columnWidth: .2,
    items: [{
        xtype: 'box',
        autoEl: {
            tag: 'img',
            src: 'bing.png',
            style: 'float : right;margin:35px 25px 0px 0px;'
        },
    }]
})
//搜索框
let fieldConfig = {
    xtype: 'field',
    columnWidth: .8,
    height: 50,
    cls: 'bing_input',
    listeners: {
        render: function(p) {
            p.getEl().on('click', ()=>{
                document.getElementById("mask").style='display:block';
            });
            p.getEl().on('mouseout', ()=>{
                document.getElementById("mask").style='display:none';
            });
        },
        single: true  // Remove the listener after first invocation
    }
}
let buttonConfig = {
    columnWidth: .2,
    xtype: 'button',
    icon: 'search.png',
    cls: 'bing_button'
}
let searchField = {
    layout: 'column',
    items: [fieldConfig, buttonConfig]
}

//搜索选项
BingPanel = Ext.extend(Ext.util.Observable, {
    constructor: function (config) {
        this.title = config.title;
        BingPanel.superclass.constructor.call(this, config);
    },
    info: function () {
        return { xtype: 'panel', title: this.title, items: [searchField] }
    }
});
let bingPaenlArray = [new BingPanel({ title: '国内版' }).info(), new BingPanel({ title: '国际版' }).info()]
let bingPanels = new Ext.TabPanel({
    columnWidth: .4,
    activeTab: 0,
    items: bingPaenlArray,
    plain: true,
    cls: "bing_panels"
})
//出口
var bingMiddle = new Ext.Container({
    region: 'west',
    layout: 'column',
    items: [bingImage, bingPanels]
});