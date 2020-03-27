def shortestWord(myString):
  wordList = myString.split()

  """ shortest = wordList[0]
  for word in wordList:
    if len(word) < len(shortest):
      shortest = word
  return shortest """

  from functools import reduce
  result = reduce((lambda a,b: a if len(a) < len(b) else b), wordList)
  return result

if __name__ == "__main__":
  print('Running sanity checks for shortestWord')
  print(shortestWord('hi what is up') == 'up')
  print(shortestWord('i am going to the store') =='i')
