function makeItem() {
    return {
        data: {
            item: {
                name: "shoes",
                size: {
                    US: 10,
                    EU: 44
                }
            }
        },
        status: "live"
    }
}



function makeArrayOfItems() {
    return {
        data: {
            items: [
                { name: "shoes", price: 100 },
                {name:"Shirt", price: 250},
            ],
        },
        status: "live"
    }
} 

const { data:{items: [name,price]}, status} = makeArrayOfItems();
console.log(name ,price, status);


// const {data: {items:[name,price],},status} = makeItem();
// console.log(name,price);


// const res = makeItem();
// console.log(res);

// const { status, data:{item} } = makeItem();
// console.log(item);