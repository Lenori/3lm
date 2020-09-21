import React, {Component} from 'react';

import { addRole } from '../../store/modules/roles/actions';
import { connect } from 'react-redux';

import {Content, Form} from './styles';

class AddRoleConnect extends Component {
    constructor() {
        super();

        this.state = {
            title: null,
            description: null
        };

        this.addNewRole = this.addNewRole.bind(this);
    }

    addNewRole(e) {
        e.preventDefault();

        this.props.dispatch(
            addRole(
                {
                    title: this.state.title,
                    description: this.state.description
                }
            )
        );

        this.props.ownProps.cancel();
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.addNewRole(e)}>

                        <p>Título do novo cargo</p>
                        <input required type='text' onChange={(e) => this.setState({title: e.target.value})} />

                        <p>Descrição do novo cargo</p>
                        <textarea required onChange={(e) => this.setState({description: e.target.value})}></textarea>

                        <button>ADICIONAR CARGO</button>
                        <span onClick={() => this.props.ownProps.cancel()}>CANCELAR</span>
                    </form>
                </Form>                
            </Content>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        roles: state.roles,
        ownProps: ownProps
    };
}

export default connect(mapStateToProps)(AddRoleConnect);