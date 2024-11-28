const fetctAPI = (async ()=>{
try{
   const response = await fetch('https://reqres.in/api/users/2');

   if(response.status!=200){
    throw new Error('Failed to fetch data');
   }

   const body =  await response.json();
   console.log(body);
}
catch(err){
    console.error(err);
}

})

fetctAPI();