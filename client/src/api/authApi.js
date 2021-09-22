import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('https://crushy.herokuapp.com/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true);
                    setCart(res.data.cart);

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    },[token]);

    const addCart = async (product, quantity) => {
        if(!isLogged) return alert("Please login to continue buying");
        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: quantity}]);
            await axios.patch('https://crushy.herokuapp.com/user/addcart', {cart: [...cart, {...product, quantity: quantity}]}, {
                headers: {Authorization: token}
            });
        }else{
            alert("This product has been added to cart.");
        }
    };

    return {
        isLogged: [isLogged, setIsLogged],
        cart: [cart, setCart],
        addCart: addCart,
    };
}

export default UserAPI
 