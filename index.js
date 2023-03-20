// code your solution here
function saturdayFun(activity = 'roller-skate') {
   return (`This Saturday, I want to ${activity}!`) 
  }
  const wrapAdjective = function (action = 'go to the office'){
    return function (spa="special"){
       return (`You are ${action}${spa}${action}!`)
    }
}

  function mondayWork(ar='go to the office'){
    return (`This Monday, I will ${ar}.`)
  }