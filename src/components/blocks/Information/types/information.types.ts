export type InformationTextItem = {
    id: number
    title: string
    type: 'text'
    text: string
}

export type InformationListItem = {
    id: number
    title: string
    type: 'list'
    groups: InformationListGroup[]
}

export type InformationTableItem = {
    id: number
    title: string
    type: 'table'
    rows: InformationTableRow[]
}

export type InformationListGroup = {
    title: string
    items: string[]
}

export type InformationTableRow = {
    price: string
    name: string
    text: string
}

export type InformationItemType =
    | InformationTextItem
    | InformationListItem
    | InformationTableItem;