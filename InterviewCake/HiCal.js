// Your company built an in-house calendar tool called HiCal. 
// You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as objects with integer properties startTime and endTime. 
// These integers represent the number of 30-minute blocks past 9:00am.

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. 
// Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. 
// In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

function mergeRanges(meetingsArray) {

    const meetingsCopy = JSON.parse(JSON.stringify(meetingsArray));

    const sortedMeetings = meetingsCopy.sort((a, b) => {
        return a.startTime - b.startTime;
    });

    const mergedMeetings = [sortedMeetings[0]];

    for (let i = 1; i < sortedMeetings.length; i++) {
        const currentMeeting = sortedMeetings[i];
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
        
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
        } else {
            mergedMeetings.push(currentMeeting);
        }
    }

    return mergedMeetings;

}