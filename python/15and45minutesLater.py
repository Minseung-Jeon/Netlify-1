from datetime import datetime


def getCurrentTime(addingAmount):
    now = datetime.now()

    currentHour= int(now.strftime("%H"))
    currentMinute = int(now.strftime("%M"))

    afterXMinutes(currentHour, currentMinute, addingAmount)


def afterXMinutes(currentHour, currentMinute, addingAmount):
    global addedHour, addedMinute

    if currentMinute + addingAmount > 60:
        addedHour = currentHour + 1
        addedMinute = (currentMinute+15) - 60
    
    else:
        addedHour=currentHour
        addedMinute = currentMinute + addingAmount







###############################
addingAmount = int(input("How much minute added? (type it in int): "))
addedHour =0
addedMinute = 0

getCurrentTime(addingAmount)


print(addedHour, addedMinute)