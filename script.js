let tabCount = 0;
const maxFavicons = 100;
const words = [
    "Each", "time", "you", "open", "a", "new", "tab,", "a", "door", "swings", "wide,",
    "a", "thread", "unspools,", "a", "river", "splits.", "The", "past", "lingers",
    "in", "quiet", "rows,", "waiting,", "half-read,", "half-known,", "half-forgotten.",
    "Each", "click", "plants", "a", "seed", "that", "never", "falls,",
    "roots", "stretching", "through", "unseen", "pages,",
    "a", "forest", "of", "questions", "with", "no", "clear", "path.",
    "You", "promise", "to", "return,", "but", "the", "tide", "pulls", "forward.",
    "Somewhere,", "a", "tab", "still", "hums", "in", "the", "dark,",
    "a", "voice", "mid-sentence,", "a", "thought", "unfinished,",
    "holding", "space", "for", "what", "was", "almost", "grasped—",
    "a", "constellation", "of", "maybes,", "never", "closed."
];

function addTab() {
    const tabBar = document.getElementById("tabBar");
    const tab = document.createElement("div");
    tab.className = "tab";
    
    const favicon = document.createElement("img");
    favicon.src = `data/favicon(${tabCount % maxFavicons}).png`;
    favicon.alt = "Favicon";
    
    const text = document.createElement("span");
    text.innerText = words[tabCount % words.length];
    
    tab.appendChild(favicon);
    tab.appendChild(text);
    tabBar.appendChild(tab);
    
    tabCount++;
}