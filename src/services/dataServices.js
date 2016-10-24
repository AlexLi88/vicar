'use strict'
import axios from 'axios';

class DataService {

  constructor() {
    this.auth0ServerUrl = 'https://vicars.auth0.com';
    this.userToken = 'Bearer ' + localStorage.access_token;
    this.user = null;
    this.userType = null;
    axios.defaults.headers.post['Content-Type'] = 'text/json';
    // axios.defaults.headers.common['Authorization'] = this.userToken
    console.log(this.userToken);
    // if (this.userToken && this.userToken.length > 0) {
    //   this._getUserProfile();
    // } else {
    //   this.userType = 'visitor';
    // }
  }

  _getUserProfile() {
    axios({
      method: 'GET', url: this.auth0ServerUrl + '/userinfo', headers: {
        'Authorization': 'Bearer ' + localStorage.access_token
      }
    }).then((res)=>{
      this.user = res.data;
      this.userType = 'user';
    }).catch((err)=>{
      console.log(this.userToken);
      this.userToken = null;
      this.userType = 'visitor';
    })
  }

  getUser() {
   return axios({
     method: 'get',
     url: this.auth0ServerUrl + '/userinfo',
     headers: {
       'Authorization': 'Bearer ' + localStorage.access_token
     }
   })
  }

  getUserType() {
    return this.userType;
  }

}

let dataService = new DataService();
module.exports = dataService;


