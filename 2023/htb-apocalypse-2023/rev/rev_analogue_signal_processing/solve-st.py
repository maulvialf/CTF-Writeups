import numpy as np
import soundfile as sf
from circuit import ZLCircuit, simulate_chained_circuits

# Read audio files
audio_files = [sf.read(f'audio-asli/encoded{i}.wav')[0] for i in range(15)]

def recover_flag(audio_files):
    flag = ''
    for i in range(1, len(audio_files)):
        min_error = float('inf')
        min_char = None
        vout_previous = audio_files[i - 1] if i > 0 else np.real(audio_files[0]).astype('float64')
        for c in range(32, 127):  # ASCII characters from space to ~
            vout = simulate_chained_circuits([ZLCircuit(1j * c, 1)], vout_previous, 240, 0x4000)[0]
            error = np.mean(np.abs(vout - audio_files[i]))
            print(error, min_error, c, chr(c))
            if error < min_error:
                min_error = error
                min_char = chr(c)
        flag += min_char
        print(f"Recovered {i + 1} of {len(audio_files)} characters")
    return flag


import numpy as np
import soundfile as sf
from circuit import ZLCircuit, simulate_chained_circuits

recovered_flag = recover_flag(audio_files)
print("Recovered FLAG:", recovered_flag)