import numpy as np
import soundfile as sf

# Read the provided files
impulse_response, rate = sf.read('impulse_response.wav')
shuffled_flag, _ = sf.read('shuffled_flag.wav')

# Compute the FFT of the impulse_response
impulse_response_fft = np.fft.rfft(impulse_response)

# Compute the inverse of the frequency response
inverse_frequency_response = 1 / impulse_response_fft
inverse_frequency_response[0] = 0

# Define a new filter function that applies the inverse frequency response
def inverse_filter(sample):
    amplitudes = np.fft.rfft(sample)
    recovered_amplitudes = amplitudes * inverse_frequency_response
    return np.fft.irfft(recovered_amplitudes)

# Apply the inverse filter to the shuffled_flag
recovered_flag = inverse_filter(shuffled_flag)

# Save the recovered signal as a new WAV file
sf.write('recovered_flag.wav', recovered_flag, rate)

# HTB{th1s_w@s_l0w_eff0rt}