n = int(input())

arr = list(map(lambda x: int(x), input().split(' ')))

x = int(input())

diff = abs(x - arr[0])
res_index = 0

for i in range(1, len(arr)):
    new_diff = abs(x - arr[i])

    if new_diff < diff:
        diff = new_diff
        res_index = i

print(arr[res_index])
