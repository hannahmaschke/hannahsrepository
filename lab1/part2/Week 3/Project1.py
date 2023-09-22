# Name: Hannah Maschke
# Date: September 21, 2023
# Assignment: Mini Project 1
# App that asks for the employee's name, hourly wage, and hours worked this week. The app will calculate the total earnings for the week

# Prompt user for name, store it in a variable. strip whitespace
employee_name = input("Enter your first and last name: ").strip()

# Prompt user for their hourly wage, store it in a variable as a double
hourly_wage = float(input("Enter your hourly pay: "))

# Prompt user for their hours worked this week, store it in a variable as a double
hours_worked = float(input("Enter the number of hours that you worked this week: "))

# Calculate their weekly pay by multplying hourly wage * hours worked, store it in a variable
weekly_pay = hours_worked * hourly_wage

# Print weekly pay as an f string, (employee name) earned (weekly pay) this week
print(f"{employee_name} has earned {weekly_pay} dollars this week.")

# Exit prompt
input("Press [enter] to exit ")
