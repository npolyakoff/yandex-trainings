n = int(input())

arr = []

if n > 0:
    arr = list(map(lambda x: int(x), input().split(' ')))

last = []
acc = []
i = 0
last_i = len(arr) - 1

while i < len(arr):
    if arr[i] != arr[last_i]:
        if len(acc) > 0:
            acc.append(arr[i])
            last.extend(acc)
            acc = []
        else:
            last.append(arr[i])
        last_i = len(arr) - 1
    else:
        acc.append(arr[i])
        last_i -= 1

    i += 1

last.reverse()

last = list(map(lambda x: str(x), last))

leng = len(last)
print(leng)
if leng > 0:
    print(' '.join(last))
