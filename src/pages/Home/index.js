import React, {Component} from 'react';

import {Content} from './styles';

import Header from '../../components/Header';
import ListRole from '../../components/ListRole';
import ListEmployees from '../../components/ListEmployees';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            mode: 'employees'
        };
    }

    render() {
        return(
            <Content>
                <Header
                    mode={this.state.mode}
                    changeMode={(e) => this.setState({mode: e})}
                />

                {this.state.mode == 'employees' &&
                    <ListEmployees />
                }

                {this.state.mode == 'roles' &&
                    <ListRole />
                }
            </Content>
        )
    }
}

export default Home;