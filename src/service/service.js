import axios from 'axios';

const Service = {
    login(params) {
        return axios.post('/login', params).then(res => res.data);
    },
    ruoyilogin(params) {
        console.log("start ruoyi login...");
        return axios.post('/ruoyilogin', params).then(res => res.data);
/*        return axios({
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    },//设置跨域请求头
            method: "POST",//请求方式
            url: "/ruoyilogin",//请求地址
            data: params
        }).then(res => res.data);*/
    },
    register(params) {
        return axios.post('/register', params).then(res => res.data);
    },
    getUserMsg() {
        return axios.get('/user_msg').then(res => res.data);
    },
    setUserTheme(params) {
        return axios.get(`/user_theme?username=${params.username}&user_theme=${params.user_theme}`).then(res => res.data);
    },
    getUserTheme(params) {
        return axios.get(`/user_theme?username=${params.username}&user_theme=${params.user_theme}`).then(res => res.data);
    },
    saveProfile(params) {
        return axios.post('/user_profile', params).then(res => res.data);
    },
    getProfile(params) {
        return axios.post('/user_profile', params).then(res => res.data);
    },
    selectAvatar(params) {
        return axios.get(`/user_avatar?username=${params.username}&user_avatar=${params.user_avatar}`).then(res => res.data);
    },
    getAvatar(params) {
        return axios.get(`/user_avatar?username=${params.username}&user_avatar=${params.user_avatar}`).then(res => res.data);
    },
    getQuizById(quiz_list_id) {
        return axios.get(`/quiz/${quiz_list_id}`).then(res => res.data);
    },
    getLatestList() {
        return axios.get('/latest_list').then(res => res.data);
    },
    getHottestList() {
        return axios.get('/hottest_list').then(res => res.data);
    },
    getRecommendList() {
        return axios.get('/recommend_list').then(res => res.data);
    },
    getSubjectList() {
        return axios.get('/subject_list').then(res => res.data);
    },
    getSwipeImgList() {
        return axios.get('/swipe_img_list').then(res => res.data);
    },
    getAvatarList() {
        return axios.get('/avatar_list').then(res => res.data);
    },
    getThemeList() {
        return axios.get('/theme_list').then(res => res.data);
    },
    getCollectionState(params) {
        return axios.post('/get_collection_list_state', params).then(res => res.data);
    },
    setCollectionState(params) {
        return axios.post('/set_collection_list_state', params).then(res => res.data);
    },
    getAllQuiz() {
        return axios.get('/all_quiz_list').then(res => res.data);
    },
}
export default Service;