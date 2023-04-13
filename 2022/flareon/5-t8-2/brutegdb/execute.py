from subprocess import check_output
print(check_output(["gdb", "--batch", "-ex", "py arg0={};".format(123), "-x", "template.py"]).decode('utf8'))