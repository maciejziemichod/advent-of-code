with open("1.input") as f:
    l1, l2, score = [], {}, 0

    for line in f:
        v1, v2 = line.split()
        l1.append(int(v1))
        v2i = int(v2)

        if v2i in l2:
            l2[v2i] += 1
        else:
            l2[v2i] = 1

    for v in l1:
        if v in l2:
            score += v * l2[v]

    print(score)
