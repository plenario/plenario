import tweepy, time, sys

argfile = str(sys.argv[1])

CONSUMER_KEY = 'Bh3a9Dgsnsbgz2EFTa9dXiEKJ'
CONSUMER_SECRET = 'G0A529opJGtdtOq0yzTiWaYJHxIanXE9oPwFlSKgifuGAIOcPh'
ACCESS_KEY = '888591754127171585-vxqmsjInlR9MOrnIKjcF4ENF4nYVsjC'
ACCESS_SECRET = 'M826DjrMXYHTc8ITBtionwIspIBVlvrVepBGrxs9lDc7y'

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

filename = open(argfile, 'r')
f=filename.readlines()
filename.close()

for line in f:
	api.update_status(line)
	time.sleep(100)

