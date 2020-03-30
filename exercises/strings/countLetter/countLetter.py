def countLetter(myString, letter):
  return len(list(filter((lambda x: x == letter), myString)))

if __name__ == "__main__":
  print('Running sanity checks for countLetter')

  print(countLetter('mississippi', 's') == 4)
  print(countLetter('dog', 'g') == 1)
  print(countLetter('fffff', 'f') == 5)
