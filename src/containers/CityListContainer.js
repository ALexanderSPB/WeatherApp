import { connect } from 'react-redux';
import CityList from '../components/CityList';


const mapStatetoProps = (state) => ({
  cityList: state.cityList
})


const CityListContainer = connect(mapStatetoProps)(CityList)

export default CityListContainer;
