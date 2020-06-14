import React from 'react';
import './index.scss';

class ImgLazyLoad extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoad: false,      //img加载完
            isLoading: false,  //img创建完
        }
    }

    componentDidMount() {
        this.handler();
        window.addEventListener('scroll', this.handler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handler);
    }

    handler = () => {
        if (!this.state.isLoading) {
            const { offSetTop, realUrl } = this.props;
            const visibleBottom = window.scrollY + document.documentElement.clientHeight - offSetTop;
            const imgTop = this.refs.imgLazyLoad.offsetTop;

            if (visibleBottom > imgTop) {
                let imgObj = new Image();
                imgObj.src = realUrl;
                this.setState({
                    isLoading: true
                });
                new Promise((resolve, reject) => {
                    imgObj.onload = function (params) {
                        resolve(imgObj);
                    }
                }).then((imgObj) => {
                    this.setState({
                        isLoad: true
                    });
                });
                new Promise((resolve, reject) => {
                    imgObj.onload = function () {
                        resolve(imgObj)
                    }
                }).then((imgObj) => {
                    this.setState({ isLoad: true })
                })
            }
        } else {
            window.removeEventListener('scroll', this.handler);
        }
    }

    render() {
        const { isLoad } = this.state;
        const { realUrl, initUrl } = this.props;
        const imgSrc = isLoad ? realUrl : initUrl;

        return (
            <img ref="imgLazyLoad"
                src={imgSrc}
                className={isLoad ? 'img-lazyload load-end' : 'img-lazyload loading'}
                alt="imgLazyLoad" />
        )
    }
}
//初始属性
ImgLazyLoad.defaultProps = {
    offSetTop: 40,
    initUrl: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg'
}

export default ImgLazyLoad;