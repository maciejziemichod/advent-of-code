with open("1.input") as f:
    l1, l2, diffs_sum = [], [], 0

    for line in f:
        v1, v2 = line.split()
        l1.append(int(v1))
        l2.append(int(v2))

    l1.sort()
    l2.sort()

    for i in range(len(l1)):
        diffs_sum += abs(l1[i] - l2[i])

    print(diffs_sum)
