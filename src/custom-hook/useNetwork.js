import axios from "axios";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateLoader, updateData, updateError } from "../store/actions/product-listing";
export default function useNetwork(url) {
    const dispatch= useDispatch()
    const products = useSelector((state) => state.productList.products);
    console.log("useNetwork Page", products)
    useEffect(()=>{
    dispatch(updateLoader(true));
    dispatch(updateError(null))
    axios.get(url)
    .then((response)=>{
        //console.log("Res", response.data);
        dispatch(updateData(response.data || []))
    }).catch((err)=>{
        dispatch(updateError(err))
    }).finally(()=>{
        dispatch(updateLoader(false))
    })
}, [url,dispatch])

return (
    {products}
  )
}
