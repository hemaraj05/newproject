var _this = this;
onInit();
Promise < void  > {
    "return": _super.onInit.call(this).then(function (_) {
        sp.setup({
            spfxContext: _this.context
        });
    })
};
