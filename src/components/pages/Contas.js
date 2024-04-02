import { useLocation } from 'react-router-dom'

import Message from "../layout/Message"


//isso é uma página project do tutorial
function Contas(){

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }
    return(
        <div>
            <h1>Minhas Contas</h1>
            {message && <Message type="success" msg={message} />}
        </div>
    )
}

export default Contas