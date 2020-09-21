import React, {Component} from 'react';

import {Content, Menu} from './styles';

class Header extends Component {

    render() {
        return(
            <Content>
                <Menu
                    selected={this.props.mode == 'employees' ? true : false}
                    onClick={() => this.props.changeMode('employees')}
                >Funcionários</Menu>
                
                <Menu
                    selected={this.props.mode == 'roles' ? true : false}
                    onClick={() => this.props.changeMode('roles')}
                >Cargos</Menu>
            </Content>
        )
    }
}

export default Header;