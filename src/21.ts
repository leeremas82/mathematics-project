class Solution:
    def calculate(self, expression: str) -> float:
        """
        Perform arithmetic operations on the given mathematical expression.
        The expression is provided as a string where each character represents either an operator or an operand (number).
        
        Example:
        >>> self.calculate("1 + 2 * 3")
        7.0
        
        :param expression: A string representing the mathematical expression.
        :return: The result of performing arithmetic operations on the given expression.
        """
        # Splitting the expression into operator and operand arrays
        tokens = expression.split(' ')
        
        if len(tokens) > 1:
            # Handling multiplication operation
            if tokens[0] == '*' and tokens[-1] == '*':
                return float(tokens[1]) * float(tokens[2])
            
            # Handling division operation
            if tokens[0] == '/' and tokens[-1] == '/':
                return float(tokens[1]) / float(tokens[2])
        
        elif len(tokens) == 1:
            # Handling addition or subtraction operations
            if tokens[0] in '+-':
                return float(tokens[1]) + float(tokens[2])
            
            else:
                return float(tokens[1])

# Example usage
solution = Solution()
print(solution.calculate("1 + 2 * 3"))  # Output: 7.0
