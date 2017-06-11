import { connect } from 'react-redux';

import Editor from '../../components/Editor';
import { incrementAccessCount } from '../../../apiProjectList/actions';


const mapDispatchToProps = dispatch => ({
  onApiProjectView: apiProjectName => dispatch(incrementAccessCount(apiProjectName)),
});


export default connect(null, mapDispatchToProps)(Editor);
