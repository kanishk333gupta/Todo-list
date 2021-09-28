import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title , onAdd , showAdd}) => {
    // const onClick =() => {
    //     console.log('Add Reminder');
    // }
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color = {showAdd ? 'rgb(61, 61, 61)' : 'black'} text = {showAdd ? 'close' : 'Add+'}
            onClick = {onAdd}/>
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
