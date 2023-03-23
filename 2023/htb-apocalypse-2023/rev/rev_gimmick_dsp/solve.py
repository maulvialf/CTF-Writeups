import numpy as np
import soundfile as sf

# Read the provided files
data, rate = sf.read('flag.wav')
# Function to reverse the audio
def reverse_audio(data):
    reversed_audio_data = data[::-1]
    return reversed_audio_data

def invert_audio(data):
    reversed_audio_data = -data
    return reversed_audio_data


data = reverse_audio(data)
data = invert_audio(data)

# apply a high-pass filter to remove low-frequency noise
from scipy.signal import butter, lfilter

normalized_data = data / np.max(np.abs(data))

def highpass_filter(data, samplerate, cutoff_freq=100):
    nyquist_freq = 0.5 * samplerate
    cutoff_freq_norm = cutoff_freq / nyquist_freq
    b, a = butter(4, cutoff_freq_norm, btype='highpass')
    filtered_data = lfilter(b, a, data)
    return filtered_data

filtered_data = highpass_filter(normalized_data, rate)

# amplify the sound by a factor of 2
# amplified_data = filtered_data * 2

# # write the processed sound to a new file
# new_filename = "processed_example.wav"
# sf.write(new_filename, amplified_data, samplerate)

sf.write('recovered_flag.wav', amplified_data, rate)

# HTB{d1d_y0u_bl@ck_b0x_th1s?}