
def isMultipleOf(n, d):
  try:
    return n % d == 0
  except ZeroDivisionError:
    print('Cannot divide by zero. Try again')
  except FloatingPointError:
    print('A floating point error occurred.')
  else:
    print('An unidentified error occurred.')


if __name__ == "__main__":
  print('Running sanity checks for isMultipleOf')
  print(isMultipleOf(4,2) == True)
  print(isMultipleOf(6,2) == True)
  print(isMultipleOf(27,3) == True)
  print(isMultipleOf(3, 1.5) == True)
