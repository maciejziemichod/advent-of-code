import re

with open("3.input") as f:
    memory = f.read().strip()
    values = re.findall(r"mul\([^()]*?\)|do\(\)|don't\(\)", memory)

    is_enabled, mul_sum = True, 0

    for value in values:
        if value == "do()":
            is_enabled = True
            continue

        if value == "don't()":
            is_enabled = False
            continue

        if not is_enabled:
            continue

        s = re.findall(r"mul\(([^()]*?)\)", value)[0].split(",")

        if len(s) != 2 or not s[0].isdigit() or not s[1].isdigit():
            continue

        mul_sum += int(s[0]) * int(s[1])

    print(mul_sum)
