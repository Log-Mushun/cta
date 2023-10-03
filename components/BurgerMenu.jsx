import {FaBars} from 'react-icons/fa6'

const BurgerMenu = () => {
    return(
        <div className="fixed right-10 pt-10 cursor-pointer">
            <FaBars className='h-8 w-10'/>
        </div>
    )
}

export default BurgerMenu;