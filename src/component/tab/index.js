import React from 'react';
import { withRouter } from 'react-router-dom';
import routers from '../../router'
import './index.scss';

class Tab extends React.Component {
    changeTabPage(item) {
        this.props.history.push(item.url)
    }

    render() {
        const { tabList, history: { location: { pathname } } } = this.props;
        let showTab = false;

        routers.map((item, index) => {
            if (item.link === pathname) {
                showTab = item.isTab;
            }
        })
        return (
            showTab ?
                <nav className="tab">
                    {
                        tabList.map((item, index) => (
                            <div className={pathname === item.url ? 'tab-item tab-item-active' : 'tab-item'}
                                key={index}
                                onClick={() => { this.changeTabPage(item) }}
                            >
                                <div className="tab-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="tab-name">
                                    {item.name}
                                </div>
                            </div>
                        ))
                    }
                </nav>
                :
                null
        )
    }
}

export default withRouter(Tab);