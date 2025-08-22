/*GET homepage*/
const index=(req,res)=>{
    res.render('index',{'title':'citizen empowerment'});
};
module.exports={
    index
};   