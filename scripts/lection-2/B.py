lines = list()

while True:
    n = int(input())
    if n != -2000000000:
        lines.append(n)
    else:
        break

res_dict = {
    'asc': 0,
    'desc': 0,
    'const': 0,
}

for i in range(1, len(lines)):
    if lines[i - 1] < lines[i]:
        res_dict['asc'] += 1
    elif lines[i - 1] > lines[i]:
        res_dict['desc'] += 1
    elif lines[i - 1] == lines[i]:
        res_dict['const'] += 1
    else:
        break

result = 'RANDOM'

if res_dict['asc'] > 0:
    if res_dict['desc'] > 0:
        result = 'RANDOM'
    elif res_dict['const'] > 0:
        result = 'WEAKLY ASCENDING'
    else:
        result = 'ASCENDING'
elif res_dict['desc'] > 0:
    if res_dict['asc'] > 0:
        result = 'RANDOM'
    elif res_dict['const'] > 0:
        result = 'WEAKLY DESCENDING'
    else:
        result = 'DESCENDING'
else:
    result = 'CONSTANT'

print(result)
