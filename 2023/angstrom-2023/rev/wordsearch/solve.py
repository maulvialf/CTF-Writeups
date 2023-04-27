import itertools
import nltk

# Download the words dataset from nltk
nltk.download('words')

# Define the dataset


dataset = """hbjU5
ofM
tCl
Pvh

40Yi
arij
kBr
eIxG
pND7g
uqH
HsfZl
xJaT
BNr

hSaU2
nZ7s
cdwQG

i6q
tin8
8eus
Fvx1
Sop
rR
eRX
sK9
sb8
iro
8v4
efm"""

dataset = dataset.split("\n\n")
dataset = [x.split("\n") for x in dataset]
from pprint import pprint as pp
pp(dataset)
dataset = dataset[3]

# both irregular and inexpressive
# Get English words list
english_words = set(nltk.corpus.words.words())

# Get all possible character combinations
combinations = list(itertools.product(*dataset))

# Check each combination to see if it forms a valid English word
valid_words = []
for combination in combinations:
    word = ''.join(combination)
    if word.lower() in english_words:
        valid_words.append(word)

# Print the valid English words
print("Valid English words found:", valid_words)