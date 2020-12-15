import React from "react"
import _ from "./Follow.module.css";
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { withFollowUser } from "../../../../hoc/withFollowUser"
import {withAuthRender} from "../../../../hoc/withAuthRender";

class Follow extends React.Component {
    state = {
        followBtnfetching: false
    };
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.followed !== this.props.followed) {
            this.setState({
                followBtnfetching: false
            })
        }
    }

    fetchingTimeout = () => {
        let buffer = this.props.followed
        setTimeout(() => {
            if (buffer === this.props.followed){
                alert('Fetching timeout')
                this.setState({
                    followBtnfetching: false
                })
            }
        }, 10000)
    }

    clickToChangeFollowState = () => {
        this.props.changeFollowState(this.props.followed, this.props.match.params.userId)
        this.setState({
            followBtnfetching: true,
        })
        this.fetchingTimeout()
    }

    followBtnJsx = () => {
        if (this.props.followed !== undefined) {
            if (this.props.followed) {
                return (
                    <button className={`${_.unfollow} ${this.state.followBtnfetching ? 'fetching' : ''}`} onClick={this.clickToChangeFollowState}>Отписаться</button>
                )
            }
            else {
                return (
                    <button className={`${_.follow} ${this.state.followBtnfetching ? 'fetching' : ''}`} onClick={this.clickToChangeFollowState}>Подписаться</button>
                )
            }
        }

        else {
            return <></>
        }
    }

    render() {
        return this.followBtnJsx()
    }
}

export default compose(withFollowUser, withRouter, withAuthRender)(Follow)