import './Button.css';

const Button = (props) => {
    return (
        <button
            type={props.type || 'button'}
            className='button'
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button;