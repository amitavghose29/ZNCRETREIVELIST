sap.ui.define(
    [
        "com/airbus/zncretreivelist/ext/util/commons/Utils"
    ],
    function (Utils){
        "use strict";

    return sap.ui.controller("com.airbus.zncretreivelist.ext.controller.ListReportExt", {

        onInit: function(){
            Utils.enableExportToExcel(this.getSmartTable());
        },

        getSmartTable: function(){
            return this.getView().byId("listReport");
        },

        getTable: function(){
             return this.getSmartTable() ? this.getSmartTable().getTable : undefined;
        }

    });
});
