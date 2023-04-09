// 0x0000000000402C10

var num = 0;

(function () {
    // @ts-ignore
    function print_arg(addr) {
        try {
            var module = Process.findRangeByAddress(addr);
            if (module != null) return "\n"+hexdump(addr) + "\n";
            return ptr(addr) + "\n";
        } catch (e) {
            return addr + "\n";
        }
    }
    // @ts-ignore
    function hook_native_addr(funcPtr, paramsNum) {
        var module = Process.findModuleByAddress(funcPtr);
        try {
            Interceptor.attach(funcPtr, {
                onEnter: function (args) {
                    this.logs = "";
                    this.params = [];
                    // @ts-ignore
                    // this.logs=this.logs.concat("So: " + module.name + "  Method: std.internal.types.ptr.List[int]:std.internal.types.ptr.List.__getitem__:0[std.internal.types.ptr.List[int]_int].491 offset: " + ptr(funcPtr).sub(module.base) + "\n");
                    // for (let i = 0; i < paramsNum; i++) {
                    //     this.params.push(args[i]);
                    //     this.logs=this.logs.concat("this.args" + i + " onEnter: " + print_arg(args[i]));
                    // }
                }, onLeave: function (retval) {
                    this.logs=this.logs.concat(`retval onLeave: [${num}] ` + print_arg(retval) + "\n");
                    num += 1;
                    console.log(this.logs);
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    // @ts-ignore
    hook_native_addr(Module.findBaseAddress("threads").sub(0x00400000).add(0x0000000000402AF0), 0x2);
})();