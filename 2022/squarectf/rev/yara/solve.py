# yara bytecode extract
x = """\
000000 3c00f03c 5f 3c 39 07 64 2 f0f
000000 3c01f03c 33 3c 5f 07 64 012 f0f
000000 3c02f03c f8 3c 99 07 64 012 f0f
000000 3c03f03c 53 3c 34 07 64 012 f0f
000000 3c04f03c f8 3c 83 07 64 012 f0f
000000 3c05f03c 9a 3c f7 07 64 012 f0f
000000 3c06f03c dd 3c ee 07 64 012 f0f
000000 3c07f03c 5c 3c 6f 07 64 012 f0f
000000 3c08f03c f9 3c 8d 07 64 012 f0f
000000 3c09f03c f9 3c a6 07 64 012 f0f
000000 3c0af03c c8 3c a5 07 64 012 f0f
000000 3c0bf03c 80 3c e5 07 64 012 f0f
000000 3c0cf03c 86 3c d9 07 64 012 f0f
000000 3c0df03c 0d 3c 3c 07 64 012 f0f
000000 3c0ef03c 65 3c 0b 07 64 012 f0f
000000 3c0ff03c 77 3c 28 07 64 012 f0f
000000 3c10f03c 8f 3c b8 07 64 012 f0f
000000 3c11f03c 80 3c e8 07 64 012 f0f
000000 3c12f03c aa 3c 99 07 64 012 f0f
000000 3c13f03c 28 3c 77 07 64 012 f0f
000000 3c14f03c 69 3c 08 07 64 012 f0f
000000 3c15f03c 56 3c 24 07 64 012 f0f
000000 3c16f03c a1 3c 92 07 64 012 f0f
000000 3c17f03c 2a 3c 44 07 64 012 f0f
000000 3c18f03c ec 3c d8 07 64 012 f0f
000000 3c19f03c ea 3c 97 07 64 011 d00\
"""
x = x.split("\n")
flag = ""
# xor the operand
for i in x:
	item1 = i.split("f03c ")[1].split(" 3c")[0]
	item2 = i.split(" 3c ")[1].split(" 07")[0]
	item1 = eval("0x"+item1)
	item2 = eval("0x"+item2)
	# print(chr(item1 ^ item2))
	flag += chr(item1 ^ item2)
	print(flag)