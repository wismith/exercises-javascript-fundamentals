def isPrime(num):
  if num == 1:
    return False

  for n in range(2,int(num**(1/2))+1):
    if num % n == 0:
      return False
  return True

print(isPrime(3)==True)
