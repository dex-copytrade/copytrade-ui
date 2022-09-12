export function formatPublicKey(pk: string) {
  const prefix = pk.substring(0, 4);
  const lengthOfPK = pk.length;
  const suffiex = pk.substring(lengthOfPK - 4, lengthOfPK);
  return `${prefix}...${suffiex}`;
}

export function GetQueryString(name: string) {
  let reg: any = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
  var context = "";
  if (r != null)
      context = decodeURIComponent(r[2]);
  reg = null;
  r = null;
  return context == null || context == "" || context == "undefined" ? "" : context;
}


export function hanlderJump (url:string, parmas: any = {}) {
  let tempParms: any = ''
  if(parmas){
    Object.keys(parmas).map((key: string,index) => {
      const splicing = index == 0 ? '?' : '&'
      tempParms += `${splicing}${key}=${parmas[key]}`
    })
  }
  window.location.href = `/${url}${tempParms}`
}

export const format = (str: any) => {
  if (str) {
    return `${str.slice(0, 5)}....${str.slice(str.length - 5, str.length)}`;
  } else {
    return "";
  }
};
