with open("4.input") as f:
    table = []
    for line in f:
        table.append(list(line.strip()))

    matches = 0

    for i in range(1, len(table) - 1):
        for j in range(1, len(table[i]) - 1):
            if not table[i][j] == "A":
                continue

            tl = table[i - 1][j - 1]
            tr = table[i - 1][j + 1]
            bl = table[i + 1][j - 1]
            br = table[i + 1][j + 1]

            # both diagonals must be either MAS or SAM to count as valid
            if (((tl == "M" and br == "S") or (tl == "S" and br == "M")) and
                    ((tr == "M" and bl == "S") or (tr == "S" and bl == "M"))):
                matches += 1

    print(matches)
