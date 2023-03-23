import numpy as np
import soundfile as sf
from circuit import ZLCircuit, simulate_chained_circuits

# Read audio files
audio_files = [sf.read(f'audio-asli/encoded{i}.wav')[0] for i in range(15)]

from concurrent.futures import ThreadPoolExecutor
def compute_error(c, vout_previous, target_audio):
    vout = simulate_chained_circuits([ZLCircuit(1j * c, 1)], vout_previous, 240, 0x4000)[0]
    error = np.mean(np.abs(vout - target_audio))
    print(error, c, chr(c))
    return error, chr(c)

def recover_flag_mt(audio_files):
    flag = ''
    for i in range(1, len(audio_files)):
        min_error = float('inf')
        min_char = None
        vout_previous = audio_files[i - 1] if i > 0 else np.real(audio_files[0]).astype('float64')
        
        with ThreadPoolExecutor() as executor:
            # Create a list of futures
            futures = [executor.submit(compute_error, c, vout_previous, audio_files[i]) for c in range(32, 127)]

            # Get results from the futures
            results = [future.result() for future in futures]

        # Find the character with the minimum error
        min_error, min_char = min(results, key=lambda x: x[0])

        flag += min_char
        print(f"Recovered {i + 1} of {len(audio_files)} characters")
        print(f"FLAG {flag}")

    return flag


import numpy as np
import soundfile as sf
from circuit import ZLCircuit, simulate_chained_circuits

recovered_flag = recover_flag_mt(audio_files)
print("Recovered FLAG:", recovered_flag)

"""
Recovered 15 of 15 characters
FLAG TB~p.le_dance~
Recovered FLAG: TB~p.le_dance~
=> solved to HTB{p0le_dance}
"""