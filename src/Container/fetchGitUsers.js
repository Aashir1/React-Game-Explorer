import React from 'react';
import { connect } from 'react-redux';
import SearchButton from '../components/searchButton';
import DateList from '../components/list';
import GitAction from '../store/action/searchUserAction';
import InfoList from '../components/infoList';
import searchIcon from '../searchIcon.svg';
function mapStoreStateToProps(state) {
  console.log('store state: ', state);
  return {
    data: state.StoreUser.allData
  }
}

function mapDispatchWithProps(dispatch) {
  return {
    searchData: (data) => dispatch(GitAction.searchData(data)),
  }
}
const styles = {
  alert: {
    color: 'rgb(221, 44, 0)',
    backgroundColor: 'rgb(255, 158, 128)',
    width: '70vw',
    margin: '30px auto',
    padding: '20px',
    borderRadius: '8px',
  }
}
class GitUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDays: "Days",
      startMonth: "Month",
      startYear: "Year",
      endDays: "Days",
      endMonth: "Month",
      endYear: "Year",
      show: false,
    }
    this.flag = false;
    this.string = '';
  }

  componentDidUpdate() {

    console.log('chal gaya');
    // let startDate = `${this.state.startYear}-${this.state.startMonth}-${this.state.startDays}`,
    //   endDate = `${this.state.endYear}-${this.state.endMonth}-${this.state.endDays}`,
    //   localFlag = false;
    // if (typeof (this.state.startYear, this.state.startMonth, this.state.startDays, this.state.endYear, this.state.endMonth, this.state.endDays) === 'number') {
    //   localFlag = endDate > startDate ? false : true;
    //   console.log(localFlag);
    //   console.log('endDate: ', endDate);
    //   console.log('startDate: ', startDate);        
    //   // this.setState({show: false});
    //   this.flag = localFlag;
    // }

  }
  componentDidMount() {
    // this.setState({show: true});        
    console.log('component did mount');
    // this.props.searchUser();
  }
  listGenrator = (start, end, string) => {
    let items = [string];
    for (let i = start; i <= end; i++) {
      items.push(i);
    }
    return items;
  }
  handleChange = (ev, indx, value, string) => {
    let obj = {};
    this.string = string;
    obj[string] = value;
    this.setState(obj);

  }
  fetchData = () => {
    let startDate = `${this.state.startYear}-${this.state.startMonth}-${this.state.startDays}`,
      endDate = `${this.state.endYear}-${this.state.endMonth}-${this.state.endDays}`;
    if (typeof (this.state.startYear, this.state.startMonth, this.state.startDays, this.state.endDays, this.state.endMonth, this.state.endYear) === 'number') {
      this.props.searchData(`${startDate}|${endDate}`);
      console.log('data is dispatched')
    }
  }
  render() {
    let startDate = `${this.state.startYear}-${this.state.startMonth}-${this.state.startDays}`,
      endDate = `${this.state.endYear}-${this.state.endMonth}-${this.state.endDays}`,
      localFlag = false;
    if (typeof (this.state.startYear, this.state.startMonth, this.state.startDays, this.state.endYear, this.state.endMonth, this.state.endDays) === 'number') {
      localFlag = endDate > startDate ? false : true;
      // this.setState({show: false});
      this.flag = localFlag;
      console.log(this.flag);
    }
    return (
      <div >
        <h1 style={{ textAlign: 'center' }}>React Game Explorer</h1>
        <div style={{marginLeft:'25px'}}>
          <h2>Release Year (Start Value)</h2>
          <DateList value={this.state.startDays} _onChange={(ev, indx, value) => { this.handleChange(ev, indx, value, 'startDays') }} listItems={this.listGenrator(1, 31, "Days")} />
          <DateList value={this.state.startMonth} _onChange={(ev, indx, value) => { this.handleChange(ev, indx, value, 'startMonth') }} listItems={this.listGenrator(1, 12, "Month")} />
          <DateList value={this.state.startYear} _onChange={(ev, indx, value) => { this.handleChange(ev, indx, value, 'startYear') }} listItems={this.listGenrator(1990, 2018, "Year")} />

          <h2>Release Year (End Value)</h2>
          <DateList value={this.state.endDays} _onChange={(ev, indx, value) => { this.handleChange(ev, indx, value, 'endDays') }} listItems={this.listGenrator(1, 31, "Days")} />
          <DateList value={this.state.endMonth} _onChange={(ev, indx, value) => { this.handleChange(ev, indx, value, 'endMonth') }} listItems={this.listGenrator(1, 12, "Month")} />
          <DateList value={this.state.endYear} _onChange={(ev, indx, value) => { this.handleChange(ev, indx, value, 'endYear') }} listItems={this.listGenrator(1990, 2018, "Year")} />
          {
            this.flag ?
              <div>
                <SearchButton btnText="Search" disable={true} _onClick={this.fetchData} />
                <div style={styles.alert}>End Released Date must be greater than start release date</div>
              </div>
              :
              <SearchButton btnText="Search" _onClick={this.fetchData} />
          }
        </div>
        {
          this.props.data.length === 0 ?
          <h2 style={{textAlign : 'center', color:'grey'}}><img src={searchIcon} alt='icon tha'/> Select Release Date to start search</h2>
          :
          <InfoList listItems={this.props.data} />
        }


      </div>
    )
  }
}

export default connect(mapStoreStateToProps, mapDispatchWithProps)(GitUser);