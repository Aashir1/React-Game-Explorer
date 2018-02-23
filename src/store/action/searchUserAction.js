import actionTypes from '../../constants/constant'
class GitAction {
    static SAVE_USERS = 'SAVE_USERS';

    static searchData(date) {
        console.log('action called')
        return (dispatch) => {
            dispatch(GitAction.storeDataRequest());
            let response = GitAction.fetchJSON(`https://www.giantbomb.com/api/games/?api_key=3273aa02795ba116995d82e207bea1efda143ebf&format=json&filter=original_release_date:${date}&field_list=name,image,original_release_date,site_detail_url`, { mode: 'no-cors' });
            response.then(user => {
                console.log(user);
                let arrayOfObj = user.results;
                arrayOfObj.map(eachObj => {
                    let obj = {
                        imageURL: eachObj.image.icon_url,
                        name: eachObj.name,
                        releaseDate: eachObj.original_release_date,
                        detailURL: eachObj.site_detail_url,
                    }
                    dispatch(GitAction.storeData(obj));
                })

                // let obj = {
                //     name: user.login,
                //     imageURL: user.avatar_url,
                //     profileURL: user.html_url
                // }
            })
        }
    }

    static fetchJSON(URL) {
        return fetch(URL).then(response => response.json())
            .catch(err => console.log('Error:', err));
    }

    static storeData(obj) {
        return {
            type: actionTypes.STORE_DATA,
            obj
        }
    }
    static storeDataRequest(){
        return{
            type: actionTypes.STORE_DATA_REQUEST,
        }
    }
}



export default GitAction;



