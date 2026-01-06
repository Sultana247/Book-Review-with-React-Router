const getLocalStorageData =(name)=>{
    const storedData = localStorage.getItem(name);
    if(storedData){
        return JSON.parse(storedData)
    }
    else{
        return []
    }
}

const saveToLocalStorage =(id, name)=>{
    const storedData = getLocalStorageData(name);
    const exists = storedData.find(bookId => bookId === id);
    if(!exists){
        storedData.push(id);
        localStorage.setItem(name, JSON.stringify(storedData));
    }
}
export {getLocalStorageData, saveToLocalStorage};