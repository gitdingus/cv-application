import React from 'react';
import Edit from './Edit.jsx';
import Display from './Display.jsx';

class EducationExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eduList: [],
    };

    this.addEducationExperience = this.addEducationExperience.bind(this);
  }

  addEducationExperience(data) {
    this.setState((prevState) => (
      {
        eduList: prevState.eduList.concat([data]),
      }
    ));
  }

  render() {
    const { eduList } = this.state;
    return (
      <div>
        <Edit addEducationExperience={this.addEducationExperience} />
        <Display eduList={eduList} />
      </div>
    );
  }
}

export default EducationExperience;
