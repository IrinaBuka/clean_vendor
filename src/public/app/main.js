var common_path = "../public";

requirejs.config({
    waitSeconds: 15,
    shim: {

    },
    paths: {
        jquery: "vendor/jquery-3.1.1.min",
        bootstrap: "vendor/bootstrap.min",
        wow: "vendor/wow",
        slick: "vendor/slick/min",
    },
    baseUrl: common_path,
    urlArgs: 'v=0.12'
});

requirejs(['app/common/script', 'app/common/design'], function(common, settings) {
    common.init();
});