pseudocode - train schedule math

 - Get time to next train:

    First train time  : 8:00 am

    Frequency : 25 min

    Current time: 2:00 pm

    Difference between 2 times : 6 hours

    Hours by minutes : 360 minutes

    Difference divided by frequency :

    360 / 25 = 14.4

    Run that through Math.ceil() : 15

    15 - 14.4 = .6

    .6 * 25 = 15 Minutes left 

- Get next train time 

    moment().format("hh:mm a").add(15, "minutes");