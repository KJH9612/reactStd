import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Notification from "./Notification";

const reserveNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정 알려드립니다."
    },
    {
        id: 2,
        message: "점심 식사 시간입니다."
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다."
    }
]

let timer

class NotificationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        const {notifications} = this.state
        timer = setInterval(() => {
            if(notifications.length < reserveNotifications.length){
                const index = notifications.length
                notifications.push(reserveNotifications[index])
                this.setState({
                    notifications: notifications
                })
            }else{
                this.setState({
                    notifications: []
                })
                clearInterval(timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} />
                })}
            </div>
        );
    }
}

NotificationList.propTypes = {};

export default NotificationList;