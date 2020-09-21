import React, {Component} from 'react';
import CurrencyFormat from 'react-currency-format'

import { editEmployee } from '../../store/modules/employees/actions';
import { connect } from 'react-redux';

import {Content, Form} from './styles';

class EditEmployeeConnect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.ownProps.data.name,
            sobrenome: this.props.ownProps.data.sobrenome,
            nascimento: this.props.ownProps.data.nascimento,
            salario: this.props.ownProps.data.salario,
            roleTitle: this.props.ownProps.data.roleTitle,
            roleDescription: this.props.ownProps.data.roleDescription
        };

        this.editCurrentEmployee = this.editCurrentEmployee.bind(this);
        this.selecionarCargo = this.selecionarCargo.bind(this);
    }

    selecionarCargo(index) {
        const cargo = this.props.cargos.roles[index];

        console.log(this.props.cargos.roles[index]);

        this.setState({
            roleTitle: cargo.title,
            roleDescription: cargo.description
        })
    }

    editCurrentEmployee(e) {
        e.preventDefault();

        this.props.dispatch(
            editEmployee(
                {
                    name: this.state.name,
                    sobrenome: this.state.sobrenome,
                    nascimento: new Date(this.state.nascimento).toLocaleDateString('pt-BR'),
                    salario: this.state.salario,
                    roleTitle: this.state.roleTitle,
                    roleDescription: this.state.roleDescription
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
                    <form onSubmit={(e) => this.editCurrentEmployee(e)}>

                        <p>Nome do novo funcionário</p>
                        <input required type='text' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />

                        <p>Sobrenome do novo funcionário</p>
                        <input required type='text' value={this.state.sobrenome} onChange={(e) => this.setState({sobrenome: e.target.value})} />

                        <p>Data de nascimento</p>
                        <input type='date' onChange={(e) => this.setState({nascimento: e.target.value})} />

                        <p>Salário</p>
                        <CurrencyFormat
                            required
                            value={this.state.salario}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            decimalScale={2}
                            fixedDecimalScale
                            prefix={'R$'}
                            onChange={(e) => this.setState({salario: e.target.value})}
                        />

                        <p>Cargo</p>
                        <select onChange={(e) => this.selecionarCargo(e.target.value)}>
                            <option selected disabled>Escolha um cargo</option>
                            {this.props.cargos.roles.map((role, index) => (
                                <option
                                    selected={role.title == this.state.roleTitle ? true : false}
                                    value={index}
                                >{role.title}
                                </option>
                            ))}
                        </select>
                        <span>{this.state.roleDescription}</span>

                        <button>ADICIONAR FUNCIONÁRIO</button>
                        <span onClick={() => this.props.ownProps.cancel()}>CANCELAR</span>
                    </form>
                </Form>                
            </Content>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cargos: state.roles,
        funcionarios: state.employees,
        ownProps: ownProps
    };
}

export default connect(mapStateToProps)(EditEmployeeConnect);