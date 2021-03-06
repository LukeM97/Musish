import React from 'react';
import classes from './PageContent.scss';

export default class PageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: !this.props.innerRef,
    };
  }

  componentDidMount() {
    const { innerRef } = this.props;

    if (innerRef) {
      this.setState({
        mounted: true,
      });
    }
  }

  render() {
    const { innerRef, ...rest } = this.props;
    const { mounted } = this.state;

    return (
      <div className={classes.pageContent} ref={innerRef} {...rest}>
        {mounted && this.props.children}
      </div>
    );
  }
}
