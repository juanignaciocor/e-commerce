import axios from "axios"

export const allCategory = (allCategory) => ({
    type: "ALL_CATEGORY",
    allCategory
});

export const oneCategory = (single) => ({
    type: "ONE_CATEGORY",
    single
});

export const fetchAllCategory = () => dispatch => {
    return axios.get('/api/category/allCategory')
        .then((res) => { dispatch(allCategory(res.data)) })
        .catch(err => console.log(err))
}

export const singleCategory = (id) => dispatch => {
    return axios.get(`/api/category/oneCategory/${id}`)
        .then(res => { dispatch(oneCategory(res.data)) })
        .catch(err => console.log(err))

}