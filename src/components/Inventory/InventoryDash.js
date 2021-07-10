import React ,{ Component } from 'react'
import { NavItem } from 'react-bootstrap'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from '../SideBar/Sidebar'
import './Inventory.css'



export class InventoryDash extends Component{
    

    state = {
        inventory: []
    }
    
    notifyeerror = (msg)=>{
        toast.error(msg)
      }

      notifysucces = (msg)=>{
        toast.success (msg)
      }

      notifyinfo= (msg)=>{
        toast.info (msg)
      }

    

    componentDidMount(){
        this.getInventory()
    }
    
    checkProduct = (e)=>{
        e.preventDefault();
        const itemToFound = e.target.product
         const itemValue = itemToFound.value
         console.log(itemValue)
         const itemToCompare = this.state.inventory.find( (item)=>{
            return itemValue==item.productName
         })

        
         if (itemToCompare){
            if(itemToCompare.Quantity>0){
                this.notifysucces("Item Available")
            }else{
                this.notifyinfo("Iten Out of Stock")
            }
         }else{
             this.notifyeerror("Item not on Invetary")
         }

        

         //console.log(result)
    }

    getInventory = async ()=>{
            const response = await fetch(`http://localhost:5000/inventory`)   
            const data = await response.json()
            console.log(data)
            this.setState({
                inventory: data
            }) 
            console.log(this.state)     
    }



    render(){
        return (
            <>
                <div className="dashinventory">
                    <Sidebar></Sidebar>
                    <div className="inventorycanvas">
                       <div className=" titleinventory">
                           <h1 className="titledeco">Check Products</h1>
                           <form  className="form" onSubmit={this.checkProduct} >
                            <input type="text" name="product" className="box mail" placeholder="Item"  />
                                    <button type="submit" className="submit" ></button>
                            </form>
                       </div>
                       <div className="inventoryform">
                            <table className="table-fill">
                                <thead>
                                    <tr>
                                    <th className="text-left">ID</th>
                                    <th className="text-left">ProductName</th>
                                    <th className="text-left">Quantity</th>
                                    <th className="text-left">Price</th>

                                </tr>
                                </thead>
                                <tbody className="table-hover">
                                    {this.state.inventory.map(item =>(
                                        <tr key={item.id}>
                                        <td className="text-left">{item.id}</td>
                                        <td className="text-left">{item.productName}</td>
                                        <td className="text-left">{item.Quantity}</td>
                                        <td className="text-left">{item.Price}$</td>
                                        </tr>
                                    ))}
                                    
                                
                                </tbody>
                            </table>
                                
                                                    </div>
    
                    </div>
                </div>
            </>
        )
    }
    
}

// export const InventoryDash = () => {

    
// }

export default InventoryDash
