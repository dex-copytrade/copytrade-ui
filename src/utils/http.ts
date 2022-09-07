// 统一对 get 方法进行封装
import { Modal } from 'antd';

// import { loginLark } from ".";

const resCheck = (res: any) => {
  if (res.code === 0) {
    return res.data;
  } else if (res.code === 402) {
    // loginLark();
  } else if (res.code === 403) {
    // Modal.error({
    //   title: "提示",
    //   content: "暂无访问权限！",
    //   onOk() {
    //     location.href = '/'
    //   },
    // });
  } else {
    return Promise.reject(res.message);
  }
};

const baseUrl = '';
export const get = async (url: string, data = {}) => {
  try {
    // 拼接 get 请求参数
    let query = '?' + new URLSearchParams(data).toString();
    console.log(new URLSearchParams(data).toString());
    // 发送异步请求
    const response = await fetch(`${baseUrl}${url}${query}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        owner: localStorage.getItem('owner') || '',
      },
    });
    const res = await response.json();
    return resCheck(res);
  } catch (error) {
    // alert("GET 请求失败!");
    console.log(error);
  }
};

// 统一对 post 方法进行封装
export const post = async (url: string, data = {}) => {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST', // 默认为 GET 请求
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        owner: localStorage.getItem('owner') || '',
      },
    });
    const res = await response.json();
    return resCheck(res);
  } catch (error) {
    console.log(error);
  }
};
