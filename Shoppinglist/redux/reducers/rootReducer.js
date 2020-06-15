

const initialState = {

    initValue: {

        categories: [

            {

                name: "Groceries",

                general: [],

                subCategories: [

                    { 
                        name: "drinks",

                        general: [],
                    
                        items: [

                            { name: "Juice" },
                            { name: "Milk" },
                            { name: "Coffee" }

                        ]
                    },

                    { 
                        name: "toiletry",

                        general: [],

                        items: [

                        { name: 'Toilet Paper' },
                        { name: 'Toothpaste' },
                        { name: 'Hand Soap' }

                        ]
                    },

                    { 
                        name: "frozen_foods", 

                        general: [],
                        
                        items: [

                        { name: 'Frozen Pizza'},
                        { name: 'Fries' },
                        { name: 'Frozen Fruits' }

                        ]
                    },

                    { 
                        name: "meats",
                        
                        general: [],
                        
                        items: [

                        { name: 'Chicken' },
                        { name: 'Ground Beef' },
                        { name: 'Hot Dogs' }
                        ]
                    },

                    { 
                        name: "fruits",
                        
                        general: [],

                        items: [

                        { name: 'Bananas' },
                        { name: 'Apples' },
                        { name: 'Peaches' }
                        ]
                    },

                    { 
                        name: "vegetables", 

                        general: [],
                        
                        items: [

                        { name: 'Tomatoes' },
                        { name: 'Beans' },
                        { name: 'Onions' }

                        ]
                    },

                    { 
                        name: "bakingGoods",

                        general: [],

                        items: [

                        { name: 'Flour' },
                        
                        ]
                    },

                ]

            },

            {
                name: 'Electronics',

                general: [],

                subCategories: [

                   { 
                       name: "audio",
                       
                       items: [

                            { name: 'Speakers' },
                            { name: 'Headphones' }
                        
                       ]

                   },

                    { 
                        name: "video",
                        
                        items: [

                            { name: 'Camera' },
                            { name: 'Tripod' }
                        ]
                    },

                    { 
                        name: "computers",
                        
                        items: [

                            { name: 'RaspberryPie' },
                            { name: 'Dell Latitude' }
                        ]
                    },

                    { 
                        names: "phones",
                        
                        items: [

                            { name: 'Samsung S8'}
                        ]
                    }

                ]

            },

            {
                name: "Furniture",

                general: [],

                subCategories: [
                    
                    { 

                        name: "Office",

                        general: [],
                        
                        items: [

                            { name: 'Office Chair' },
                            { name: 'Trash Can'}
                        ]
                    },

                    {
                        name: "bed room", 
                        
                        item: [

                            { name: 'Bed' },
                            { name: 'Dresser' },
                            { name: ''}
                        ]
                    },

                    { 
                        name: "living room",
                        
                        items: [

                            { name: 'Couch' },
                            { name: 'Coffee Table' },
                            { name: 'TV Stand' }
                        ]
                    },

                    { 
                        name: "bath room",
                        
                        items: [

                            { name: 'Toils' },
                            { name: 'Faucet' },
                        
                        ]
                    },

                    { 
                        name: "child_room",
                        
                        items: [

                            { name: 'Bed' },
                            { name: 'Bookcase' }
                        ]
                    },

                    { 
                        name: "guest room",
                        
                        items: [

                            { name: 'Bed'}
                        ]
                    }
                ]
            },

            {
                name: 'Clothing',

                general: [],

                subCategories: [
                    
                    { 
                        name: "winter ware",
                        
                        items: [

                            { name: 'Winter Hats'}
                        ]
                    },

                    { 
                        name: "summer_ware",
                        
                        items: [

                            { name: 'Shorts' }
                        ]
                    },

                    { 
                        name: "shoes",
                        
                        items: [

                        { name: 'Crocks'}
                        ]
                    },

                    { 
                        name: "accessories", 
                        
                        items: [

                        { name: 'Belt' },
                        { name: 'Earrings' }
                        ]
                    }
                ]

            },

            {

                name: "SchoolSupplies",
                
                general: [],
                
                subCategories: [

                    {
                        name: "art",
                        items: []
                    },
    
                    { 
                        name: "phys_ed",
                        items: []
                    },

                    {
                        name: "math",
                        items: []
                    },

                    { 
                        name: "science", 
                        items: []
                    },

                    {
                        name: "history",
                        items: []
                    },
                ]




            },

            {

                name: "Misc",

                general: [],

                subCategories: [] 

            }

        ]

    },

    homeState: [
        {name: "Milk", qnty: 3, price: 5000},
        {name: "Eggs", qnty: 30, price: 400},
        {name: "Bread", qnty: 4, price: 400},
        {name: "Cereal", qnty: 2, price: 1200},
        {name: "Butter", qnty: 1, price: 5000},
        {name: "Chicken", qnty: 1, price: 20000}, 
    ],

    itemsListState: [
        {category: "Groceries"},
        {category: "Electronics"},
        {category: "Furniture"},
        {category: "Clothing"},
        {category: "School Supplies"},
        {category: "Misc"},
    ],

    CreateItemState: [
        {name: "Milk", price: 3500, quantity: 1},
        {name: "Eggs", price: 400, quantity: 30},
        {name: "Bread", price: 400, quantity: 4},
        {name: "Cereal Bars", price: 9000, quantity: 1},
        {name: "Butter", price: 5000, quantity: 1},
        {name: "Chicken", price: 2000, quantity: 1},
        {name: "Rice", price: 45000, quantity: 1},
    ],

    CreatCateState: {



    }

}

export const RootReducer = (state = initialState, action ) => {

    switch ( action ) {

        default:
            return state
    }

}