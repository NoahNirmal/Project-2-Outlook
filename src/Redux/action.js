const inbox= [
    {
      "mId": "guid-1",
      "unread": true,
      "category":"inbox",

      "subject": "Training Program",
      "content": "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
    },
    {
      "mId": "guid-2",
      "unread": false,
      "category":"inbox",
      "subject": "Empower your future",
      "content": "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
    }
  ]

  const spam=[
    {
      "mId": "guid-3",
      "unread": true,
      "category":"spam",
      "subject": "Pre Approved Loan",
      "content": "Congratulations ! <u>Credit card<u> is being shipped to you today!"
    },
    {
      "mId": "guid-4",
      "unread": true,
      "category":"spam",
      "subject": "You won a lottery!",
      "content": "You have just won the New York official lottery. Please send us your address so that we may start the transfer."
    }
  ]

export const FETCH_INBOX ="FETCH_INBOX";
export const FETCH_SPAM ="FETCH_SPAM";
export const VIEW_DATA =" VIEW_DATA";
export const DELETE_DATA="DELETE_DATA"
export const TRACK_SIDEBAR="TRACK_SIDEBAR"



export function indata(){
    return {
        type:FETCH_INBOX,
        payload :inbox,
    }

}

export function spamdata(){
    return {
        type:FETCH_SPAM,
        payload :spam,
    }

}
export function trackSidebar(category){
    return {
        type:TRACK_SIDEBAR,
        payload :category,
    }
}

export function viewmaildata(id,category){
    return {
        type: VIEW_DATA,
        payload :{ id : id,
        category:category},
    }

}

export function deleteemaildata(category,id){
  return {
      type: DELETE_DATA,
      payload :{
        category:category,
        id : id},
  }

}