import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from 'react';
import useSessionStorage from '../../hooks/useSessionStorage';

export default function MenuItems() {

    const [items, setItems] = useSessionStorage('items',[])

    useEffect(() => {
        const categoriesCollection = collection(db,'categories');
        getDocs(categoriesCollection)
        .then(result => {
            const list = result.docs.map(categorie => {
                return {
                    id: categorie.id,
                    ...categorie.data()
                }
            })
            setItems(list.sort(sortArray));
        })
        .catch(err => console.log(err))
    // eslint-disable-next-line
    },[])

    const sortArray = (x,y) => {
        if (x.description < y.description) return -1;
        if (x.description > y.description) return 1;
        return 0;
    }    

    return items;
}
