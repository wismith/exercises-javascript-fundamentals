def isOdd(num):
  return num % 2 != 0

if __name__ == "__main__":
    print('Runing sanity checks for isOdd')
    oddNumbers = [1,3,7,29,683]
    for num in oddNumbers:
      print(isOdd(num) == True)
      print(isOdd(num + 1) == False)
