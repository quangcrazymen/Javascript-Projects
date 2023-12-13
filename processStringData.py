name = open ("Data/ListOfHobbies.txt")
newStr = name.read()
# print(newStr)

def add_comma_between_lines(input_string):
    # Split the input string into lines
    lines = input_string.split("\n")

    result_string = ['"' + i +'"' for i in lines]
    # Join the lines with commas
    output_string = ",".join(result_string)


    return output_string

result = add_comma_between_lines(newStr)
with open("Data/ProcessedDataHobbies.txt","w") as file:
    file.write(result)
