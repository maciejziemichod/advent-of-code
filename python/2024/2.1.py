with open("2.input") as f:
    valid = 0

    for line in f:
        report = list(map(int, line.split()))

        valid += 1

        is_increasing = report[0] - report[1] < 0
        max_diff, min_diff = (3, 1) if is_increasing else (-1, -3)

        for i in range(1, len(report)):
            diff = report[i] - report[i - 1]

            if not min_diff <= diff <= max_diff:
                valid -= 1
                break

    print(valid)
