with open('input.txt') as f:
    lines = f.read().split(' ')

is_asc = 'YES'
for i in range(len(lines) - 1):
    if lines[i] >= lines[i + 1]:
        is_asc = "NO"

with open('output.txt', 'w') as f:
    f.write(is_asc)
