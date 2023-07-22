import PropTypes from 'prop-types'

const Button = (props)=>{
    return(
        <div>
            <button className="btn" style={{backgroundColor:props.color}}>{props.title}</button>
        </div>
    )
}
Button.defaultProps = {
    color:'green',
}
Button.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Button