import PropTypes from 'prop-types'

const Button = (props)=>{

    return(
        <div>
            <button onClick={props.onClick} className="btn" style={{backgroundColor:props.color}}>{props.title}</button>
        </div>
    )
}
Button.defaultProps = {
    color:'green',
}
Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button