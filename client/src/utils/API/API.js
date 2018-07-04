import axios from "axios";

const API= {

    //axios call to sign up 
    signUp: (password, username)=>{
        return axios.post('/user/signup',{
          username:username,
          password:password
        })

    },
    //axios call to log in
    logIn:(password, username)=>{
      return axios.post('/user/login',{
        username:username,
        password:password
      })
    },
    //axios call to get current user
    getUser:()=>{
      return axios.post('user/getuser',{
      })
    },

    logOut:()=>{
      return axios.post('user/logout',{
      })
    }
  };

  export default API