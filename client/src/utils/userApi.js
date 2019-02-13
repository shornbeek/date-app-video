import axios from "axios"

export default {
    findIfUserExists: id => {
        axios.get(`/api/users/${id}`).then(result => {
            if (result === null){
                return false;
            }else{
                return true;
            }
        })
    }
}