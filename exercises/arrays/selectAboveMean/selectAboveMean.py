# Import reduce function
from functools import reduce



def selectAboveMean(numberList):
  # Get mean of list
  sum = reduce((lambda x,y: x + y), numberList)
  mean = sum/len(numberList)

  result = list(filter((lambda x: x > mean), numberList))
  return result

if __name__ == "__main__":
  print('Running sanity checks for selectAboveMean')

  tests = [
    {
      'list':[1,2,3,4],
      'expected': [3,4]
    },
    {
      'list': [1,2,3,100],
      'expected': [100]
    }
  ]
  for test in tests:
    print(selectAboveMean(test['list']) == test['expected'])
