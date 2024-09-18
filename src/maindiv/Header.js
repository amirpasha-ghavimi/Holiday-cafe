import cafelogo from '../maindiv/images/holiday-cafe.svg'

function Header () {
    return (
        <div className='header'>
            <img src={cafelogo} alt='logo' width={170} height={170} />
            <h3>Enjoy your coffee at Holiday Café!</h3>
        </div>
    )
}


export default Header;