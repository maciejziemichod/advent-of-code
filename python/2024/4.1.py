with open("4.input") as f:
    table = []
    for line in f:
        table.append(list(line.strip()))

    matches = 0

    for i, row in enumerate(table):
        for j, _ in enumerate(row):
            # left
            if j >= 3:
                matches += 1 if (table[i][j] == "X" and
                                 table[i][j - 1] == "M" and
                                 table[i][j - 2] == "A" and
                                 table[i][j - 3] == "S") else 0
            # right
            if j <= len(row) - 4:
                matches += 1 if (table[i][j] == "X" and
                                 table[i][j + 1] == "M" and
                                 table[i][j + 2] == "A" and
                                 table[i][j + 3] == "S") else 0
            # up
            if i >= 3:
                matches += 1 if (table[i][j] == "X" and
                                 table[i - 1][j] == "M" and
                                 table[i - 2][j] == "A" and
                                 table[i - 3][j] == "S") else 0
            # down
            if i <= len(table) - 4:
                matches += 1 if (table[i][j] == "X" and
                                 table[i + 1][j] == "M" and
                                 table[i + 2][j] == "A" and
                                 table[i + 3][j] == "S") else 0
            # top left
            if j >= 3 and i >= 3:
                matches += 1 if (table[i][j] == "X" and
                                 table[i - 1][j - 1] == "M" and
                                 table[i - 2][j - 2] == "A" and
                                 table[i - 3][j - 3] == "S") else 0
            # down right
            if j <= len(row) - 4 and i <= len(table) - 4:
                matches += 1 if (table[i][j] == "X" and
                                 table[i + 1][j + 1] == "M" and
                                 table[i + 2][j + 2] == "A" and
                                 table[i + 3][j + 3] == "S") else 0
            # top right
            if j <= len(row) - 4 and i >= 3:
                matches += 1 if (table[i][j] == "X" and
                                 table[i - 1][j + 1] == "M" and
                                 table[i - 2][j + 2] == "A" and
                                 table[i - 3][j + 3] == "S") else 0
            # down left
            if j >= 3 and i <= len(table) - 4:
                matches += 1 if (table[i][j] == "X" and
                                 table[i + 1][j - 1] == "M" and
                                 table[i + 2][j - 2] == "A" and
                                 table[i + 3][j - 3] == "S") else 0

    print(matches)
