def largest(nums):
  largestSoFar = nums[0]

  for num in nums:
    if num > largestSoFar:
      largestSoFar = num

  return largestSoFar

if __name__ == "__main__":
  print('Running sanity checks for largest')
  print(largest([1,2,3,4]) == 4)
  print(largest([-1,-2,4,0]) == 4)
  print(largest([-3,-2,-1]) == -1)
