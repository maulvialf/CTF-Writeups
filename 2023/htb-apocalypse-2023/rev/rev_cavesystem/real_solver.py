import angr

main = 0x0000000000001165+0x400000
find = (0x0000000000001ABA+0x400000,)
avoid = (0x0000000000001AC1+0x400000,)

p = angr.Project('./cave')
#state = p.factory.entry_state()
state= p.factory.blank_state(addr=main)
# state.posix.files[0].read_from(30)
pg = p.factory.simgr(state, threads=8)
ex = pg.explore(find=find, avoid=avoid)
#ex=pg.explore(find=lambda s:"it is my secret" in s.posix.dumps(1))

output = ex.found[0].posix.dumps(0)
print(output)
# inp = ex.found[0].posix.files[0].all_bytes()  
# print (ex.found[0].solver.eval(inp,cast_to = str))

# HTB{H0p3_u_d1dn't_g3t_th15_by_h4nd,1t5_4_pr3tty_l0ng_fl4g!!!}