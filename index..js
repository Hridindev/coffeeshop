const sideBar = document.getElementById("side-navbar");

const openSidebar = () => {
    sideBar.style.transform = "translateX(0)"; // Slides in flush to the edge
}

const closeSideBar = () => {
    sideBar.style.transform = "translateX(250px)"; // Slides out completely out of view
}