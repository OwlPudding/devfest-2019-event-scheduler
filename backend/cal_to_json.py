import pickle
import json

with open('events.pkl', 'rb') as f:
    events = pickle.load(f)

print(type(events[1]['start'].get('dateTime')))

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

print(mastercal["events"][1])
#print(mastercal["events"][1])
with open('mstcal.json', 'a') as outfile:  
    #change this
    json.dump(mastercal, outfile)
