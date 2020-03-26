def factorial(n):
  result = n
  if n > 1:
    while n > 1:
      result *= (n - 1)
      n -= 1
  return result

if __name__ == "__main__":
    print('Running sanity checks for factorial')

    print(factorial(3) ==6)
    print(factorial(4) == 24)
    print(factorial(5) == 120)
    print(factorial(6) == 720)
