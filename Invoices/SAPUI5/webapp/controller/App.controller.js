sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    function (Controller, MessageToast) {//, models, ResourceModel
        "use strict"
        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            onInit: function () {
                /*this.getView().setModel(models.createRecipient());
                var i18nModel = new ResourceModel({
                    bundleName:"logaligroup.SAPUI5.i18n.i18n"
                });
                this.getView().setModel(i18nModel,"i18n");*/

            },
            onShowHello: function () {
                //MessageToast.show("Hello World");
                var sHello = this.getView().getModel("i18n").getResourceBundle().getText("say Hello");
                var sName = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = sHello.concat(" ").concat(sName);

                MessageToast.show(sMsg);
            }
        });
    });