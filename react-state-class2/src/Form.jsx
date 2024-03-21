import { useState } from "react"


export default function Form() {
    let [formData, setFormData] = useState ({
        fullName: "",
        username: "",
        password: "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData ( (currData) => {
            return {...currData, [fieldName]: newValue};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullname" name="fullName"
                placeholder="enter your fullname " 
                type="text" value={formData.fullName} 
                onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="username">Username</label>
            <input id="username" name="username"
                placeholder="enter username" 
                type="text" value={formData.username} 
                onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input id="password" name="password"
                placeholder="enter password" 
                type="password" value={formData.password} 
                onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}