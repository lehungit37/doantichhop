import {db} from './config'


export const addDocument = (collection, doc,data)=>{
    const query = db.collection(collection)
    query.doc(doc).set({
        ...data
    }).then(()=>{
        alert("Thêm giỏ hàng thành công")
    }
    )
    .catch(()=>{
        alert("Thêm giỏ hàng thất bại")
    })
}