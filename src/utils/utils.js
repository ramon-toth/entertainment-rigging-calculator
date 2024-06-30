export function parseIfNumber(value) {
    if (typeof value === 'string' && value === "") return value

    if (typeof value === 'string' && !isNaN(value)) {
        return parseInt(value, 10);
    }
    return value;
}

export function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

export function parseUploadedJsonFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsedObject = JSON.parse(event.target.result);
                resolve(parsedObject);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (event) => {
            reject(event.target.error);
        };
        reader.readAsText(file);
    });
}

export function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
}