data = list(map(int, input().split(' ')))

mines_count = data[2]

lines = data[0]
columns = data[1]
mines_coords = []

while mines_count > 0:
    mines_coords.append(list(map(int, input().split(' '))))

    mines_count -= 1

miner_map = []

for i in range(lines):
    miner_map.append([])
    for k in range(columns):
        miner_map[i].append(0)

for mine in mines_coords:
    y = mine[0] - 1
    x = mine[1] - 1

    if x - 1 >= 0 and y - 1 >= 0:
        miner_map[y - 1][x - 1] += 1
    if y - 1 >= 0:
        miner_map[y - 1][x] += 1
    if x + 1 <= columns - 1 and y - 1 >= 0:
        miner_map[y - 1][x + 1] += 1
    if x - 1 >= 0:
        miner_map[y][x - 1] += 1
    if x + 1 <= columns - 1:
        miner_map[y][x + 1] += 1
    if x - 1 >= 0 and y + 1 <= lines - 1:
        miner_map[y + 1][x - 1] += 1
    if y + 1 <= lines - 1:
        miner_map[y + 1][x] += 1
    if x + 1 <= columns - 1 and y + 1 <= lines - 1:
        miner_map[y + 1][x + 1] += 1

for mine in mines_coords:
    y = mine[0] - 1
    x = mine[1] - 1
    miner_map[y][x] = '*'


copy_map = list(map(lambda el: ' '.join(str(elem) for elem in el), miner_map))

print('\n'.join(copy_map))