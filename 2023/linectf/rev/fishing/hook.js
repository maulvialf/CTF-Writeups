
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
    function hook_native_addr(funcPtr, paramsNum, method,mod=0) {
        var module = Process.findModuleByAddress(funcPtr);
        try {
            Interceptor.attach(funcPtr, {
                onEnter: function (args) {
                    this.logs = "";
                    this.params = [];
                    // @ts-ignore
                    this.logs=this.logs.concat("So: " + module.name + "  Method: "+method+": " + ptr(funcPtr).sub(module.base) + "\n");
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
                    if(mod == 1){
                        var point = this.params[4].readPointer()
                        console.log(point)
                        const newData = REPLACER;
                        Memory.writeByteArray(point, newData);                    
                        console.log(point.readByteArray(32))    
                    }

                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    // @ts-ignore
    hook_native_addr(Module.findBaseAddress("fishing.exe").add(0x3f48), 0x5, "fscan after", 1);
    hook_native_addr(Module.findBaseAddress("fishing.exe").add(0x2310), 0x5, "encrypt");
    hook_native_addr(Module.findBaseAddress("fishing.exe").add(0x3ff0), 3, "cmp");



})();
