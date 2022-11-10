const MarkType = {
    Backlog: 0,
    Ready: 1,
    InProgress: 2,
    Finished: 3,
}

const MarkContainer = {
    [MarkType.Backlog]: 'Backlog',
    [MarkType.Ready]: 'Ready',
    [MarkType.InProgress]: 'In Progress',
    [MarkType.Finished]: 'Finished',
}

export {MarkType, MarkContainer}