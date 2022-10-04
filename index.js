// code your solution here
// LAB: Implement a function expression called mondayWork. The function should return a String like "This Monday, I will ... .
// " Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". 
// Run learn to verify you've gotten this set of tests passing before continuing with the lesson.

const mondayWork = function(activity) {
    console.log("This Monday, I will" + activity)
}
mondayWork();

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
    }
    function mondayWork(activity = 'go to the office'){
        return `This Monday, I will ${activity}.`
    }
        let wrapAdjective = function(style="*") {
            return function(adjective="special") {
              return `You are ${style}${adjective}${style}!`
            }
          }