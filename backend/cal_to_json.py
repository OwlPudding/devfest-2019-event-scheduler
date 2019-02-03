import pickle
import json


def merge(old, new):
    new['events'] = old['events'] + new['events']
    return new


with open('events.pkl', 'rb') as f:
    events = pickle.load(f)

#print(type(events[1]['start'].get('dateTime')))

mastercal = {"events":[]}
for event in events:
    masterevent = {
            "title": event['id'],
            "start":event['start'].get('dateTime', event['start'].get('date')),
            "end":event['end'].get('dateTime', event['end'].get('date')),
            #super hacky but oh well--needs fixing later
            "allDay?": event['start'].get('dateTime') is None,
            "resource?": None
    }

    mastercal["events"].append(masterevent)

#print(mastercal["events"][1])

with open('mstcal.json', 'rb') as read_file:
    old_json = json.loads(read_file.read())# read json

merged_json = merge(old_json, mastercal)

with open('mstcal.json', 'w') as outfile:  
    #merge and write json
    json.dump(merged_json, outfile)

