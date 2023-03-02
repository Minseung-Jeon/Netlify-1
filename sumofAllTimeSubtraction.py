#initial start of function hierarchy
#getTime() -> timeDifference()
def getTime():
    laterTime = input("laterTime?: ")
    earlierTime= input("earlierTime?: ")

    laterHour=int(laterTime[:2])
    laterMinute=int(laterTime[2:4])
    earlierHour=int(earlierTime[:2])
    earlierMinute=int(earlierTime[2:4])

    timeDifference(laterHour, laterMinute, earlierHour, earlierMinute)


#gets int laterTime - int earlier Time
#timeDifference() -> addUpTimeDifference()
def timeDifference(laterHour, laterMinute, earlierHour, earlierMinute):

    if laterHour == earlierHour:
        hourDifference=0
        minuteDifference = laterMinute-earlierMinute

    elif laterMinute > earlierMinute:
        hourDifference = laterHour-earlierHour
        minuteDifference = laterMinute-earlierMinute

    elif laterMinute < earlierHour:
        hourDifference = laterHour-earlierHour-1
        minuteDifference = (laterMinute+60)-earlierMinute

    else:
        print("unexpected case")


    addUpTimeDifference(hourDifference, minuteDifference)

#adding up time difference whenever the function is called 
#global variable sumOfHours and sumOfMinutes stores the sum
def addUpTimeDifference(hourDifference, minuteDifference):
    global sumOfHours, sumOfMinutes
    
    sumOfHours = sumOfHours + hourDifference
    sumOfMinutes = sumOfMinutes + minuteDifference
   


#####################################################    
sumOfHours = 0
sumOfMinutes = 0
while input("\nDo you want add more input? \ntype \'y\' to continue and \'n\' to discontinue: ") == "y":
    getTime()

print(sumOfHours, "hr", sumOfMinutes, "minute")