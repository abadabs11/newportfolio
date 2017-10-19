import sys
import re

px = re.compile('(\d*?)px')

def to_rem(match):
	num, = match.groups(0)
	return str(float('0'+ num) / 16) + 'rem'

print(px.sub(to_rem, open(sys.argv[1]).read()))
