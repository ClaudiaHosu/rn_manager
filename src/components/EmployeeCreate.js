import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({name, phone, shift});
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
          />
        </CardSection>

        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.pickerTextStyle}>Shift</Text>

          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
          >
           {daysOfWeek.map( (day) => {
                return (
                  <Picker.Item key={day} label={day} value={day} />);
              })
            }
          </Picker>

        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {

  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },

  cardSectionStyle: {
    flexDirection: 'column'
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
}) (EmployeeCreate);
