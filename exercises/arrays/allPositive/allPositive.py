def allPositive(nums):
  if type(nums) != list:
    print('Parameter must be a list')

  for num in nums:
    if num <= 0:
      return False
  return True

if __name__ == "__main__":
    print('Running Sanity checks for allPositive')

    print(allPositive([1,2,3,4]) == True)
    print(allPositive([0,1,2,3]) == False)
    print(allPositive([-1,-2,-3,-4]) == False)
