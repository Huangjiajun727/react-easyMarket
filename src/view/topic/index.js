import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as topicAction from '../../store/actions/topic';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import ImgLazyLoad from '../../component/imgLazyLoad';
import './index.scss';

class Topic extends Component {
    componentWillMount() {
        this.props.actions.fetchData({ page: 1, size: 100 });
    }
    render() {
        const { topicData } = this.props;
        return (
            <Fragment>
                {topicData.map(item => (
                    <LazyLoad throttle={200} height={300} key={item.id}>
                        <Link className="topic-item" to={`/topicDetail/${item.id}`}>
                            <ImgLazyLoad offSetTop={44} realUrl={item.scene_pic_url} />
                            <div className="topic-item-title ellipsis">{item.title}</div>
                            <div className="topic-item-subtitle ellipsis">{item.subtitle}</div>
                            <div className="topic-item-price">{item.price_info}元起</div>
                        </Link>
                    </LazyLoad>
                ))}
            </Fragment>
        )
    }
}
const mapStateToProps = (state, props) => ({ ...state.topic })
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(topicAction, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic)
