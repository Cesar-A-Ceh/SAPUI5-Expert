sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/models",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, models, ResourceModel) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata:{
                manifest:"json"
            },

            init: function () {

                //Call the init function of the this parent
                UIComponent.prototype.init.apply(this, arguments);

                //Set model on view
                this.setModel(models.createRecipient());

                //Set i18n model on view
                var i18nModel = new ResourceModel({
                    bundleName: "logaligroup.SAPUI5.i18n.i18n"
                });

                this.setModel(i18nModel, "i18n");
            }
        
        });

    }
);
    