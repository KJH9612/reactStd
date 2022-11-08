import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16,
    },
    messageText: {
        color: 'black',
        fontSize: 16,
    }
}

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log("componentDidMount() called.")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate called")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount called")
    }

    render() {
        return (
            <div>
                <div style={styles.wrapper}>
                    <div style={styles.messageText}>
                        {this.props.message}
                    </div>
                </div>
            </div>
        );
    }
}

Notification.propTypes = {};

export default Notification;