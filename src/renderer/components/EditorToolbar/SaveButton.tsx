import React from 'react';
import { Button } from 'antd';
import { withPropsAPI } from 'gg-editor';

interface SaveButtonmProps {
  save: (data: any) => void;
  propsAPI?: any;
  isWeb: boolean;
}

class SaveButton extends React.Component<SaveButtonmProps> {
  componentDidMount() {
    if (!this.props.isWeb) {
      document.onkeydown = (e) => {
        if (e.ctrlKey && e.keyCode === 83) {
          e.preventDefault();
          this.props.save(this.getMindData());
        }
      };
    }
  }

  get getMindData() {
    const { propsAPI } = this.props;
    return propsAPI.save;
  }

  handleClick = () => {
    this.props.save(this.getMindData());
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          Save
        </Button>
      </div>
    );
  }
}

export default withPropsAPI(SaveButton as any);
