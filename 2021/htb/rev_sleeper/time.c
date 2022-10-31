// LD_PRELOAD=./time.so

static int t = 0x31337;

void sleep(int sec) {
    return 0;
}

void usleep(int sec) {
    return 0;
}

long ptrace(int request, int pid, void *addr, void *data) {
    return 0;
}