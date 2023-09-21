arr = list(map(lambda x: int(x), input().split(' ')))

count = 0
i = 1
while i < len(arr) - 1:
    if arr[i - 1] < arr[i] > arr[i + 1]:
        count += 1
        i += 2
    else:
        i += 1

print(count)
