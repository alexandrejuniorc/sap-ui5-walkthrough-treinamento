sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel, UIComponent) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");

        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter
          .getRoute("detail")
          .attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function (oEvent) {
        // this.byId("rating").reset();
        this.getView().bindElement({
            path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
            model: "invoice"
        })
      },
    });
  }
);
