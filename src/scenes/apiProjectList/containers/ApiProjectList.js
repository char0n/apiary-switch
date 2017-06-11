import { connect } from 'react-redux';

import ApiProjectList from '../components/ApiProjectList';
import { apiProjectsMatchingQuerySelector } from '../../../modules/searchInput/selectors';


const mapStateToProps = state => ({
  apiProjects: apiProjectsMatchingQuerySelector(state),
});

export default connect(mapStateToProps, null)(ApiProjectList);
