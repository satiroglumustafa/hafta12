import { useContext } from "react"
import C3 from "./C3"
import GlobalContext from "./context"

const C2 = () => {


    const veriHavuzu = useContext(GlobalContext)

    return (
        <>
            <p>BEN C2 Komponentiyim</p>
            {
                veriHavuzu.giris ? <div>Üyelere Özel İçerik </div> : <div>Giriş Yapmanız Gerekmektedir</div>
            }
            <C3 />
        </>
    )
}

export default C2