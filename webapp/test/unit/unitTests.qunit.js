/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"namespace/myui5projectv1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});