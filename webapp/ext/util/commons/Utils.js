sap.ui.define([], function() {
   "use strict";
    
    return {

      enableExportToExcel: function(oSmartTable){
            if(oSmartTable && oSmartTable.isA("sap.ui.comp.smarttable.SmartTable")){
                    oSmartTable.setUseExportToExcel(true);
            }else {
                console.error("Provided parameter <oSmartTable> is not an actual sap.ui.comp.smarttable.SmartTable!");
            }
      }

    };

});