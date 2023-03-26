# Jumpit

Using https://github.com/Perfare/Il2CppDumper

Provide ill2cpp.so and global-metada

File below would generated inside directory

1. ill2cpp.h
2. script.json
3. dump.cs
4. stringliteral.json

After that open ill2cpp.so to ida.

Run ida_with_struct_py3.py or ida_py3.py to ida.

Provide required file by script that already generated to ida (ill2cpp.h, script.json and literal.json)

Wait until script completed

After that program flow should able to viewed
