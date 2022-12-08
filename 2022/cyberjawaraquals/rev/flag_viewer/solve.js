(function () {


    function print_arg(addr) {
        try {
            var module = Process.findRangeByAddress(addr);
            if (module != null) {
                var one = ptr(addr).readCString();
                return one;
            };
        } catch (e) {
            return addr + "\n";
        }
    }


    function hook_native_addr(funcPtr, paramsNum) {
        var module = Process.findModuleByAddress(funcPtr);
        try {
            Interceptor.attach(funcPtr, {
                onEnter: function (args) {
                    this.logs = "";
                    this.params = [];
                    // @ts-ignore
                    this.logs=this.logs.concat("So: " + module.name + "  Method: brotli_decompressor::decode::BrotliDecompressStream::h6fd4311faa5fd5ae offset: " + ptr(funcPtr).sub(module.base) + "\n");
                    for (let i = 0; i < paramsNum; i++) {
                        this.params.push(args[i]);
                        this.logs=this.logs.concat("this.args" + i + " onEnter: " + print_arg(args[i]));
                    }
                }, onLeave: function (retval) {
                    for (let i = 0; i < paramsNum; i++) {
                        this.logs=this.logs.concat("this.args" + i + " onLeave: " + print_arg(this.params[i]));
                    }
                    this.logs=this.logs.concat("retval onLeave: " + print_arg(retval) + "\n");
                    console.log(this.logs);
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    // @ts-ignore
    hook_native_addr(Module.findBaseAddress("flag-viewer").add(0xbaf20), 0xa);
})();
