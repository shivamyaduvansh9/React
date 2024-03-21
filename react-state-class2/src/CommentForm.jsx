import { useState } from "react";

export default function CommentForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks:"",
        rating: 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks:"",
            rating: 5,
        });
    }

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
               <input placeholder="username"  
                    id="username" name="username"
                    type="text"
                    value={formData.username} 
                    onChange={handleInputChange}
                />
               <br /> <br /> 
               <label htmlFor="remarks">Remarks</label>
               <textarea placeholder="add few remarks" 
                    value={formData.remarks} 
                    id="remarks" name="remarks"
                    onChange={handleInputChange}
                >Remarks</textarea>
               <br /> <br /> 
                <label htmlFor="rating">Rating</label>
               <input placeholder="rating" 
                    type="number" name="rating"
                    value={formData.rating} 
                    id="rating"
                    min={1} max={5} 
                    onChange={handleInputChange}
               />
               <br /> <br />

               <button>Add comment</button>
            </form>
        </div>
    );
}