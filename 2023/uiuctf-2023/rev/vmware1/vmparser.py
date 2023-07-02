from pwn import *
"""
      switch ( *(_BYTE *)v2 )
      {
        case 0:
          return 0LL;
        case 1:
          v11 = v10 - 2;
          *v11 += v11[1];
          v10 = v11 + 1;
          goto LABEL_31;
        case 2:
          v12 = v10 - 2;
          *v12 -= v12[1];
          v10 = v12 + 1;
          goto LABEL_31;
        case 3:
          v13 = v10 - 2;
          *v13 &= v13[1];
          v10 = v13 + 1;
          goto LABEL_31;
        case 4:
          v14 = v10 - 2;
          *v14 |= v14[1];
          v10 = v14 + 1;
          goto LABEL_31;
        case 5:
          v15 = v10 - 2;
          *v15 ^= v15[1];
          v10 = v15 + 1;
          goto LABEL_31;
        case 6:
          *(v10 - 2) = (unsigned __int8)*(v10 - 2) << *(v10 - 1);
          --v10;
          goto LABEL_31;
        case 7:
          *(v10 - 2) = (int)(unsigned __int8)*(v10 - 2) >> *(v10 - 1);
          --v10;
          goto LABEL_31;
        case 8:
          *v10++ = getchar();
          goto LABEL_31;
        case 9:
          putchar((unsigned __int8)*--v10);
          goto LABEL_31;
        case 10:
          v4 = v9;
          v9 = (unsigned __int16 *)((char *)v9 + 1);
          *v10++ = *(_BYTE *)v4;
          goto LABEL_31;
        case 11:
          if ( (char)*(v10 - 1) < 0 )
            v9 = (unsigned __int16 *)((char *)v9 + (__int16)_byteswap_ushort(*v9));
          ++v9;
          goto LABEL_31;
        case 12:
          if ( !*(v10 - 1) )
            v9 = (unsigned __int16 *)((char *)v9 + (__int16)_byteswap_ushort(*v9));
          ++v9;
          goto LABEL_31;
        case 13:
          v9 = (unsigned __int16 *)((char *)v9 + (__int16)_byteswap_ushort(*v9) + 2);
          goto LABEL_31;
        case 14:
          --v10;
          goto LABEL_31;
        case 15:
          *v10 = *(v10 - 1);
          ++v10;
          goto LABEL_31;
        case 16:
          v5 = v9;
          v9 = (unsigned __int16 *)((char *)v9 + 1);
          v6 = *(_BYTE *)v5;
          if ( *(unsigned __int8 *)v5 > v10 - v16 )
            printf("Stack underflow in reverse at 0x%04lx\n", (char *)v9 - (char *)a1);
          for ( i = 0; i < v6 >> 1; ++i )
          {
            v7 = v10[i - v6];
            v10[i - v6] = v10[~i];
            v10[~i] = v7;
          }
          goto LABEL_31;
        case 40:
          sub_556157A3C370((__int64)a1, (__int64)v16, (__int64)v10, (char *)v9 - (char *)a1);
"""

from sys import argv

def byteswap_ushort(value):
    return ((value & 0xFF) << 8) | ((value & 0xFF00) >> 8)

named = argv[1]
data = open(named, "rb").read()
# for i in range(0, len(data), 2):
i = 0
while (i < len(data) - 1):
    opcode = data[i]
    if opcode == 0:
        print(f"{opcode} exit")
        # print(f"{i} {opcode} exit")        
        i += 1
        continue

    elif opcode == 1:
        # v11 = v10 - 2
        # v11[0] += v11[1]
        # v10 = v11 + 1
        print(f"{opcode} add")
        # print(f"{i} {opcode} add")        
        i += 1
        continue

    elif opcode == 2:
        # v12 = v10 - 2
        # v12[0] -= v12[1]
        # v10 = v12 + 1
        print(f"{opcode} sub")
        # print(f"{i} {opcode} sub")        
        i += 1
        continue

    elif opcode == 3:
        # v13 = v10 - 2
        # v13[0] &= v13[1]
        # v10 = v13 + 1
        print(f"{opcode} and")
        # print(f"{i} {opcode} and")        
        i += 1
        continue

    elif opcode == 4:
        # v14 = v10 - 2
        # v14[0] |= v14[1]
        # v10 = v14 + 1

        print(f"{opcode} or")
        # print(f"{i} {opcode} or")        
        i += 1
        continue

    elif opcode == 5:
        # v15 = v10 - 2
        # v15[0] ^= v15[1]
        # v10 = v15 + 1
        print(f"{opcode} xor {data[i+1] }")
        # print(f"{i} {opcode} xor {data[i+1] }")        
        i += 1
        continue

    elif opcode == 6:
        # v10[-2] = v10[-2] << v10[-1]
        # v10 = v10[:-1]
        print(f"{opcode} shl")
        # print(f"{i} {opcode} shl")        
        i += 1
        continue

    elif opcode == 7:
        # v10[-2] = (v10[-2] & 0xFF) >> v10[-1]
        # v10 = v10[:-1]
        print(f"{opcode} shr")
        # print(f"{i} {opcode} shr")        
        i += 1
        continue

    elif opcode == 8:
        # v10.append(ord(input()))
        print()
        print(f"{opcode} input")
        # print(f"{i} {opcode} input")        
        i += 1
        continue

    elif opcode == 9:
        # v10 = v10[:-1]
        print(f"{opcode} puts")
        # print(f"{i} {opcode} puts")        
        i += 1

        continue

    elif opcode == 10:
        # v4 = v9
        # v9 = v9[1:]
        # v10.append(v4[0])
        chrp = chr(data[i+1])
        # check chrp not printable
        
        if not chrp.isascii():
          chrp = ""
        print(f"{opcode} push  {data[i+1]}  ")
        # print(f"{i} {opcode} push  {data[i+1]}  ")        
        i += 2

        continue

    elif opcode == 11:
        # if v10[-1] < 0:
        #     v9 = v9[1:]
        # v9 = v9[1:]
        print(f"{opcode} jump negative {data[i+1]} {data[i+2]}")
        # print(f"{i} {opcode} jump negative {data[i+1]} {data[i+2]}")        
        i += 3
        continue
    elif opcode == 12:
        # if v10[-1] == 0:
        #     v9 = v9[1:]
        # v9 = v9[1:]
        # print(len(data[i+1:i+3]))
        eq = u16(data[i+1:i+3])
        eq = byteswap_ushort(eq)
        import ctypes
        eq = ctypes.c_short(eq).value 
        eq += eq
        print(f"{opcode} jump zero {eq}")
        # print(f"{i} {opcode} jump zero {eq}")        
        i += 3
        continue

    elif opcode == 13:
        # [heap]:00005620E37C18C3 unk_5620E37C18C3 db 0FFh     
        # [heap]:00005620E37C18BE unk_5620E37C18BE db  0Ch
        # v9 = v9[1:]
        # print(len(data[i+1:i+3]))
        eq = u16(data[i+1:i+3])
        eq = byteswap_ushort(eq) 
        import ctypes
        eq = ctypes.c_short(eq).value
        eq += 3
        # eq += eq

        print(f"{opcode} jump  {eq}")
        # print(f"{i} {opcode} jump  {eq}")        
        i += 3

        continue

    elif opcode == 14:
        # v10 = v10[:-1]
        print(f"{opcode} pop")
        # print(f"{i} {opcode} pop")        
        i += 1

        continue

    elif opcode == 15:
        # v10.append(v10[-1])
        print(f"{opcode} dup")
        # print(f"{i} {opcode} dup")        
        i += 1
        continue

    elif opcode == 16:
        print(f"{opcode} reverse")
        # print(f"{i} {opcode} reverse")        
        i += 2
        continue
    
    elif opcode == 17:
        print(f"{opcode} bit mask")
        # print(f"{i} {opcode} bit mask")        
        i += 1
        continue

    else:
        print(f"unknown upcode {opcode}")
        exit()

# uiuctf{AAAAAAAA}
# AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
# ABCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA