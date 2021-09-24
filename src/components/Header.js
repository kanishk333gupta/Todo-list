import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title}) => {
    const onClick =() => {
        console.log('click');
    }
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color = 'black' text = 'Add+' onClick = {onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title : 'Todo tracker' ,
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
