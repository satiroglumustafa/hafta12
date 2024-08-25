import { useContext } from "react"
import GlobalContext from "./context"

const C3 = ()=> {
    const a = useContext(GlobalContext) // c3 içinden appdeki state güncellicez
    return(
        <>
        <p>BEN C3 Komponentiyim</p>
        Appte yer alan adet degeri: {a.giris}
        <button onClick={ ()=> {a.setGiris( eskiDeger=>!eskiDeger )} }></button> 

        
        </>
    )
}

export default C3