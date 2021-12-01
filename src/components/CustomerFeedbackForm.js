import React from "react";
import { useState } from "react";
import { TextField, Rating, Typography, Button } from "@mui/material";

const ReferralForm = () => {
    const [values, setValues] = useState({
        customerName: '',
        customerRating: null,
        customerReview: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
    const resetValues = () => {
        console.log(values);
        setValues({
            customerName: '',
            customerRating: '',
            customerReview: '', 
        });
    }

    return (
        <>
            <div>
                <Typography component="legend">What's your name</Typography>
               <TextField 
                    variant="standard" 
                    onChange={handleChange('customerName')}
                /> 
            </div>
            <div>
               <Typography component="legend">How would you rate us?</Typography>
                <Rating
                    name="simple-controlled"
                    value={values.customerRating}
                    onChange={handleChange('customerRating')}
                /> 
            </div>
            <div>
                <Typography component="legend">If this was an Amazon review, what would you write about us?</Typography>
                <TextField
                    id="standard-textarea"
                    placeholder="Your thoughts here"
                    multiline
                    value={values.customerReview}
                    onChange={handleChange('customerReview')}
                    variant="standard"
                />
            </div>

            <Button onClick={resetValues}>Submit</Button>
            
        </>
    );

};

export default ReferralForm;

