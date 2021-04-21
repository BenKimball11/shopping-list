const items = [
    {
        id: 1,
        item: "milk",
        price: 3.50
    },
    {
        id: 2,
        item: "eggs",
        price: .80
    },
    {
        id: 3,
        item: "bananas",
        price: 3.59
    },
    {
        id: 4,
        item: "chicken",
        price: 6.50
    },
    {
        id: 5,
        item: "almonds",
        price: 2.50
    },
]

const dateCreated = Date()

const addToShoppingList = (newItem) => {
    /*
       Step 1: Get maximum id current in array
   */
   // Get index of last item in array
 const lastIndex = items.length - 1

   // Get the last object in the array
 const currentLastItem = items[lastIndex]

   // Get id property value of last phone
 const maxId = currentLastItem.id
   /*
       Step 2: Increase the current max id by 1
   */
 const idForNewItem = maxId + 1

     /*
       Step 3: Add the id property to the phone object
   */
 newItem.id = idForNewItem
  /*
       Step 4: Add the phone object to the array
   */

newItem.dateCreated = dateCreated


 items.push(newItem)
}

const pickles = 
{
 name: "pickles",
 price: 4.00,
};
const jam = 
{
 name: "jam",
 price: 6.00,
};
const bagels = 
{
 name: "bagels",
 price: 10,
};
const apples = 
{
 name: "Apples",
 price: 8,
};
const potatos = 
{
 name: "potatos",
 price: 5,
};


addToShoppingList(pickles)
addToShoppingList(jam)
addToShoppingList(bagels)
addToShoppingList(apples)
addToShoppingList(potatos)




for (const item of items) {
    if (item.price >= 8) {
        
        console.log(item)
    }
}
