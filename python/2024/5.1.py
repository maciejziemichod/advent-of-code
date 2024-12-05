with open("5.input") as f:
    rules, updates = map(
        lambda x: x.split(),
        f.read().strip().split("\n\n"))

    rules = list(map(
        lambda x: list(map(lambda y: int(y), x.split("|"))),
        rules))

    updates = list(map(
        lambda x: list(map(lambda y: int(y), x.split(","))),
        updates
    ))

    for before, after in rules:
        i = 0
        updates_len = len(updates)
        while i < updates_len:
            update = updates[i]

            if (
                    before in update and
                    after in update and
                    update.index(before) > update.index(after)):
                updates_len -= 1
                del updates[i]

            i += 1

    result = sum(map(lambda update: update[len(update) // 2], updates))

    print(result)
