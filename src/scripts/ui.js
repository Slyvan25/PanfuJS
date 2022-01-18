const mapBtn = document.getElementById('mapBtn');
const chatInput = document.getElementById('chat');
const chatBtn = document.getElementById('chatBtn');
const map = document.getElementsByTagName('map')[0];
const closeMapBtn = map.getElementsByTagName('button')[0];
const mapAreas = map.getElementsByTagName('map-areas')[0];
const mapAreaButtons = mapAreas.getElementsByTagName('button');
const tooltip = document.getElementsByTagName('tooltip')[0];

// mock data - move this over to api when game is done

/**
 * @name String name of location
 * @location Map name for loading in the map
 * @coords [X,Y]
 */
const mapCoords = [
    {
        id: 1,
        name: "Swimming Pool",
        location: "pool",
        coords: [103,69],
        width: 91,
        height: 56,
    },
    {
        id: 2,
        name: "Beach",
        location: "beach",
        coords: [215, 20],
        width: 91,
        height: 56,
    },
    {
        id: 3,
        name: "Jungle",
        location: "jungle",
        coords: [175, 100],
        width: 91,
        height: 56,
    },
    {
        id: 4,
        name: "Vulcano",
        location: "vulcano",
        coords: [45, 205],
        width: 100,
        height: 75,
    },
    {
        id: 5,
        name: "Square",
        location: "square",
        coords: [175, 205],
        width: 100,
        height: 45,
    },
    {
        id: 6,
        name: "City",
        location: "town",
        coords: [220, 205],
        width: 112,
        height: 55,
    },
    {
        id: 7,
        name: "Treehouse",
        location: "treehouse",
        coords: [90, 345],
        width: 80,
        height: 65,
    },
    {
        id: 8,
        name: "Sport field",
        location: "sportfield",
        coords: [165, 325],
        width: 130,
        height: 65,
    },
    {
        id: 9,
        name: "Caribean beach",
        location: "caribean-beach",
        coords: [280, 220],
        width: 170,
        height: 50,
    },
    {
        id: 10,
        name: "Castle",
        location: "castle",
        coords: [59, 425],
        width: 80,
        height: 65
    },
];


//#region sounds
const hoverSound = new Audio("./sounds/mapOver.mp3");

//#endregion

//#region map
// open map button
mapBtn.addEventListener('mouseover', () =>
{
    hoverSound.play();
})

mapBtn.addEventListener('mouseout', () =>
{
    hoverSound.pause();
    hoverSound.currentTime = 0;
})

mapBtn.addEventListener("click", ()=>
{
    if(map.hasAttribute('opened'))
    {
        map.removeAttribute('opened');
    }
    else
    {
        map.setAttribute('opened', '');
    }
})
// closebutton
closeMapBtn.addEventListener('click', () => {
    map.removeAttribute('opened');
})

// init clickable map areas
let hovered = false;

for (let area = 0; area < mapCoords.length; area++) {
    mapAreas.innerHTML += `<button id="tooltip-${area}" style="top: ${mapCoords[area].coords[0]}px; left: ${mapCoords[area].coords[1]}px; width: ${mapCoords[area].width}px; height: ${mapCoords[area].height}px;" onmouseover="showTooltip(event, ${area})" onmouseleave="destroyTooltip(event)" onclick="loadScene('${mapCoords[area].location}')" />`
}


// tooltip
function showTooltip(event, index) {
    let mapSound = new Audio("./sounds/map.mp3");
    mapSound.play();
    let button = event.target
    button.addEventListener("mousemove", moveTooltip, true)
    let text = document.getElementById('tooltipText')
        text.innerHTML = mapCoords[index].name
    tooltip.setAttribute('show', null)
}

function destroyTooltip(event) {
    event.target.removeEventListener("mousemove", moveTooltip, false)
    tooltip.removeAttribute('show')
}

function moveTooltip(event) {
    tooltip.style.left = event.clientX - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = event.clientY - tooltip.offsetHeight - 20 + 'px';
}

// add events to the areas
//#endregion