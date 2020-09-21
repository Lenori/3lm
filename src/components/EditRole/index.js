import React, {Component} from 'react';

import { editRole } from '../../store/modules/roles/actions';
import { connect } from 'react-redux';

import {Content, Form} from './styles';

class EditRoleConnect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.ownProps.data.title,
            description: this.props.ownProps.data.description
        };

        this.editRole = this.editRole.bind(this);
    }

    editRole(e) {
        e.preventDefault();

        this.props.dispatch(
            editRole(
                {
                    title: this.state.title,
                    description: this.state.description
                },
                this.props.ownProps.index
            )
        );

        this.props.ownProps.cancel();
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.editRole(e)}>

                        <p>Título do cargo</p>
                        <input required type='text' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />

                        <p>Descrição do cargo</p>
                        <textarea required value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>

                        <button>EDITAR CARGO</button>
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

export default connect(mapStateToProps)(EditRoleConnect);