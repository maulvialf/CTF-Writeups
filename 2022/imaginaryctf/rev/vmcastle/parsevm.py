functionlist = [0 for i in range(119)]
x = 0
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "returnint"
x += 1
functionlist[x] = "reassign_box_modify_var4_subsub"
x += 1
functionlist[x] = "reassign_box_modify_var4"
x += 1
functionlist[x] = "assign_box_plus_1_param"
x += 1
functionlist[x] = "add"
x += 1
functionlist[x] = "sub"
x += 1
functionlist[x] = "kali"
x += 1
functionlist[x] = "divi"
x += 1
functionlist[x] = "mod"
x += 1
functionlist[x] = "add_iter_by_box"
x += 1
functionlist[x] = "setiterbyvar"
x += 1
functionlist[x] = "compare"
x += 1
functionlist[x] = "putsaneh"
x += 1
functionlist[x] = "input_a13_1028"
x += 1
functionlist[x] = "shl_box_var4_by_param"
x += 1
functionlist[x] = "add_box_var4_by_param"
x += 1
functionlist[x] = "exit_0"

data = open("program","rb").read()
for i in range(0, len(data), 2):
    op = data[i]
    print(functionlist[op], data[i+1])