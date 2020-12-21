const choice = function (items) {
    const idx = Math.floor(Math.random(items.length))
    return items[idx]
}

const remove = function (items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export { choice, remove }