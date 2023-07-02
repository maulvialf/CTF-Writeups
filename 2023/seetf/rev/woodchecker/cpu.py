"AAAAAAAAAAAAAAAAAAAA"
import sys

# https://github.com/radical-semiconductor/woodpecker#processor-description
class CPU:
    def stat(self):
        # add padding
        return f"addr={self.addr} mem[{self.addr // 8}]={self.mem[self.addr // 8]} store={self.store}"

    def __init__(self):
        self.mem = bytearray(1 << 29)
        self.addr = 0
        self.store = 0
        
    def execute(self, instr):
        match instr.strip().upper():
            case 'INC':  
                # print(f"self.addr += 1")
                print(f"{self.stat()} || addr += 1")
                self.addr += 1
            case 'INV':
                # print(f"self.mem[self.addr // 8] ^= 1 << (self.addr % 8)")
                print(f"{self.stat()} || mem[{self.addr // 8}] ^= 1 << ({self.addr % 8})")
                self.mem[self.addr // 8] ^= 1 << (self.addr % 8)
            case 'LOAD':
                # print(f"self.store = self.mem[self.addr // 8] >> (self.addr % 8) & 1")
                print(f"{self.stat()} || store = mem[{self.addr // 8}] >> ({self.addr % 8}) & 1")
                self.store = self.mem[self.addr // 8] >> (self.addr % 8) & 1
            case 'CDEC':
                print(f"{self.stat()} || addr -= store")
                self.addr -= self.store
            case other:
                raise ValueError(f'Unknown instruction "{other}"')

if __name__ == '__main__':
    argv = sys.argv
    flag = argv[1].encode('ascii')
    # flag = input('Enter flag: ').encode('ascii')
    # flag = "AAAAAAAAAAAAAAAAAAAA".encode('ascii')
    # flag = "BBBBBBBBBBBBBBBBBBBB".encode('ascii')
    # flag = "SEE{_______________}".encode('ascii')
    # flag = "``````````````````_}".encode('ascii')
    # flag = ("\x7f"*20).encode('ascii')
    assert len(flag) == 20, 'Incorrect length'
    
    cpu = CPU()
    cpu.mem[:len(flag)] = flag
    print(cpu.mem[:len(flag)])
    x = 0 
    for instr in open('woodchecker.wpk').readlines():
        # iterate integer
        # print(x, instr.strip(), cpu.addr, cpu.mem[cpu.addr], cpu.store)
        x += 1
        cpu.execute(instr)
    
    # print(cpu.addr)
    print('Correct!' if cpu.store else 'Better luck next time')