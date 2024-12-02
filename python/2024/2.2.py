def is_report_valid(report):
    is_increasing = report[0] - report[1] < 0
    max_diff, min_diff = (3, 1) if is_increasing else (-1, -3)

    for i in range(1, len(report)):
        diff = report[i] - report[i - 1]

        if not min_diff <= diff <= max_diff:
            return False

    return True


with open("2.input") as f:
    valid = 0

    for line in f:
        report = list(map(int, line.split()))

        is_valid = is_report_valid(report)

        if is_valid:
            valid += 1
            continue

        for i in range(len(report)):
            changed_report = report[:]
            del changed_report[i]

            if is_report_valid(changed_report):
                valid += 1
                break

    print(valid)
