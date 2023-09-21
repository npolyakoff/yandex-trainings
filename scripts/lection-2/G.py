arr = list(map(int, input().strip().split(' ')))
positive_copy = list(filter(lambda x: x >= 0, list(arr)))
negative_copy = list(filter(lambda x: x <= 0, list(arr)))


def get_pair(arr, invert=False):
    if len(arr) <= 2:
        return arr

    arr = list(map(abs, arr))

    max1 = arr[0]
    max2 = arr[1]

    for i in range(2, len(arr)):
        if arr[i] > max1:
            if max1 > max2:
                max2 = max1
            max1 = arr[i]
        elif arr[i] > max2:
            if max2 > max1:
                max1 = max2
            max2 = arr[i]

    if invert:
        return [max1 * -1, max2 * -1]

    return [max1, max2]


if len(arr) == 2:
    arr.sort()
    print(*arr)
else:
    s1 = get_pair(positive_copy)
    s2 = get_pair(negative_copy, True)

    s1.sort()
    s2.sort()

    if len(s1) < 2:
        print(s2[0], s2[1])
    elif len(s2) < 2:
        print(s1[0], s1[1])
    elif s1[0] * s1[1] >= s2[0] * s2[1]:
        print(s1[0], s1[1])
    else:
        print(s2[0], s2[1])
