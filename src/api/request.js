import axios from 'axios'
import qs from 'qs'
import { Indicator } from 'mint-ui';
// axios.defaults.baseURL = "/douban/movie"//配置 基础路劲
 //axios.defaults.headers = {}//配置请求头的意思 一般是post 请求时用的 配置 基础路径
 // axios.defaults.timeout = 5000;//设置请求时间
  axios.interceptors.request.use(function (config) {
       // console.log("1")
      // alert("请求之前")
       Indicator.open({
         text: '加载中...',
         spinnerType: 'fading-circle'
       });
       return config;
     }, function (error) {
       // 对请求错误做些什么
       return Promise.reject(error);
     });
     axios.interceptors.response.use(function (response) {
       // console.log("2")
      // alert("请求之后")
      Indicator.close();
       return response;
     }, function (error) {
       // 对响应错误做点什么
       return Promise.reject(error);
    });
const axiosGet = (url,params={})=>{
  return new Promise((resolve,reject)=>{
    axios.get(url,{params:params}).then((res)=>{
      resolve(res.data)
    }).catch((err)=>{
      reject(err)
    })
  })
  // return axios.get(url,{params:params}).then((res)=>res.data);
}
const axiosPost = (url,params={})=>{
  return new Promise((resolve,reject)=>{
    params = qs.stringify(params)
    axios.post(url,{params:params}).then((res)=>{
      resolve(res.data)
    }).catch((err)=>{
      reject(err)
    })
  })
}

// const axiosGet = (url,params={})=>{
  // return new Promise((resolve,reject)=>{
  //   axios.get(url,{params:params}).then((res)=>{
  //     resolve(res.data)
  //   }).catch((err)=>{
  //     reject(err)
  //   })
  // })
  // return axios.get(url,{params:params}).then((res)=>res.data);
// }
// const axiosPost = (url,params={})=>{
//   return new Promise((resolve,reject)=>{
//     params = qs.stringify(params)
//     axios.post(url,{params:params}).then((res)=>{
//       resolve(res.data)
//     }).catch((err)=>{
//       reject(err)
//     })
//   })
// }


// const axiosGet = (url,params={})=>{
  // return new Promise((resolve,reject)=>{
  //   axios.get(url,{params:params}).then((res)=>{
  //     resolve(res.data)
  //   }).catch((err)=>{
  //     reject(err)
  //   })
  // })
  // return axios.get(url,{params:params}).then((res)=>res.data);
// }
// const axiosPost = (url,params={})=>{
//   return new Promise((resolve,reject)=>{
//     params = qs.stringify(params)
//     axios.post(url,{params:params}).then((res)=>{
//       resolve(res.data)
//     }).catch((err)=>{
//       reject(err)
//     })
//   })
// }
export default{
  get:axiosGet,
  post:axiosPost
}



// import axios from 'axios'

// const axiosGet = (url,params={})=>{
//   return new Promise((resolve,reject)=>{
//     axios.get(url,{params:params}).then((res)=>{
//       resolve(res.data)
//     }).catch((err)=>{
//       reject(err)
//     })
//   })
//   return axios.get(url,{params:params}).then((res)=>res.data);
// }
// const axiosPost = (url,params={})=>{
//   return new Promise((resolve,reject)=>{
//     //params = qs.stringify(params)
//     axios.post(url,{params:params}).then((res)=>{
//       resolve(res.data)
//     }).catch((err)=>{
//       reject(err)
//     })
//   })
// }
// export default{
//   get:axiosGet,
//   post:axiosPost
// }
