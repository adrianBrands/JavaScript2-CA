//login user API 
fetch('https://nf-api.onrender.com/api/v1/social/auth/login', {
    method:'POST',
    body: JSON.stringify({
       "email": "AdrBra10066@stud.noroff.no",
       "password": "ReinungaMaxHufsi1894"
    }),
    headers: {
        'Content-type': 'application/json; charset=UTf-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
    
    
    const accsessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwLCJuYW1lIjoiYWRyaWFuX2IiLCJlbWFpbCI6IkFkckJyYTEwMDY2QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2MzU5NjM2MX0.mTrix3JDspZF6hoPFfMUZHLZN4oZSwRAiInJplQngK8";