sap.ui.define([
    "sap/ui/model/json/JSONModel"
],

    function (JSONModel) {
        "use strinct";

        return {

            createRecipient: function () {
                var oData = {
                    recipient: {
                        name: "world"
                    }
                };
                //var oModel = new JSONModel(oData);
                //this.getView().setModel(oModel);
                return new JSONModel(oData);
            }
        };

    });