// frida  -U -f  id.aimardcr.insecure_jni -l solve.js

Java.perform(function () {
    aWaitingLoadLibrarys();
});

function aWaitingLoadLibrarys() {
    var library_name = "libapp.so"
    var library_loaded = 0
    Interceptor.attach(Module.findExportByName(null, 'android_dlopen_ext'), {
        onEnter: function (args) {
            // first arg is the path to the library loaded
            let library_path = Memory.readCString(args[0])
            if (library_path.includes(library_name)) {
                console.log("[.] Loading library : " + library_path)
                library_loaded = 1
            }
        },
        onLeave: function (args) {
            //if it's the library we want to hook, hooking it
            if (library_loaded == 1) {
                console.log("[+] Loaded")
                var BaseAddr = Module.findBaseAddress('libapp.so'); //lib name
                console.log('Fu:' + BaseAddr);
                //Now we will hook the callback func

                (function () {

                    // @ts-ignore
                    function print_arg(addr) {
                        try {
                            console.log("asfasfas")
                            console.log(addr)
                            var module = Process.findRangeByAddress(addr);
                            if (module != null) return "\n"+hexdump(addr) + "\n" + ptr(addr).readCString();  + "\n";
                            return ptr(addr) + "\n";
                        } catch (e) {
                            console.log(e)
                            return addr + "\n";
                        }
                    }
                
                    // @ts-ignore
                    var base = Module.findBaseAddress("libapp.so");
                    // Attach to the target process

                    // Find the address of the native function
                    const funcAddr = base.add(0x000000000001B00C);
                    var bss = base.add(0x000000000001D04C)
                    var enc = base.add(0x000000000001B99F);
                    // Define the native function wrapper
                    const nativeFunc = new NativeFunction(funcAddr, "int", ["pointer", "pointer"]);

                    // Call the native function
                    const result = nativeFunc(bss, enc);
                    console.log("Result: " + result);
                    console.log(print_arg(bss))
                    console.log("Result: " + result);
                    
                })();

                library_loaded = 0;
                return BaseAddr;
            }
        }
    })
}

