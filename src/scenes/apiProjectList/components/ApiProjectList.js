import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import classNames from 'classnames';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import './ApiProjectList.css';


const iconStyle = {
  fontSize: '17px',
  marginRight: '10px',
};

class ApiProjectList extends React.Component {
  constructor() {
    super();

    this.onFilter = this.onFilter.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  /* eslint-disable */
  onFilter(event, index, value) {
  }

  onSort(event, index, value) {
  }
  /* eslint-enable */

  render() {
    return (
      <main className="api-project-list">
        <header className="api-project-list__header">
          <section className="api-project-list__filter">
            <SelectField
              floatingLabelText="Filter"
              value={'no-criteria'}
              onChange={this.onFilter}
            >
              <MenuItem value={'no-criteria'} primaryText="No criteria" />
              <MenuItem value={'is:private'} primaryText="Private" />
              <MenuItem value={'is:public'} primaryText="Public" />
              <MenuItem value={'is:ghconnected'} primaryText="Github connected" />
              <MenuItem value={'is:swagger'} primaryText="Swagger" />
              <MenuItem value={'is:apiblueprint'} primaryText="Api Blueprint" />
            </SelectField>
          </section>
          <section className="api-project-list__sort">
            <SelectField
              floatingLabelText="Sort by"
              value={1}
              onChange={this.onSort}
            >
              <MenuItem value={1} primaryText="Project title" />
              <MenuItem value={2} primaryText="Recent visit" />
            </SelectField>
          </section>
        </header>
        <br /><br />
        {this.props.apiProjects.map(apiProject => ([
        (
          <Card key={apiProject.name}>
            <CardHeader
              title={<Link to={`/editor/${apiProject.name}`}>{apiProject.title}</Link>}
              subtitle={`${apiProject.author} - ${apiProject.name}`}
              actAsExpander={false}
              showExpandableButton={false}
            />
            <CardText>
              <small>{apiProject.type}</small>
            </CardText>
            <CardActions>
              <FontIcon
                className={classNames('fa', {
                  'fa-eye': apiProject.visibility === 'public',
                  'fa-eye-slash': apiProject.visibility === 'private',
                })}
                style={iconStyle}
              />
              {apiProject.githubConnected && (
                <FontIcon className="fa fa-github" style={iconStyle} />
              )}
            </CardActions>
          </Card>
        ),
        (
          <br />
        ),
        ]))}
        {this.props.apiProjects.length === 0 && (
          <section className="api-project-list__empty">
            We found nothing.<br /><br />
            <RaisedButton label="Create new Api project" backgroundColor="#a4c639" />
          </section>
        )}
      </main>
    );
  }
}

ApiProjectList.propTypes = {
  apiProjects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ApiProjectList;
