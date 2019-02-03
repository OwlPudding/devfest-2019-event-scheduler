import json
import re

def scheduler():
    freetime = []
    #import pdb; pdb.set_trace()
    def scheduleday():
        #schedule[0].start > DAYSTART
        
        if compare_events(schedule[0]['start'], DAYSTART) > 0:
            
            freespace(DAYSTART, schedule[0]['start'])

        for n in range(len(schedule) - 2):
            if compare_events(schedule[n+1]['start'], schedule[n]['end']) <= 0:
            #schedule[n+1].start <= schedule[n].end:
                pass
                
            else:
                
                freespace(schedule[n]['end'], schedule[n+1]['start'])

        if compare_events(schedule[len(schedule)-1]['end'], DAYEND) < 0:
        #schedule[n-1].end < DAYEND:
            freespace(schedule[len(schedule)-1]['end'], DAYEND)

    def freespace(start, end):
        
        new_freespace = { 
                "title": 'Free',
                "start": start,
                "end": end,
                "allDay?": False,
                "resource?": None
        }

        freetime.append(new_freespace)



    """
    def scheduler:
        if schedule[0].start != DAYSTART:
            freespace(DAYSTART, schedule[1].start)
        else:
            schedule(n)

    def schedule(n):
        while(n < len(schedule))
        if schedule[n+1].start > schedule[n].end:
            schedule(n+1)
        else:
            freespace(schedule[n].end, schedule[n+1].start)

    """

    def compare_events_byDay(a,b): #a and b are expected to be event objects
        #print(a)
        #print(b)
        
        a_startnum = int(re.sub('-', '', str.split(a,'T')[0]))
        b_startnum = int(re.sub('-', '', str.split(b,'T')[0]))
        #print(a_startnum)
        #print(b_startnum)
        if(a_startnum<b_startnum):
            return -1
        elif (a_startnum>b_startnum):
            return 1
        else:
            a_endnum = int(re.sub('-', '', str.split(a,'T')[0]))
            b_endnum = int(re.sub('-', '', str.split(b,'T')[0]))
            if(a_endnum==b_endnum):
                return 0
            elif (a_endnum>b_endnum):
                return 1
            else:
                return -1


    def compare_events(a,b):
        outnum=compare_events_byDay(a,b)
        if (outnum!=0):
            return outnum
        else:
            a_starttime = int(re.sub(':','',str.split(str.split(a,'T')[1],'-')[0]))
            a_endtime = int(re.sub(':','',str.split(str.split(a,'T')[1],'-')[1]))
            b_starttime = int(re.sub(':','',str.split(str.split(b,'T')[1],'-')[0]))
            b_endtime = int(re.sub(':','',str.split(str.split(b,'T')[1],'-')[1]))
            if(a_starttime<b_starttime):
                return -1
            elif(a_starttime>b_starttime):
                return 1
            else:
                if(a_endtime<b_endtime):
                    return -1
                elif(a_endtime>b_endtime):
                    return 1
                else:
                    return 0

    with open("cleaned.json", "r") as read_file:
    # import pdb; pdb.set_trace()
        days = json.loads(read_file.read())['events']

    #print(type(days))



    #print(days)

    for m in range(0,len(days)):

        schedule = days[m]
        #print(schedule)
        date = schedule[0]['start'][:10]
        DAYSTART = date + "T07:00:00-05:00"
        DAYEND = date + "T24:00:00-05:00"
        scheduleday()

    print(freetime)
    with open('freetime.json', 'w') as outfile:  
        json.dump(freetime, outfile)