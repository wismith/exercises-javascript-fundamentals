def isValidTriangle(a, b, c):
  # Handle special cases
  if a <= 0 or b <= 0 or c <= 0:
    return False

  # Rearrange inputs in least -> greatest order
  [x,y,z] = sorted([a,b,c])
  return z < x + y

if __name__ == "__main__":
  print('Running sanity checks for isValidTriangle')

  tests = [
    {
      'array': [1,2,3],
      'expected': False
    },
    {
      'array': [1,3,3],
      'expected': True
    },
    {
      'array': [0,2,3],
      'expected': False
    },
    {
      'array': [7,2,2],
      'expected': False
    }
  ]

  for test in tests:
    print(isValidTriangle(test['array'][0], test['array'][1], test['array'][2]) == test['expected'])
