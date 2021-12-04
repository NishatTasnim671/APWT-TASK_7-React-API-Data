import React, {useState, useEffect} from "react";
import axios from "axios";
import Category from './Category';

const AllCategories = ()=>{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/Category/list")
        .then(resp=>{
            console.log(resp.data);
            setCategories(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            {<table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                    {categories.map(category=>(
                <tr key={category.id}>
                    <td >{category.name}</td>
                    <td >{category.desc}</td>
                </tr>
                    ))}
            </table> }
        


        </div>
    )

}
export default AllCategories; 