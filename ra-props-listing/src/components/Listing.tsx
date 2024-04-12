import Item from "./Item"

interface ItemProps {
    listing_id: number,
    url: string,
    MainImage: MainImage,
    title: string,
    currency_code: string,
    price: string,
    quantity: number
}

type MainImage = {
    url_570xN: string
}

type propsList = {
    items : [ItemProps]
}
export default function Listing({items} : propsList){
    return (
        <div className="item-list">
            {items.map(item => 
                <Item item = {item}/>)}
        </div>
    )
}