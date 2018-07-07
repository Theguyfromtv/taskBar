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
      return axios.post('/user/getuser',{
      })
    },
    //axios call to log out
    logOut:()=>{
      return axios.post('/user/logout',{
      })
    },
    newTask:(id,title, description,dueDate)=>{
      return axios.post('/task/new',{
        id:id,
        title:title,
        description:description,
        dueDate:dueDate
      })
    },
    deleteTask:(uid, tid)=>{
      return axios.post('/task/delete',{
        uid:uid,
        tid:tid
      })
    }
    
  };

  export default API