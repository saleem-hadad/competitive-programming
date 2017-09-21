n = raw_input()
nums = map(int, raw_input().strip().split(' '))
print nums.count(max(nums))