import functools
import json

def datacleaner():
    #to remove all the all-day events, use this function:
    def clean_events(dictionary):
        i = 0
        #import pdb; pdb.set_trace()
        while i < len(dictionary['events']):
            if dictionary['events'][i]['allDay?']:
                dictionary['events'].remove(dictionary['events'][i])
                continue
            i=i+1

    #Function that Breaks the list into a separate list for the events of each day:
    #The input is the json dictionary and the output is the same dictionary, but modified as you wanted it to be.

    def split_toDays(dictionary):
        newlist=list()
        sublist = list()
        sublist.append(dictionary['events'][0])
        for i in range(0,len(dictionary['events'])-1):
            a,b,c=str.split(str.split(dictionary['events'][i]['end'],'T')[0],'-')
            d,e,f=str.split(str.split(dictionary['events'][i+1]['end'],'T')[0],'-')
            if (a==(d) and b==(e) and c==(f)):
                sublist.append(dictionary['events'][i+1])
            else:
                newlist.append(sublist)
                sublist = list()
                sublist.append(dictionary['events'][i+1])
        dictionary['events']=newlist
        return dictionary

    with open("mstcal.json", "r") as read_file:
        calendar = json.load(read_file)

    clean_events(calendar)
    #sorted(calendar['events'], key=functools.cmp_to_key(compare_events))
    calendar = split_toDays(calendar)

    with open('cleaned.json', 'w') as outfile:  
        #merge and write json
        json.dump(calendar, outfile)
