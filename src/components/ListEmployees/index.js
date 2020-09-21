import React, {Component} from 'react';

import { connect } from 'react-redux';

import {FaEdit, FaTrash} from 'react-icons/fa';

import {Content, Items, Item, Actions} from './styles';

import { deleteEmployee } from '../../store/modules/employees/actions';

import AddEmployee from '../AddEmployee';
import EditEmployee from '../EditEmployee';

class ListEmployeesConnect extends Component {
    constructor() {
        super();

        this.state = {
            addEmployee: false,
            editEmployee: false,
            employeeToEdit: null,
            indexEmployeeToEdit: null
        };
    }

    render() {
        return(
            <Content>
                {!this.state.addEmployee && !this.state.editEmployee &&
                    <>
                        <Items>
                            {this.props.funcionarios.employees.map((employee, index) => (
                                <Item>
                                    <h2>{employee.name} {employee.sobrenome}</h2>
                                    <p>{employee.roleTitle}</p>
                                    <p>{employee.roleDescription}</p>
                                    <p>{employee.salario}</p>
                                    <p>{employee.nascimento}</p>

                                    <Actions>
                                        <FaEdit
                                            onClick={() => this.setState({
                                                editEmployee: true,
                                                employeeToEdit: employee,
                                                indexEmployeeToEdit: index
                                            })}
                                        />
                                        <FaTrash
                                            onClick={() => this.props.dispatch(deleteEmployee(index))}
                                        />
                                    </Actions>
                                </Item>
                            ))}
                        </Items>

                        <button onClick={() => this.setState({addEmployee: true})}>ADICIONAR NOVO FUNCIONÁRIO</button>
                    </>
                }

                {this.state.addEmployee &&
                    <AddEmployee cancel={() => this.setState({addEmployee: false})} />    
                }

                {this.state.editEmployee &&
                    <EditEmployee
                        cancel={() => this.setState({editEmployee: false})}
                        data={this.state.employeeToEdit}
                        index={this.state.indexEmployeeToEdit}
                    />    
                }
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        funcionarios: state.employees
    };
}

export default connect(mapStateToProps)(ListEmployeesConnect);