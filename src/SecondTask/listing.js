import PropTypes, { func } from "prop-types";


function Listing({items}) {

    var html = items.map((i) => {
        let title = i.title?.length > 50 ? i.title.substring(50) + "..." : i.title;
        let price = getFormattedPrice(i.currency_code, i.price);
        let quantityClassName = getQuantityClassName(i.quantity);

        return (
            <>
                <div className="item">
                    <div className="item-image">
                    <a href={i.url}>
                        <img src={i?.MainImage?.url_570xN}/>
                    </a>
                    </div>
                    <div className="item-details">
                    <p className="item-title">{title}</p>
                    <p className="item-price">{price}</p>
                    <p className={`item-quantity ${quantityClassName}`}>{i.quantity}</p>
                    </div>
                </div>
            </>
        );
    });
    
    return <><div className="item-list"> {html} </div></>;
}



Listing.defaultProps = {
    items: []
}

export {Listing};





function getFormattedPrice(currency_code, price) {
    var fixedPrice = Number(price).toFixed(2);
    switch(currency_code)
    {
        case "USD":
            return `$${fixedPrice}`;
        case "EUR":
            return `€${fixedPrice}`;
        default:
            return `${fixedPrice} ${currency_code}`;
    }
}

function getQuantityClassName(quantity) {
    if (quantity <= 10)
        return "level-low";
    if (quantity <= 20)
        return "level-medium";
    if (quantity > 20)
        return "level-high";
    
    return "";
}




