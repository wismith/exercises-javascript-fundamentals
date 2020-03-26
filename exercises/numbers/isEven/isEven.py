
def isEven(num):
  if num % 2 == 0:
    return True
  else:
    return False


if __name__ == "__main__":
  print('Running sanity checks for isEven')

  evenNumbers = [2,20,100,768]

  print(isEven(0) == True)

  for num in evenNumbers:
    print(isEven(num) == True)
    print(isEven(num + 1) == False)
