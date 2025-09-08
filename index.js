const spinner = document.getElementById('spinner');

// Modal
const loadNameDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
    const data = await res.json();
    displayModal(data.plants);
}
const displayModal = (plant) => {
    const container = document.getElementById("detailes-container");
    container.innerHTML = `
  <h3 class="text-lg font-bold">${plant.name}</h3>
  <img class="rounded-lg w-full h-[220px]" src="${plant.image}" />
  <p><span class="font-bold">Category:</span> ${plant.category}</p>
  <p><span class="font-bold">Price:</span> ৳${plant.price}</p>
  <p><span class="font-bold">Description:</span> ${plant.description}</p>
  <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div>`;
    document.getElementById("my_modal_5").showModal();
}

// Sidebar
const toggleMenu = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    displayMenu(data.categories);
}
const displayMenu = (categories) => {
    const container = document.getElementById("asaid-cointainer");
    container.innerHTML = "";

    // ✅ All Trees default
    const allLi = document.createElement("li");
    allLi.textContent = "All Trees";
    allLi.classList.add("active");
    allLi.onclick = async () => {
        document.querySelectorAll('#asaid-cointainer li').forEach(e => e.classList.remove("active"));
        allLi.classList.add("active");
        await allCategory();
    }
    container.appendChild(allLi);
    // other categories
    categories.forEach(cat => {
        const li = document.createElement("li");
        li.textContent = cat.category_name;
        li.onclick = async () => {
            document.querySelectorAll('#asaid-cointainer li').forEach(e => e.classList.remove("active"));
            li.classList.add("active");
            await loadTreeCard(cat.id);
        }
        container.appendChild(li);
    });
}