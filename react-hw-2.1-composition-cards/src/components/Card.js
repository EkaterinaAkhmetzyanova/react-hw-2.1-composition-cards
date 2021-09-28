import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <div class="card" style={{width: 300}}>
            {props.image && <img src={props.image} class="card-img-top" alt="some name"></img>}
            <div class="card-body">
                {props.children}
            </div>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
  }

Card.defaultProps = {
    image: '',
}
