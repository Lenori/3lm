import React, {Component} from 'react';

import { connect } from 'react-redux';

import {FaEdit} from 'react-icons/fa';

import {Content, Items, Item, Actions} from './styles';

import AddRole from '../AddRole';
import EditRole from '../EditRole';

class ListRolesConnect extends Component {
    constructor() {
        super();

        this.state = {
            addRole: false,
            editRole: false,
            roleToEdit: [],
            indexRoleToEdit: null
        };
    }

    render() {
        return(
            <Content>
                {!this.state.addRole && !this.state.editRole &&
                    <>
                        <Items>
                            {this.props.cargos.roles.map((role, index) => (
                                <Item>
                                    <h2>{role.title}</h2>
                                    <p>{role.description}</p>

                                    <Actions>
                                        <FaEdit
                                            onClick={() => this.setState({
                                                editRole: true,
                                                roleToEdit: role,
                                                indexRoleToEdit: index
                                            })}
                                        />
                                    </Actions>
                                </Item>
                            ))}
                        </Items>

                        <button onClick={() => this.setState({addRole: true})}>ADICIONAR NOVO CARGO</button>
                    </>
                }

                {this.state.addRole &&
                    <AddRole cancel={() => this.setState({addRole: false})} />    
                }

                {this.state.editRole &&
                    <EditRole
                        cancel={() => this.setState({editRole: false})}
                        data={this.state.roleToEdit}
                        index={this.state.indexRoleToEdit}
                    />    
                }
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        cargos: state.roles
    };
}

export default connect(mapStateToProps)(ListRolesConnect);