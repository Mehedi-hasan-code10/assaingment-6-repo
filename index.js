


// const toggleMenu = () => {
//     const url = "https://openapi.programming-hero.com/api/categories"
//     fetch(url)
//         .then(res => res.json())
//     .then(data => displayMenu(data.categories))
   
// }

// const loadTreeCard = (id) => {
  
//     const url = `https://openapi.programming-hero.com/api/category/${id}`
//     console.log(url);
    
    
    
   
//     fetch(url)
//         .then(res => res.json())
//         .then(data => defultLoadTreeCard(data.plants))
          
// }

     

// const defultLoadTreeCard = (trees) => {
//     const cardContainer = document.getElementById('card-cointainer');
//     cardContainer.innerHTML = "";

//     for (const key in trees) {
//         const tree = trees[key];
//         const allTreeDiv = document.createElement('div');
//         allTreeDiv.innerHTML = `
//             <div class="w-[300px] bg-[#fff] p-4 border flex flex-col rounded-xl">
//                 <img src="${tree.image}" class="bg-[#ddd] plant-img">
//                 <div class="flex flex-col justify-between gap-2">
//                     <h1 class="font-bold text-xl">${tree.name}</h1>
//                     <p>${tree.description}</p>
//                     <div class="flex justify-between">
//                         <p class="bg-[#DCFCE7] px-4 py-1 rounded-xl text-[#15803D]">${tree.category}</p>
//                         <p class="font-bold"><span class="font-bold text-xl">৳</span>${tree.price}</p>
//                     </div>
//                     <button class="w-[100%] bg-[#15803D] py-2 rounded-3xl mt-4" id="add-btn-${tree.id}">Add to Cart</button>
//                 </div>
//             </div>
//         `;
//         cardContainer.appendChild(allTreeDiv);
//     }
// }


// const allCategory = () => {
//     const url = `https://openapi.programming-hero.com/api/plants`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayLoadTreeCard(data.plants)
//     )
    
// }




// const displayLoadTreeCard = cards => {
    
//     const cardContainer = document.getElementById('card-cointainer');
//     cardContainer.innerHTML = "";

//     const card = cards;
    
//     card.forEach(card => {
//         const cardCategorydiv = document.createElement('div');
//         cardCategorydiv.innerHTML = cardCategorydiv.innerHTML = `
    
//                 <div class="w-[300px] bg-[#fff] p-4 border flex flex-col rounded-xl">
//         <img src="${card.image}" class="bg-[#ddd] plant-img">
//        <div class="flex flex-col justify-between gap-2">
//         <h1 class="font-bold text-xl">${card.name}</h1>
//         <p>${card.description}</p>

//         <div class="flex justify-between">
//             <p class="bg-[#DCFCE7] px-4 py-1 rounded-xl text-[#15803D]">${card.category}</p>
//             <p class="font-bold"><span class="font-bold text-xl">৳</span>${card.price}</p>

//         </div>
//         <button class="w-[100%] bg-[#15803D] py-2 rounded-3xl mt-4 add-cart">Add to Cart</button>
//        </div>

//     </div>
    
    
    
    
    
//     `
//     cardContainer.appendChild(cardCategorydiv);
//     })
   

// }





// const displayMenu = categories => {
    
//     const asaidCointainer = document.getElementById('asaid-cointainer');
//     asaidCointainer.innerHTML = "";
//     categories.forEach(category => {
//         const ul = document.createElement('ul');
//         ul.innerHTML = `<li onclick="loadTreeCard(${category.id})" class="text-lg mt-2 hover:text-green-600 cursor-pointer">${category.category_name}
        
//         </li>
//         `
//        asaidCointainer.appendChild(ul);
    

//     })



// }



// // add tk//// Add to Cart functionality
// document.getElementById("card-cointainer").addEventListener("click", (e) => {
//     if (e.target.classList.contains("add-cart")) {
//         const card = e.target.closest(".tree-card");
//         const name = card.querySelector(".tree-name").innerText;
//         const price = parseFloat(card.querySelector(".tree-price").innerText);

//         // Add to cart HTML
//         const cartContainer = document.getElementById("add-to-cart-main-section");
//         cartContainer.innerHTML += `
//             <div class="flex justify-between items-center rounded-lg p-2 bg-[#f0fdf4] mt-[10px] cart-item">
//                 <div>
//                     <h1 class="font-[600]">${name}</h1>
//                     <p>৳<span class="cart-item-price">${price}</span></p>
//                 </div>
//                 <div>
//                     <button class="remove-btn cursor-pointer">❌</button>
//                 </div>
//             </div>
//         `;

//         updateCartTotal();
//     }
// });

// // Remove from Cart
// document.getElementById("add-to-cart-main-section").addEventListener("click", (e) => {
//     if (e.target.classList.contains("remove-btn")) {
//         const itemDiv = e.target.closest(".cart-item");
//         itemDiv.remove();
//         updateCartTotal();
//     }
// });

// // Update total price
// function updateCartTotal() {
//     const cartItems = document.querySelectorAll(".cart-item");
//     let total = 0;
//     cartItems.forEach(item => {
//         const price = parseFloat(item.querySelector(".cart-item-price").innerText);
//         total += price;
//     });
//     document.getElementById("cart-total-price").innerText = total.toFixed(2);
// }



// toggleMenu()
// allCategory()
// cardHistory()







// ...................
// ...............................








// // Toggle Menu - Load categories
// const toggleMenu = () => {
//     fetch("https://openapi.programming-hero.com/api/categories")
//         .then(res => res.json())
//         .then(data => displayMenu(data.categories));
// }

// // Display categories in sidebar
// const displayMenu = categories => {
//     const asaidCointainer = document.getElementById('asaid-cointainer');
//     asaidCointainer.innerHTML = "";
//     categories.forEach(category => {
//         const ul = document.createElement('ul');
//         ul.innerHTML = `
//             <li onclick="loadTreeCard(${category.id})" class="text-lg mt-2 hover:text-green-600 cursor-pointer">
//                 ${category.category_name}
//             </li>`;
//         asaidCointainer.appendChild(ul);
//     });
// }

// // Load trees by category
// const loadTreeCard = (id) => {
//     fetch(`https://openapi.programming-hero.com/api/category/${id}`)
//         .then(res => res.json())
//         .then(data => displayTrees(data.plants));
// }

// // Load all trees
// const allCategory = () => {
//     fetch(`https://openapi.programming-hero.com/api/plants`)
//         .then(res => res.json())
//         .then(data => displayTrees(data.plants));
// }

// // Display trees cards
// const displayTrees = (trees) => {
//     const cardContainer = document.getElementById('card-cointainer');
//     cardContainer.innerHTML = "";
//     trees.forEach(tree => {
//         const div = document.createElement('div');
//         div.classList.add("tree-card"); // needed for Add to Cart
//         div.innerHTML = `
//             <div class="w-[300px] bg-[#fff] p-4 border flex flex-col rounded-xl">
//                 <img src="${tree.image}" class="bg-[#ddd] plant-img">
//                 <div class="flex flex-col justify-between gap-2">
//                     <h1 class="font-bold text-xl tree-name">${tree.name}</h1>
//                     <p>${tree.description}</p>
//                     <div class="flex justify-between">
//                         <p class="bg-[#DCFCE7] px-4 py-1 rounded-xl text-[#15803D]">${tree.category}</p>
//                         <p class="font-bold">৳<span class="tree-price">${tree.price}</span></p>
//                     </div>
//                     <button class="w-[100%] bg-[#15803D] py-2 rounded-3xl mt-4 add-cart">Add to Cart</button>
//                 </div>
//             </div>
//         `;
//         cardContainer.appendChild(div);
//     });
// }

// // Add to Cart functionality
// document.getElementById("card-cointainer").addEventListener("click", (e) => {
//     if (e.target.classList.contains("add-cart")) {
//         const card = e.target.closest(".tree-card");
//         const name = card.querySelector(".tree-name").innerText;
//         const price = parseFloat(card.querySelector(".tree-price").innerText);

//         const cartContainer = document.getElementById("add-to-cart-main-section");
//         cartContainer.innerHTML += `
//             <div class="flex justify-between items-center rounded-lg p-2 bg-[#f0fdf4] mt-[10px] cart-item">
//                 <div>
//                     <h1 class="font-[600]">${name}</h1>
//                     <p>৳<span class="cart-item-price">${price}</span></p>
//                 </div>
//                 <div>
//                     <button class="remove-btn cursor-pointer">❌</button>
//                 </div>
//             </div>
//         `;
//         updateCartTotal();
//     }
// });

// // Remove from Cart
// document.getElementById("add-to-cart-main-section").addEventListener("click", (e) => {
//     if (e.target.classList.contains("remove-btn")) {
//         const itemDiv = e.target.closest(".cart-item");
//         itemDiv.remove();
//         updateCartTotal();
//     }
// });

// // Update total price
// function updateCartTotal() {
//     const cartItems = document.querySelectorAll(".cart-item");
//     let total = 0;
//     cartItems.forEach(item => {
//         const price = parseFloat(item.querySelector(".cart-item-price").innerText);
//         total += price;
//     });
//     document.getElementById("cart-total-price").innerText = total.toFixed(2);
// }

// // Initialize
// toggleMenu();
// allCategory();

// ................>

// const createElement = (arr) => {
//     const htmlElements = arr.map((el => `<span class="btn">${el}</span>`));
//     return htmlElements.join(" ");
// }
// modle...............

const loadNameDetails = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
    const data = await res.json();
    displayModal(data.plants);
    
    
}
// ===================== Load Menu =====================
const toggleMenu = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
        .then(res => res.json())
        .then(data => displayMenu(data.categories));
};

// ===================== Load Tree Card =====================
const loadTreeCard = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => defultLoadTreeCard(data.plants));
};

// ===================== Default Load =====================
const allCategory = () => {
    const url = `https://openapi.programming-hero.com/api/plants`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadTreeCard(data.plants));
};

// ===================== Display Category Wise =====================
const defultLoadTreeCard = (trees) => {
    const cardContainer = document.getElementById('card-cointainer');
    cardContainer.innerHTML = "";

    trees.forEach(tree => {
        const allTreeDiv = document.createElement('div');
        allTreeDiv.classList.add("tree-card"); // extra class for JS
        allTreeDiv.innerHTML = `
            <div class="w-full lg:w-[300px] bg-[#fff] p-4 border flex flex-col rounded-xl">
                <img src="${tree.image}" class="bg-[#ddd] plant-img">
                <div class="flex flex-col justify-between gap-2">
                    <h1 onclick="loadNameDetails(${tree.id})" class="font-bold text-xl tree-name">${tree.name}</h1>
                    <p>${tree.description}</p>
                    <div class="flex justify-between">
                        <p class="bg-[#DCFCE7] px-4 py-1 rounded-xl text-[#15803D]">${tree.category}</p>
                        <p class="font-bold"><span class="font-bold text-xl">৳</span><span class="tree-price">${tree.price}</span></p>
                    </div>
                    <button class="w-[100%] bg-[#15803D] py-2 rounded-3xl mt-4 add-cart">Add to Cart</button>
                </div>
            </div>

        `;
        cardContainer.appendChild(allTreeDiv);
    });
};

// ===================== Display All Plants =====================
const displayLoadTreeCard = (cards) => {
    const cardContainer = document.getElementById('card-cointainer');
    cardContainer.innerHTML = "";

    cards.forEach(card => {
        const cardCategorydiv = document.createElement('div');
        cardCategorydiv.classList.add("tree-card"); 
        cardCategorydiv.innerHTML = `
            <div class="w-full lg:w-[300px] bg-[#fff] p-4 border flex flex-col rounded-xl">
                <img src="${card.image}" class="bg-[#ddd] plant-img">
                <div class="flex flex-col justify-between gap-2">
                    <h1 onclick="loadNameDetails(${card.id})" class="font-bold text-xl tree-name">${card.name}</h1>
                    <p>${card.description}</p>
                    <div class="flex justify-between">
                        <p class="bg-[#DCFCE7] px-4 py-1 rounded-xl text-[#15803D]">${card.category}</p>
                        <p class="font-bold"><span class="font-bold text-xl">৳</span><span class="tree-price">${card.price}</span></p>
                    </div>
                    <button class="w-[100%] bg-[#15803D] py-2 rounded-3xl mt-4 add-cart">Add to Cart</button>
                </div>
            </div>
        `;
        cardContainer.appendChild(cardCategorydiv);
    });
};

// ===================== Display Menu =====================
const displayMenu = categories => {
    const asaidCointainer = document.getElementById('asaid-cointainer');
    asaidCointainer.innerHTML = "";
    categories.forEach(category => {
        const ul = document.createElement('ul');
        ul.innerHTML = `
            <li onclick="loadTreeCard(${category.id})" class="text-lg mt-2 hover:text-green-600 cursor-pointer">
                ${category.category_name}
            </li>
        `;
        asaidCointainer.appendChild(ul);
    });
};

// ===================== Add to Cart =====================
document.getElementById("card-cointainer").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-cart")) {
        const card = e.target.closest(".tree-card");
        const name = card.querySelector(".tree-name").innerText;
        const price = parseFloat(card.querySelector(".tree-price").innerText);

        // Alert before adding
        alert(`${name} added to cart!`);

        // Add item to cart
        const cartContainer = document.getElementById("add-to-cart-main-section");
        cartContainer.innerHTML += `
            <div class="flex justify-between items-center rounded-lg p-2 bg-[#f0fdf4] mt-[10px] cart-item">
                <div>
                    <h1 class="font-[600]">${name}</h1>
                    <p>৳<span class="cart-item-price">${price}</span></p>
                </div>
                <div>
                    <button class="remove-btn cursor-pointer">❌</button>
                </div>
            </div>
        `;
        updateCartTotal();
    }
});

// ===================== Remove from Cart =====================
document.getElementById("add-to-cart-main-section").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const itemDiv = e.target.closest(".cart-item");
        itemDiv.remove();
        updateCartTotal();
    }
});

// ===================== Update Total =====================
function updateCartTotal() {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector(".cart-item-price").innerText);
        total += price;
    });
    document.getElementById("cart-total-price").innerText = total.toFixed(2);
}

// ===================== Initial Calls =====================
toggleMenu();
allCategory();
