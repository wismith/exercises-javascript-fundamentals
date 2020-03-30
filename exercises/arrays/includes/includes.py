def includes(haystack, needle):

  for item in haystack:
    if item == needle:
      return True
  return False

if __name__ == "__main__":
  print('Running sanity checks for includes')

  print(includes([1,2,3,4], 4) == True)
  print(includes([1,2,3,4], 5) == False)
