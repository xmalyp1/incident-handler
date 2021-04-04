const STORAGE_KEY = 'INC_DATA';

export const storeData = (data): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
        console.warn("Local Storage is not supported in this web browser. Therefore we are not persisting your data in the browser.")
    }
}

export const retrieveData = (): {} | undefined => {
    try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData != null) {
            console.debug("Retrieving state from local storage");
            return JSON.parse(storedData);
        }
    } catch {
    }
}

export const removeData = (): void => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
    }
}
