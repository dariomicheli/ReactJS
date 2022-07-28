import {useState} from 'react'

const useSessionStorage = (key, defaultValue) => {
    
    const [storeValue,setStoreValue] = useState(() => {
        try {
            const value = sessionStorage.getItem(key);
            if(value){
                return JSON.parse(value);
            } else {
                sessionStorage.setItem(key,JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }
    });

    const setValue = newValue => {
        try {
            sessionStorage.setItem(key,JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
        setStoreValue(newValue);
    };

    return [storeValue, setValue]
};

export default useSessionStorage;