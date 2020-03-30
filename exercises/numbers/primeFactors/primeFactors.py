def primeFactors(num):

  primeFactors = []

  workingNumber = num

  n = 2
  while n <= num/2:
    while workingNumber % n == 0:
      primeFactors.append(n)
      workingNumber /= n
    n += 1

  return primeFactors

# Function to check arrays
def outputEqualsExpected(output, expected):
  if len(output) != len(expected):
    return False

  i = 0
  while i < len(output):
    if output[i] != expected[i]:
      return False
    i += 1

  return True

if __name__ == "__main__":
  print('Running sanity checks for primeFactors')

  tests = [
    {
      "num": 12,
      "expected": [2,2,3]
    },
    {
      "num": 15,
      "expected": [3,5]
    },
    {
      "num": 121,
      "expected": [11,11]
    },
    {
      "num": 64,
      "expected": [2,2,2,2,2,2]
    }
  ]

  for test in tests:
    print(outputEqualsExpected(primeFactors(test["num"]), test["expected"]))
