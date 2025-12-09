import { FavouriteContext } from './AddToFavCtx'
import { useLoacalStorage } from '../../hooks/useLocalStorage';

const FavouriteContextProvider = ({children}) =>{
    const [favourites, setFavourites] = useLoacalStorage("useLocalStorage", []);

    const addToFav = (doctor) =>{
        setFavourites((prev) =>{
            const exist = prev.find((d) => d._id === doctor._id)
            if (exist){
                return prev
            } else{
                return [...prev, doctor]
            }
        })
    }

    const removeFromFav = (_id) =>{
        setFavourites((prev) => prev.filter((d) => d.id !== _id))
    }

    const isFav = (_id) =>{
        return favourites.some((d) => d._id === _id)
    }
    // console.log(favourites)

    return(
        <FavouriteContext.Provider value={{favourites, addToFav, removeFromFav, isFav}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContextProvider;