try:
    from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
    from yaml import Loader, Dumper
import yaml
import io

yamlfile = io.open("_data/team_members.yml")
newobjlist = []
for data in yaml.load_all(yamlfile, Loader):
    #print(data)
    for pairs in data:
        pairs['list_educ'] = []
        for i in range(pairs['number_educ']):
            pairs['list_educ'].append(pairs['education%i' % (i + 1)])
            pairs.pop('education%i' % (i + 1))
        pairs.pop("number_educ")
        newobjlist.append(pairs)
#print(newobjlist)
outfile = io.open("_data/team_members2.yml", "w")
yaml.dump(newobjlist, outfile)
