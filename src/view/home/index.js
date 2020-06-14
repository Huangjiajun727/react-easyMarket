import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile';
import './index.scss';
import * as homeAction from '../../store/actions/home';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import ImgLazyLoad from '../../component/imgLazyLoad';
import LazyLoad from 'react-lazyload';
import moreImg from '../../assets/images/icon_go_more.png'

const Channerl = ({ channel }) => {
    if (channel) {
        return (
            <nav className="channer-wrap">
                {channel.map(item => (
                    <Link to={`/categorys/${item.id}`}
                        className="channel-item"
                        key={item.id}
                    >
                        <ImgLazyLoad offSetTop={44} realUrl={item.icon_url}></ImgLazyLoad>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        )
    } else {
        return null;
    }
}

const Brand = ({ brandList }) => {
    if (brandList) {
        return (
            <section className="brand-wrapper">
                <h2>品牌制造商直供</h2>

                <div className="brand-con">
                    {brandList.map(item => (
                        <Link key={item.id} className="brand-item" to={`/brandDetail/${item.id}`}>
                            <figure>
                                <ImgLazyLoad offSetTop={0} realUrl={item.new_pic_url}></ImgLazyLoad>
                                <figcaption>
                                    <span className="name">{item.name}</span>
                                    <span className="price">{item.floor_price}元起</span>
                                </figcaption>
                            </figure>
                        </Link>
                    ))}
                </div>
            </section>
        )
    } else {
        return null;
    }
}


const NewGoods = ({ newGoodsList }) => {
    return (
        <section className="newgoods-wrapper">
            <h2>新品首发</h2>

            <div className="newgoods-con">
                {newGoodsList.map(item => (
                    <Link className="newgoods-item" to={`/goods/${item.id}`} key={item.id}>
                        <figure>
                            <ImgLazyLoad offSetTop={44} realUrl={item.list_pic_url}></ImgLazyLoad>
                            <figcaption>
                                <span className="name">{item.name}</span>
                                <span className="price">￥{item.retail_price}</span>
                            </figcaption>
                        </figure>
                    </Link>
                ))}
            </div>
        </section>
    )
}

const HotGoods = ({ hotGoodsList }) => {
    return (
        <section className="hotgoods-wrapper">
            <h2>人气推荐</h2>

            <div className="hotgoods-con">
                {hotGoodsList.map(item => (
                    <LazyLoad throttle={200} height={300} key={item.id}>
                        <Link className="hotgoods-item" to={`/goods/${item.id}`}>
                            <figure>
                                <ImgLazyLoad offSetTop={0} realUrl={item.list_pic_url}></ImgLazyLoad>
                                <figcaption>
                                    <span className="name">{item.name}</span>
                                    <span className="info">{item.goods_brief}</span>
                                    <span className="price">￥{item.retail_price}</span>
                                </figcaption>
                            </figure>
                        </Link>
                    </LazyLoad>
                ))}
            </div>
        </section>
    )
}

const TopGoods = ({ topicList }) => {
    return (
        <section className="topgoods-wrapper">
            <h2>专题精选</h2>

            <div className="topgoods-con">
                <Carousel dots={false} infinite slideWidth={0.85} cellSpacing={10}>
                    {topicList.map(item => (
                        <Link className="topgoods-item" to={`/topicDetail/${item.id}`} key={item.id}>
                            <figure>
                                <ImgLazyLoad offSetTop={44} realUrl={item.item_pic_url}></ImgLazyLoad>
                                <figcaption>
                                    <div>
                                        <span className="topgoods-title">{item.title}</span>
                                        <span className="price">￥{item.price_info}元起</span>
                                    </div>
                                    <span className="info">{item.subtitle}</span>
                                </figcaption>
                            </figure>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

const CateGoryGoods = ({ categoryList }) => {
    return (
        <section className="category-wrapper">
            {categoryList.map(item => (
                <LazyLoad throttle={100} height={300} key={item.id}>
                    <h2>{item.name}</h2>

                    <div className="category-con">
                        {item.goodsList.map(item => (
                            <Link className="category-item" to={`/goods/${item.id}`} key={item.id}>
                                <figure>
                                    <ImgLazyLoad offSetTop={44} realUrl={item.list_pic_url}></ImgLazyLoad>
                                    <figcaption>
                                        <span className="name ellipsis">{item.name}</span>
                                        <span className="price">￥{item.retail_price}</span>
                                    </figcaption>
                                </figure>
                            </Link>
                        ))}
                        <Link to={`/categorys/${item.id}`} className="category-more">
                            <div className="name">更多{item.name}好物</div>
                            <img src={moreImg} alt="more" />
                        </Link>
                    </div>
                </LazyLoad>
            ))}
        </section>
    )
}

class HomeBox extends React.Component {
    componentDidMount() {
        this.props.actions.getData();
    }

    render() {
        const { banner, channel, brandList, newGoodsList, hotGoodsList, topicList, categoryList } = this.props;

        return (
            <div className="home">
                <Carousel autoplay infinite>
                    {banner.map(item => (
                        <div key={item.id} className="banner-img">
                            <ImgLazyLoad
                                offSetTop={0}
                                realUrl={item.image_url} />
                        </div>
                    ))}
                </Carousel>

                <Channerl channel={channel}></Channerl>

                <Brand brandList={brandList}></Brand>

                <NewGoods newGoodsList={newGoodsList}></NewGoods>

                <HotGoods hotGoodsList={hotGoodsList}></HotGoods>

                <TopGoods topicList={topicList}></TopGoods>

                <CateGoryGoods categoryList={categoryList}></CateGoryGoods>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({ ...state.home })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(homeAction, dispatch) })

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeBox)

export default Home;
