import React, {Component} from 'react';
import CurrencyFormat from 'react-currency-format'

import { addEmployee } from '../../store/modules/employees/actions';
import { connect } from 'react-redux';

import {Content, Form} from './styles';

class AddEmployeeConnect extends Component {
    constructor() {
        super();

        this.state = {
            name: null,
            sobrenome: null,
            nascimento: null,
            salario: null,
            roleTitle: null,
            roleDescription: null
        };

        this.addNewEmployee = this.addNewEmployee.bind(this);
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

    addNewEmployee(e) {
        e.preventDefault();

        this.props.dispatch(
            addEmployee(
                {
                    name: this.state.name,
                    sobrenome: this.state.sobrenome,
                    nascimento: new Date(this.state.nascimento).toLocaleDateString('pt-BR'),
                    salario: this.state.salario,
                    roleTitle: this.state.roleTitle,
                    roleDescription: this.state.roleDescription
                }
            )
        );

        this.props.ownProps.cancel();
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.addNewEmployee(e)}>

                        <p>Nome do novo funcionário</p>
                        <input required type='text' onChange={(e) => this.setState({name: e.target.value})} />

                        <p>Sobrenome do novo funcionário</p>
                        <input required type='text' onChange={(e) => this.setState({sobrenome: e.target.value})} />

                        <p>Data de nascimento</p>
                        <input required type='date' onChange={(e) => this.setState({nascimento: e.target.value})} />

                        <p>Salário</p>
                        <CurrencyFormat
                            required
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
                                <option value={index}>{role.title}</option>
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

export default connect(mapStateToProps)(AddEmployeeConnect);