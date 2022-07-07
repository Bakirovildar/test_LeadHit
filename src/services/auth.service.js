import axios from 'vue-axios'
const API_URL = 'https://track-api.leadhit.io/client/test_auth'
const API_KEY = '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo'
class AuthService {
    login(siteId) {
        return axios
            .get(API_URL, {
                headers: {
                    'Api-Key': API_KEY,
                    'Leadhit-Site-Id': siteId
                }
            })
            .then(response => {
                if (response.data.message && response.data.message === 'ok') {
                    console.log("Login success")
                    localStorage.setItem('leadhit-site-id', siteId)
                }
                return response.data;
            })
            .catch(err => console.log(err))
    }
}
export default new AuthService();