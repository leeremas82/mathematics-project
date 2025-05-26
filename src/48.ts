import math

def calculate_expression(expression):
    result = eval(expression)
    return result

expression = "math.sqrt(2) + 3 * (4 - 1)"
print(f"The expression {expression} evaluates to: {calculate_expression(expression)}")
