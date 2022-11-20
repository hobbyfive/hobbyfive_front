import axios from 'axios';

export const requestLogin = async (email, pw) => {
    return await axios
      .post(
        '/',
        {
          email: email,
          password: pw,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response.data.accessToken : " + response.data);
        /// token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
        axios.defaults.headers.common[
          "Authorization"
        ] = 'Bearer ${response.data.access_token}';
        return response.data;
      })
      .catch((e) => {
        return "이메일 혹은 비밀번호를 확인하세요.";
      });
  };