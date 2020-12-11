const initState = {
    projects: [
        {id:'1', title: 'Empower the youths', content: 'help the youths by providing better job oppurtunities'},
        {id:'2', title: 'Praise him for it', content: 'We asked and he listened'},
        {id:'3', title: 'Task force arrest', content: 'He went through the BRT lane so he was arrested'},
        {id:'4', title: 'Praise the Lord', content: 'For He is good and His mercy endureth forever'}
    ]
}

const projectReducer = (state = initState, action) =>{
    return state
}

export default projectReducer