sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
], 
/**
 * 
 * @param {typeof sap.m.MesageBox} MesageBox 
 * 
 */

function(mockserver, MessageBox) {
    'use strict';

    var aMockserver = [];

    //initialize the mock server
    aMockserver.push(mockserver.init());

    Promise.all(aMockserver).catch(function (oError) {
        MessageBox.error(oError.mesage);
    }).finally(function () {
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
    });
});