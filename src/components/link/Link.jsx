import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-yellow-600"><a href={route.path}>{route.name}</a></li>
    );
};
Link.propTypes ={
    route :PropTypes.object
}
export default Link;

// <li className="mr-10 hover:bg-black"><a href={route.path}>{route.name}</a></li>