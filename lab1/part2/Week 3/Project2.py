# Name: Hannah Maschke
# Date: September 21, 2023
# Assignment: Project 2
# App that counts from 1 to 15 and prints "fizz" in place of any number that is divisible by 3, and "buzz" for those divisible by 5



for x in range(1,16):
    

    if x % 3 == 0:
        print("fizz")

    elif x % 5 == 0:
        print("buzz")

    
    elif x % 5 != 0:
        print(x)

    elif x % 3 != 0:
        print(x)

    elif x % 3 and x % 5 != 0:
        print("fizzbuzz")
   
    else:
        print(x)