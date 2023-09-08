import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import { useState } from "react";
import salesService from "../../services/sales-service";

const SaleItem = ({ item }) => {

    const [edit, setEdit] = useState(false)
    const [stat, setStat] = useState(item.status)
    const [change, setChange] = useState("")

    const handleSubmit = ()=>{
      if(change !== ""){
        // console.log("triggered")
        salesService.update(item._id, change)
        .then((res) => {
            console.log("res", res.data);
            setStat(change)
        })
        .catch((err) => {
            console.log("err", err);
        });
      }
      setEdit(false)
    }

    const handleEdit = ()=>{
      setEdit(true)
    }

    const handleChange = (e)=>{
      // console.log(e.target.value)
      if(e.target.value !== stat){
        setChange(e.target.value)
        setStat(e.target.value)
      }
    }

    // console.log(item);
    return (<ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src={ item.vegID.image } />
    </ListItemAvatar>
    <ListItemText
      primary= { `${item.vegID.name} | Qty.: ${item.quantity}  Price: Rs. ${item.vegID.price}` }
      secondary={
        <>
        <Typography
            variant="body2"
            color="text.primary"
          >
           Sold to: {""}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Status:
            {
              edit
              ?
              <label htmlFor="shipping">
                <select name="shipping" id="shipping"
                  defaultValue={stat}
                  onChange={handleChange}>
                  <option value="paid">Paid</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </label>
              :
              stat
            }
          </Typography>
          {edit ? <button onClick={handleSubmit} >Update</button>  :  <button onClick={handleEdit} >Edit</button>}
        </>
      }
    />
  </ListItem>)
};

export default SaleItem;