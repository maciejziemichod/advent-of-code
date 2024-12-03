import re

with open("3.input") as f:
    memory = f.read().strip()
    values = map(
        lambda v: int(v[0]) * int(v[1]),
        filter(
            lambda v: len(v) == 2 and v[0].isdigit() and v[1].isdigit(),
            map(
                lambda m: m.split(","),
                re.findall(r"mul\(([^()]*?)\)", memory))))

    print(sum(list(values)))
