import axios from 'axios';
import React from 'react'
// import {useNavigate} from 'react-router-dom';

export default function FeedBack() {
    // const navigate=useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        await axios.post("http://localhost:5000/feedback",{
            name : data.get("name"),
            email : data.get("email"),
            exp : data.get("exp"),
            improve : data.get("improve"),
            msg : data.get("msg")
        })
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
        <div class="container">
        <form class="form-container" onSubmit={handleSubmit}>
            <div class="headline"><span>FeedBack</span></div>
            <div class="form-line">
                <input type="text" class="form-input" name='name' required/>
                <label>Name</label>
                <div class="error-label">Field is required!</div>
                <div class="check-label"></div>
            </div>
            <div class="form-line">
                <input type="text" class="form-input" name='email' required/>
                <label>Your email *</label>
                <div class="error-label">Field is required!</div>
                <div class="check-label"></div>
            </div>
		<div class="form-line">
			<input type="text" class="form-input" name='exp'/>
			<label>Experience</label>
			<div class="check-label"></div>
		</div>,
		
        <div class="form-line">
			<input type="text" class="form-input" name='improve' required/>
			<label>Improvements</label>
			<div class="error-label">Field is required!</div>
			<div class="check-label"></div>
		</div>
        <div class="form-line">
                    <textarea class="form-input" name='msg' required></textarea>
                    <label>Message</label>
                    <div class="check-label"></div>
                    <div class="error-label">Field is required!</div>
                </div>
		<input type="Submit" class="form-button" onClick={()=>(alert("submitted successsfully"))}value="Submit"/>
	</form>
</div>
    </>
    
  )
  
}
