from pwn import *

a = p64(0x40564738A7221D88)
b = p64(0x4048A3AE5F09ED88)

float_value = struct.unpack('d', a)[0]
print(float_value)
float_value = struct.unpack('d', b)[0]
print(float_value)
49.278758888099276,89.11283281642511


# [heap]:0000555555702B81 db  35h ; 5
# [heap]:0000555555702B82 db  35h ; 5
# [heap]:0000555555702B83 db  35h ; 5
# [heap]:0000555555702B84 db  35h ; 5
# [heap]:0000555555702B85 db  35h ; 5
# [heap]:0000555555702B86 db  35h ; 5
# [heap]:0000555555702B87 db  36h ; 6
# [heap]:0000555555702B88 db  44h ; D
# [heap]:0000555555702B89 db  39h ; 9
# [heap]:0000555555702B8A db  42h ; B
# [heap]:0000555555702B8B db  46h ; F
# [heap]:0000555555702B8C db  30h ; 0

# gdb
# b *0x5555556D9BF0